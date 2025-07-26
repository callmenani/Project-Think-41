from fastapi import FastAPI
from database import SessionLocal, engine
import models, schemas, crud

models.Base.metadata.create_all(bind=engine)
app = FastAPI()

@app.post("/api/chat")
def chat(request: schemas.ChatRequest):
    db = SessionLocal()
    conversation_id = request.conversation_id or crud.create_conversation(db, request.user_id)
    crud.save_user_message(db, conversation_id, request.message)
    ai_response = crud.get_ai_response(request.message)
    crud.save_ai_response(db, conversation_id, ai_response)
    return {"conversation_id": conversation_id, "response": ai_response}