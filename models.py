from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

from ext import db, login_manager

class BaseModel:
    def create(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

        @staticmethod
        def save():
            db.session.commit()


class User(db.Model, BaseModel, UserMixin):
    __tablename__ = "Users"

    id = db.Column(db.Integer(), primary_key=True)
    role = db.Column(db.String(), default="Guest")
    username = db.Column(db.String(), nullable=False)
    password = db.Column(db.String(), nullable=False)
    
    act1 = db.Column(db.Boolean(), default=False)
    act2 = db.Column(db.Boolean(), default=False)
    act3 = db.Column(db.Boolean(), default=False)
    act4 = db.Column(db.Boolean(), default=False)
    act5 = db.Column(db.Boolean(), default=False)
    act6 = db.Column(db.Boolean(), default=False)
    act7 = db.Column(db.Boolean(), default=False)
    act8 = db.Column(db.Boolean(), default=False)
    act9 = db.Column(db.Boolean(), default=False)
    act10 = db.Column(db.Boolean(), default=False)
    act11 = db.Column(db.Boolean(), default=False)
    act12 = db.Column(db.Boolean(), default=False)
    act13 = db.Column(db.Boolean(), default=False)
    act14 = db.Column(db.Boolean(), default=False)
    act15 = db.Column(db.Boolean(), default=False)
    act16 = db.Column(db.Boolean(), default=False)
    act17 = db.Column(db.Boolean(), default=False)
    act18 = db.Column(db.Boolean(), default=False)
    act19 = db.Column(db.Boolean(), default=False)
    act20 = db.Column(db.Boolean(), default=False)

    aimEasy = db.Column(db.Integer(), default = 0)
    aimMed = db.Column(db.Integer(), default = 0)
    aimHard = db.Column(db.Integer(), default = 0)
    reaction = db.Column(db.Integer(), default = 0)
    memoryEasy = db.Column(db.Integer(), default = 0)
    memoryMed = db.Column(db.Integer(), default = 0)
    memoryHard = db.Column(db.Integer(), default = 0)
    cpsEasy = db.Column(db.Integer(), default = 0)
    cpsMed = db.Column(db.Integer(), default = 0)
    cpsHard = db.Column(db.Integer(), default = 0)

    recent = db.Column(db.Integer())
    recentlvl = db.Column(db.String(), default="")

    def __init__(self, username, password):
        self.username = username
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)