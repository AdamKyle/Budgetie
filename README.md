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

Install the frontend dependencies on the host machine:

```bash
cd frontend && corepack enable && yarn install
```

Then go back to the project root:

```bash
cd ..
```

Install the backend dependencies for your editor on the host machine:

```bash
cd backend && PIPENV_VENV_IN_PROJECT=1 pipenv sync --dev
```

Then go back to the project root:

```bash
cd ..
```

Your editor should use this backend Python interpreter:

```text
backend/.venv/bin/python
```

Start the app:

```bash
docker compose up -d --build
```

Run database migrations:

```bash
docker compose exec backend python manage.py migrate

# Note: To add migrations do this:

docker compose exec backend python manage.py makemigrations
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

## Developing on the frontend

The frontend source code is mounted into Docker from the host machine.

That means you edit files locally, and the frontend container sees the changes.

The host machine owns:

```text
frontend/node_modules
frontend/package.json
frontend/yarn.lock
```

So the editor does not need to attach to the Docker container to see frontend packages.

Normal frontend changes should reload through Vite.

## Adding New Frontend Dependencies

To add a new frontend dependency, run this from the project root:

```bash
cd frontend && yarn add package-name
```

For dev dependencies:

```bash
cd frontend && yarn add -D package-name
```

Then go back to the project root:

```bash
cd ..
```

Restart the frontend container:

```bash
docker compose restart frontend
```

Then run the frontend checks:

```bash
docker compose exec frontend yarn check
```

You may need to run the cleanup command first:

```bash
docker compose exec frontend yarn cleanup
```

This updates:

```text
frontend/package.json
frontend/yarn.lock
```

On the host machine.

## Developing on the backend

The backend source code is mounted into Docker from the host machine.

That means you edit files locally, and the backend container sees the changes.

The editor should use the local Pipenv virtual environment:

```text
backend/.venv/bin/python
```

Docker does not use that `.venv` folder. Docker installs backend dependencies into the image when the backend image is built.

So the setup is:

```text
Host editor uses backend/.venv
Docker backend uses packages installed during image build
Pipfile and Pipfile.lock keep both sides aligned
```

Normal backend changes should reload through Django runserver.

## Adding New Backend Dependencies

To add a new backend dependency, run this from the project root:

```bash
cd backend && PIPENV_VENV_IN_PROJECT=1 pipenv install package-name
```

For dev dependencies:

```bash
cd backend && PIPENV_VENV_IN_PROJECT=1 pipenv install --dev package-name
```

Then go back to the project root:

```bash
cd ..
```

Rebuild the backend container:

```bash
docker compose up -d --build backend
```

Then run the backend checks:

```bash
docker compose exec backend python manage.py check && docker compose exec backend ruff check . && docker compose exec backend ruff format --check .
```

This updates:

```text
backend/Pipfile
backend/Pipfile.lock
```

## Manual Backend Pipfile Updates

You can also manually edit `backend/Pipfile`.

If you do that, update the lock file before rebuilding:

```bash
cd backend && PIPENV_VENV_IN_PROJECT=1 pipenv lock && pipenv sync --dev
```

Then go back to the project root:

```bash
cd ..
```

Rebuild the backend container:

```bash
docker compose up -d --build backend
```

Do not rebuild from a changed `Pipfile` without updating `Pipfile.lock` as the build will fail.

## What Should Be Ignored

These should not be committed:

```text
frontend/node_modules/
backend/.venv/
.env
```

And are ignored automatically.
