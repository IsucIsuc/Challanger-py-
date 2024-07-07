from flask import render_template, redirect, request, jsonify
from flask_login import current_user, login_user, LoginManager, logout_user

from models import User
from forms import RegisterForm, LoginForm, DeletionForm

import json

from ext import app, db

@app.route("/", methods=["Get", "Post"])
def index():
    form = DeletionForm()
    if form.validate_on_submit():
        i = 1
        while i < 21:
            act = f"act{i}"
            setattr(current_user, act, False)
            db.session.commit()
            i+=1
    won = 0
    user = current_user
    showAuthScore = False
    if user.is_authenticated:
        showAuthScore = True
        i = 1
        won = 0
        while i < 21:
            lvl = f"act{i}"
            if getattr(user, lvl) == True:
                won+=1
            i+=1
    else:
        showAuthScore=False
    return render_template("index.html", won = won, showAuthScore = showAuthScore, form=form)

@app.route("/won/<int:game_number>/", methods=["Get", "Post"])
def gameFinished(game_number):
    content_type = request.headers.get('Content-Type')
    user = current_user
    if current_user.is_authenticated:
        if content_type == 'application/json':
            data = request.json
            lvl = f"act{game_number}"
            setattr(user, lvl, True)
            if "lastlvl" in data:
                if data["lastlvl"] == 1 or data["lastlvl"] == 5:
                    attrname = "aimEasy"
                elif data["lastlvl"] == 9 or data["lastlvl"] == 13:
                    attrname = "aimMed"
                elif data["lastlvl"] == 17:
                    attrname = "aimHard"
                elif data["lastlvl"] == 2 or data["lastlvl"] == 6 or data["lastlvl"] == 10 or data["lastlvl"] == 14 or data["lastlvl"] == 18:
                    attrname = "reaction"
                elif data["lastlvl"] == 3 or data["lastlvl"] == 7:
                    attrname = "memoryEasy"
                elif data["lastlvl"] == 11 or data["lastlvl"] == 15:
                    attrname = "memoryMed"
                elif data["lastlvl"] == 19:
                    attrname = "memoryHard"
                elif data["lastlvl"] == 4 or data["lastlvl"] == 8:
                    attrname = "cpsEasy"
                elif data["lastlvl"] == 12 or data["lastlvl"] == 16:
                    attrname = "cpsMed"
                elif data["lastlvl"] == 20:
                    attrname = "cpsHard"
                user.recent = lvl
                user.recentlvl = attrname
            if "number" in data:
                if hasattr(user, attrname):
                    if getattr(user, attrname) < 1000000000 / data["number"]:
                        setattr(user, attrname, 1000000000 / data["number"])
            db.session.commit()
    else:
        print("no user")
        return redirect("/")
    if hasattr(user, user.recentlvl):
        score = int(round(getattr(user, user.recentlvl, 0)))
    else:
        score = 0
    if score > 1000000:
        score = 1000000
    return render_template("win.html", game_number = game_number, score = score)

@app.route("/game/<int:game_number>/", methods=['Get','POST'])
def game(game_number):
    return render_template(f"activities/act{game_number}.html")

@app.route("/register/", methods=["Get", "Post"])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        new_user = User(username=form.username.data, password=form.password.data)
        user = User.query.filter(User.username == form.username.data).all()
        if not user:
            new_user.create()
            print(new_user.id)
            if new_user.id == 1:
                print("adminify")
                new_user.role = "Owner"
            else:
                new_user.role = "Guest"
            db.session.commit()
            return redirect("/login")

    return render_template("register.html", form=form)

@app.route("/login/", methods=["Get", "Post"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter(User.username == form.username.data).first()
        if user and user.check_password(form.password.data):
            login_user(user, remember=True)
            return redirect("/")
    
    return render_template("login.html", form=form)

@app.route("/leaderboards/<string:category>/", methods=["Get", "Post"])
def Leaderboards(category):
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        user_id = request.json.get('user_id')
        category = request.json.get('category')
        user = User.query.get(user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404
        if not user.id == 1:
            setattr(user, category, 0)
            db.session.commit()
            return jsonify({"message": "Score reset successfully"}), 200
        elif user.id == 1 and not current_user.role == "Owner":
            return jsonify({"message": "Can not change the score of the Owner"}), 200
    
    if category not in ['aimEasy', 'aimMed', 'aimHard', 'reaction', 'memoryEasy', 'memorMed', 'memoryHard', 'cpsEasy', 'cpsMed', 'cpsHard']:
        return redirect("/"), 400

    top_users = User.query.order_by(getattr(User, category).desc()).limit(100).all()

    users_data = []
    for user in top_users:
        user_dict = {
            'id': user.id,
            'username': user.username,
            'score': getattr(user, category)
        }
        users_data.append(user_dict)
        for user_data in users_data:
            user_data["score"] = int(round(user_data['score']))
        
    return render_template('leaderboards.html', users_data=users_data, category=category)

@app.route("/playerList/", methods=["Get", "Post"])
def PlayersList():
    content_type = request.headers.get('Content-Type')
    if content_type == 'application/json':
        user_id = request.json.get('user_id')
        action = request.json.get('action')
        user = User.query.get(user_id)
        if not user:
            return jsonify({"error": "User not found"}), 404
        if not user.id == 1:
            if action == "add":
                user.role = "Admin"
                db.session.commit()
                return jsonify({"message": "User turned into Admin sucsessfully"}), 200
            elif action == "remove":
                user.role = "Guest"
                db.session.commit()
                return jsonify({"message": "User turned into Guest sucsessfully"}), 200
    users = User.query.order_by(getattr(User, "id").asc()).all()

    users_data = []
    for user in users:
        user_dict = {
            'id': user.id,
            'username': user.username,
            'role': user.role
        }
        users_data.append(user_dict)
        
    return render_template('playerList.html', users_data=users_data)

@app.route("/logout/")
def logout():
    logout_user()
    return redirect("/")