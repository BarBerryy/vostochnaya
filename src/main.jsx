import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// В dist/index.html заранее вставлен HTML раздела «О нас» (см. scripts/prerender.mjs).
// Если открыт именно он — подхватываем готовую разметку, иначе рендерим заново.
const hash = window.location.hash.replace(/^#/, '');
const isAbout = hash === '' || hash === 'about';

if (container.hasChildNodes() && isAbout) {
  hydrateRoot(container, app);
} else {
  container.innerHTML = '';
  createRoot(container).render(app);
}
