import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register, login, getUser, clearToken, API_BASE } from '../../api';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  protected readonly submitted = signal(false);
  protected readonly mode = signal<'login' | 'register'>('login');
  protected readonly loading = signal(false);
  protected readonly error = signal<string | null>(null);
  protected readonly success = signal<string | null>(null);
  protected readonly fieldErrors = signal<{ username?: string; email?: string; password?: string }>({});

  protected get currentUser() {
    return getUser();
  }

  protected toggleMode(): void {
    this.mode.set(this.mode() === 'login' ? 'register' : 'login');
    this.error.set(null);
    this.success.set(null);
  }

  protected async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.error.set(null);
    this.success.set(null);
    const form = event.target as HTMLFormElement;
    const fd = new FormData(form);
    const username = (fd.get('username') as string) || (fd.get('correo') as string);
    const email = fd.get('email') as string | null;
    const password = fd.get('password') as string || (fd.get('contrasena') as string);
    this.loading.set(true);
    try {
      // client-side validations
      this.fieldErrors.set({});
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.mode() === 'register') {
        if (!username) this.fieldErrors.update(s => ({ ...s, username: 'Usuario requerido' }));
        if (!email || !emailRegex.test(email)) this.fieldErrors.update(s => ({ ...s, email: 'Correo inválido' }));
        if (!password || password.length < 6) this.fieldErrors.update(s => ({ ...s, password: 'La contraseña debe tener al menos 6 caracteres' }));
        const errs = this.fieldErrors();
        if (errs.username || errs.email || errs.password) throw { message: 'Errores en el formulario' };
  const res = await register(username!, email!, password!);
        this.success.set('Registro correcto. Sesión iniciada.');
      } else {
        if (!username) this.fieldErrors.update(s => ({ ...s, username: 'Usuario requerido' }));
        if (!password) this.fieldErrors.update(s => ({ ...s, password: 'Contraseña requerida' }));
        const errs = this.fieldErrors();
        if (errs.username || errs.password) throw { message: 'Errores en el formulario' };
  const res = await login(username!, password!);
        this.success.set('Inicio de sesión correcto.');
      }
      this.submitted.set(true);
    } catch (err: any) {
      console.error(err);
      // Map server validation errors to field messages when possible
      const status = err?.status;
      const data = err?.data;
      // Reset previous field errors
      this.fieldErrors.set({});

      if (status === 400 && data && typeof data === 'object') {
        // backend might return { username: ['error'], password: ['error'] } or { non_field_errors: ['...'] }
        const fieldMap: any = {};
        for (const key of Object.keys(data)) {
          const val = data[key];
          const text = Array.isArray(val) ? val.join(' ') : String(val);
          if (key === 'non_field_errors' || key === 'detail') {
            this.error.set(text);
          } else if (key === 'username' || key === 'email' || key === 'password') {
            fieldMap[key] = text;
          } else {
            // unknown key -> show global message
            this.error.set(text);
          }
        }
        if (Object.keys(fieldMap).length) this.fieldErrors.set(fieldMap);
        if (!this.error()) {
          // fallback generic message for 400
          this.error.set('Hay errores en el formulario. Revisa los campos.');
        }
      } else if (status === 401) {
        this.error.set('Credenciales inválidas. Verifica usuario y contraseña.');
      } else if (status === 0 || data?.detail === 'network_error') {
        this.error.set(`No se pudo conectar con el servidor (${API_BASE}). Asegúrate de que esté en ejecución.`);
      } else {
        const msg = data?.detail || err?.message || JSON.stringify(data) || 'Error desconocido';
        this.error.set(msg);
      }
    } finally {
      this.loading.set(false);
    }
  }

  protected reset(): void {
    if (this.submitted()) {
      this.submitted.set(false);
      this.error.set(null);
      this.success.set(null);
      this.fieldErrors.set({});
    }
  }

  protected logout(): void {
    clearToken();
    // reload to update UI or just clear signals
    this.success.set('Sesión cerrada');
    this.submitted.set(false);
  }
}
