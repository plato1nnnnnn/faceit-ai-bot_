from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Faceit AI Bot AI/ML сервис работает!"}

# TODO: добавить эндпоинты для анализа демо, генерации тренировок и голосового ассистента
