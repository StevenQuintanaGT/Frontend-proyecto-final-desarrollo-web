import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createContact, getToken } from '../../api';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  protected readonly loading = signal(false);
  protected readonly success = signal<string | null>(null);
  protected readonly error = signal<string | null>(null);
  protected readonly fieldErrors = signal<{ name?: string; email?: string; subject?: string; message?: string }>({});

  protected async onSubmit(event: Event) {
    event.preventDefault();
    this.error.set(null);
    this.success.set(null);
    this.fieldErrors.set({});
    const token = getToken();
    if (!token) {
      this.error.set('Debes iniciar sesión para enviar un mensaje.');
      return;
    }
    const form = event.target as HTMLFormElement;
    const fd = new FormData(form);
    const payload = {
      name: fd.get('name') as string,
      email: fd.get('email') as string,
      subject: fd.get('subject') as string,
      message: fd.get('message') as string
    };
    // client-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.name) this.fieldErrors.update(s => ({ ...s, name: 'Nombre requerido' }));
    if (!payload.email || !emailRegex.test(payload.email)) this.fieldErrors.update(s => ({ ...s, email: 'Correo inválido' }));
    if (!payload.subject) this.fieldErrors.update(s => ({ ...s, subject: 'Asunto requerido' }));
    if (!payload.message || payload.message.length < 5) this.fieldErrors.update(s => ({ ...s, message: 'Mensaje demasiado corto' }));
    const errs = this.fieldErrors();
    if (errs.name || errs.email || errs.subject || errs.message) {
      this.error.set('Corrige los errores del formulario.');
      return;
    }
    this.loading.set(true);
    try {
      const res = await createContact(payload);
      this.success.set('Mensaje enviado correctamente.');
      form.reset();
    } catch (err: any) {
      console.error(err);
      this.error.set(err?.data || err?.message || 'Error al enviar');
    } finally {
      this.loading.set(false);
    }
  }
}
