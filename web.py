import os
from flask import Flask, render_template

app = Flask(__name__, template_folder='template')


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/faleconosco")
def faleconosco():
    return render_template('fale-conosco.html')


if __name__ == "__main__":
    app.run()
