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

### Django Secret Key

`DJANGO_SECRET_KEY` is required in `.env`.

For local development, generate a key with:

```bash
docker compose exec backend python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Then add it to your env in: `DJANGO_SECRET_KEY=`.

Verify it with:

```bash
docker compose exec backend python manage.py shell -c "from django.conf import settings; print(len(settings.SECRET_KEY.encode('utf-8')))"
```

And see something like:

```bash
11 objects imported automatically (use -v 2 for details).

50
```

### Access to the database

We use pgadmin to access the database:

## pgAdmin

pgAdmin is available through Docker for viewing the local Postgres database.

Required `.env` values:

```env
PGADMIN_DEFAULT_EMAIL=admin@budgetie.ca
PGADMIN_DEFAULT_PASSWORD=admin123
PGADMIN_PORT=5050
```

These are example values for you to use.

Make sure you then do:

```bash
docker compose up -d
```

Finally access here: `http://localhost:5050`

When setting up the connection in pgadmin use the following:

```
Name: Budgetie Local
Host name/address: database # pgadmin connects to postgres within the docker enviroment.
Port: 5432
Maintenance database: value of POSTGRES_DB
Username: value of POSTGRES_USER
Password: value of POSTGRES_PASSWORD
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

## Testing

Testing is one of the most vital aspects of budgetie, its how we make sure everything that is functioning
correctly.

When we want to run all the tests with coverage we do:

```bash
docker compose exec backend coverage run \
  --source=. \
  --omit="*/migrations/*,*/tests/*,manage.py,config/*" \
  manage.py test

docker compose exec backend coverage report -m
```

To run with out coverage:

```bash
docker compose exec backend python manage.py test
```

If we want to run a directory:

```bash
docker compose exec backend python manage.py test authentication
```
