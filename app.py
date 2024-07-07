from ext import app


if __name__ == "__main__":
    from routes import index, game, register, login, gameFinished, Leaderboards, PlayersList
    app.run(debug=True)
