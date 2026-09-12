// Серверный вход для пререндера: отдаёт HTML главной страницы (раздел «О нас»),
// чтобы поисковые роботы видели текст без выполнения JavaScript.
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render() {
  return renderToString(<App />);
}
