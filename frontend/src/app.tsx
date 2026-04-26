import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/styles.css';
import BudgetieApplication from './budget-application';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BudgetieApplication />
  </React.StrictMode>
);
