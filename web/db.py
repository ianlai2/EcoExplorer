from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///location_info.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class LocationInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(200), nullable=True)
    fun_fact = db.Column(db.String(200), nullable=True)

@app.route('/')
def hello():
    return jsonify(message="Welcome to the Flask backend!")

@app.route('/locations', methods=['GET'])
def get_locations():
    locations = LocationInfo.query.all()
    location_list = [{'name': location.name, 'description': location.description, 'fun_fact': location.fun_fact} for location in locations]
    return jsonify(location_list)

@app.route('/locations', methods=['POST'])
def add_location():
    data = request.get_json()

    new_location = LocationInfo(
        name=data['name'],
        description=data['description'],
        fun_fact=data.get('fun_fact', None)  # Set to None if not provided
    )

    db.session.add(new_location)
    db.session.commit()

    return jsonify(message="Location added successfully!")

if __name__ == '__main__':
    # Create the database tables before running the app
    db.create_all()
    app.run(debug=True)