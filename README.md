# Восточная — React-версия сайта

Vite + React 18. Три раздела переключаются по hash: `#about`, `#magazines`, `#magazines/<slug>`, `#social`.

## Запуск

```bash
npm install
npm run dev
```

Откроется http://localhost:5173.

## Сборка

```bash
npm run build
```

Готовый сайт появится в папке `dist/`. Её содержимое можно выложить на любой хостинг
или открыть `dist/index.html` двойным кликом.

## Где что менять

- `src/data/issues.js` — список выпусков: названия, описания, цены, статус «распродано», картинки.
- `src/components/About.jsx` — текст раздела «О нас».
- `src/components/Social.jsx` — ссылки на соцсети и почта.
- `src/styles.css` — все стили, в начале файла — подключение шрифта Optima.
- `public/img/` — картинки (карточки, развороты, логотип).
