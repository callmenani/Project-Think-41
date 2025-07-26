from sqlalchemy.orm import Session
import models

def create_conversation(db: Session, user_id: int):
    conversation = models.Conversation(user_id=user_id)
    db.add(conversation)
    db.commit()
    db.refresh(conversation)
    return conversation.id

def save_user_message(db: Session, conversation_id: int, text: str):
    msg = models.Message(conversation_id=conversation_id, sender="user", text=text)
    db.add(msg)
    db.commit()

def save_ai_response(db: Session, conversation_id: int, text: str):
    msg = models.Message(conversation_id=conversation_id, sender="ai", text=text)
    db.add(msg)
    db.commit()

def get_ai_response(user_message: str) -> str:
    return f"Mocked response for: {user_message}"