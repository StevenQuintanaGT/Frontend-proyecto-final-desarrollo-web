# Integración Frontend ↔ Backend (MotorMania)

Resumen rápido de los endpoints y cómo integrarlos desde el frontend.

Base URL (dev): http://127.0.0.1:8000/api

## Endpoints

- POST /api/auth/register/
  - Request: { username, password, email }
  - Response: { token, user }

- POST /api/auth/login/
  - Request: { username, password }
  - Response: { token, user }

- GET /api/contacts/
  - Público (GET)

- POST /api/contacts/
  - Requiere Token
  - Request: { name, email, subject, message }

## Implementación en este frontend

- Helpers en `src/app/api.ts`:
  - `register(username, email, password)` → realiza POST /auth/register/
  - `login(username, password)` → realiza POST /auth/login/
  - `createContact(contact)` → realiza POST /contacts/ (añade header Authorization si hay token en localStorage)
  - `getToken()` / `setToken()` / `getUser()` helpers para almacenamiento local

- Páginas añadidas:
  - `src/app/pages/login` — ahora soporta login y registro desde la misma UI. Guarda token en `localStorage`.
  - `src/app/pages/contact` — formulario de contacto que requiere que el usuario esté autenticado (se comprueba token). Si falta token muestra mensaje para iniciar sesión.

## Cómo probar (local)

1. Levanta el backend (en la carpeta del backend):

```powershell
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

2. Levanta el frontend (desde la carpeta `Frontend`):

```powershell
npm install
npm start
```

3. Flujo de prueba manual:
- Abrir `/login`, registrarse con usuario/email/password
- Abrir `/contact`, rellenar el formulario y enviar
- Comprobar en backend que el contacto fue creado (o en `/api/contacts/` GET)

## Notas de seguridad
- En producción no uses `localStorage` para tokens sensibles sin considerar HttpOnly cookies o renovación/expiración.
- Ajusta CORS en el backend a los orígenes del frontend antes de desplegar.

## Posibles mejoras
- Migrar a JWT con expiración y refresh tokens.
- Guardar token en cookie segura HttpOnly.
- Añadir manejo de errores más robusto (mapeo de campos, validaciones). 
