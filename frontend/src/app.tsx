import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/styles.css';

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6">
        <div className="rounded-2xl bg-slate-900 p-8 shadow-xl">
          <p className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
            Budgetie
          </p>
          <h1 className="mt-3 text-4xl font-bold">Budgetie is running.</h1>
          <p className="mt-4 text-slate-300">
            React, TypeScript, Vite, Tailwind, and Yarn are ready.
          </p>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
