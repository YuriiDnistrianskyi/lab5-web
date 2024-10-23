from flask import Flask
from routes import init_routes
from database import db

app = Flask(__name__)

app.config.from_object('config.Config')

db.init_app(app)

init_routes(app)

if __name__ == "__main__":
    with app.app_context():
        db.create_all() 
    app.run(debug=True)
