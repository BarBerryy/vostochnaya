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

Готовый сайт появится в папке `dist/`. Сборка включает пререндер раздела «О нас»
(`scripts/prerender.mjs`), чтобы поисковики видели текст без JavaScript.

## Публикация

Сайт живёт на GitHub Pages: https://vostochnayaenergya.ru

Публикация автоматическая. После правок выполните:

```bash
git add -A
git commit -m "Что изменилось"
git push
```

GitHub Actions соберёт проект и выложит его за 1–2 минуты. Ход сборки видно на
https://github.com/BarBerryy/vostochnaya/actions

DNS домена обслуживается в Vercel (панель vercel.com → Domains → vostochnayaenergya.ru),
записи A/AAAA/www указывают на GitHub Pages. Старый адрес vostochnaya.vercel.app
перенаправляет на основной домен.

## Где что менять

- `src/data/issues.js` — список выпусков: названия, описания, цены, статус «распродано», картинки.
- `src/components/About.jsx` — текст раздела «О нас».
- `src/components/Social.jsx` — ссылки на соцсети и почта.
- `src/styles.css` — все стили, в начале файла — подключение шрифта Optima.
- `public/img/` — картинки (карточки, развороты, логотип).
