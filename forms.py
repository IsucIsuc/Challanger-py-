from flask_wtf import FlaskForm
from wtforms.fields import StringField, PasswordField, SubmitField
from wtforms.validators import DataRequired, length, equal_to

class RegisterForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired(message="The username Field is required")])
    password = PasswordField("Password", validators=[DataRequired(message="The password Field is required"), length(min=8, message="The password must be at least 8 characters long")])
    repeat_password = PasswordField("Reapeat Password", validators=[DataRequired(message="The repeat password Field is required"), equal_to("password", message="Repeat password must be equal to password")])
    submit = SubmitField("Create")


class LoginForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired(message="The username Field is required")])
    password = PasswordField("Password", validators=[DataRequired(message="The password Field is required"), length(min=8, message="Incorrect password (the password must be at least 8 characters long)")])
    login = SubmitField("login")