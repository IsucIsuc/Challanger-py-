from flask import render_template, redirect
from flask_login import login_user, logout_user

from models import User
from forms import RegisterForm, LoginForm

from ext import app, db

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/game/<int:game_number>")
def game(game_number):
    return render_template(f"activities/act{game_number}.html")

@app.route("/register", methods=["Get", "Post"])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        new_user = User(username=form.username.data, password=form.password.data)
        print(User.username)
        print(form.username.data)
        user = User.query.filter(User.username == form.username.data).all()
        if not user:
            new_user.create()
            return redirect("/login")

    return render_template("register.html", form=form)

@app.route("/login", methods=["Get", "Post"])
def login():    
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter(User.username == form.username.data).first()
        if user and user.check_password(form.password.data):
            login_user(user, remember=True)
            return redirect("/")
    
    return render_template("login.html", form=form)

@app.route("/logout")
def logout():
    logout_user()
    return redirect("/")