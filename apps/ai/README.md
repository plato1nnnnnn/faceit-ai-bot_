# Инструкция по запуску AI/ML сервиса (FastAPI)

1. Перейдите в папку ai:
   cd apps/ai

2. Создайте и активируйте виртуальное окружение (по желанию):
   python -m venv venv
   .\venv\Scripts\activate

3. Установите зависимости:
   pip install -r requirements.txt

4. Запустите сервер:
   uvicorn main:app --reload --host 0.0.0.0 --port 8000

Сервис будет доступен на http://localhost:8000

---

Стартовая точка: main.py
