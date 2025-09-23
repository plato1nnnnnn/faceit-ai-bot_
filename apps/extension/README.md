# Инструкция по запуску и сборке расширения (React + Manifest V3)

1. Перейдите в папку расширения:
   cd apps/extension

2. Установите зависимости:
   npm install

3. Соберите расширение:
   npm run build

4. В Chrome откройте chrome://extensions, включите режим разработчика, нажмите "Загрузить распакованное расширение" и выберите папку public.

---

- popup.html — точка входа popup
- background.js — сервисный воркер
- manifest.json — манифест расширения
- src/ — исходники React и JS
