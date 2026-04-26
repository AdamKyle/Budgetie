# Budgetie

Budgetie is a personal budget planning app built with Django REST Framework, PostgreSQL, React, TypeScript, Tailwind CSS, Vite, Yarn, and Docker.

## Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Fill out `.env` with:

```env
POSTGRES_DB=budgetie
POSTGRES_USER=budgetie
POSTGRES_PASSWORD=your_password_here
POSTGRES_HOST=database
POSTGRES_PORT=5432

BACKEND_PORT=8001
FRONTEND_PORT=5173

DJANGO_SECRET_KEY=your-local-django-secret-here
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0
DJANGO_CORS_ALLOWED_ORIGINS=http://budgetie.test:5173
```

Add the local development domains once:

```bash
sudo sh -c 'printf "\n127.0.0.1 budgetie.test api.budgetie.test\n" >> /etc/hosts'
```

This lets you visit `budgetie.test` for the frontend, while `api.budgetie.test` is reserved for local API endpoints.

Start the app:

```bash
docker compose up -d --build
```

Run database migrations:

```bash
docker compose run --rm backend python manage.py migrate
```

Before opening the frontend, check that the backend is running:

```text
http://localhost:8001/api/health/
```

That URL should return:

```json
{ "status": "ok" }
```

Then open the frontend:

```text
http://budgetie.test:5173
```
