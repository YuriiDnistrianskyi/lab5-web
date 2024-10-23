from flask import request, jsonify
from models import Stadium
from database import db


def init_routes(app):

    @app.route('/stadium', methods=['GET'])
    def get_stadiums():
        stadiums = Stadium.query.all()
        json_stadiums = list(map(lambda x: x.__rerp__(), stadiums))
        return jsonify({"stadiums": json_stadiums})


    @app.route('/stadium', methods=['POST'])
    def post_stadium():
        data = request.get_json()
        new_stadium = Stadium(name=data['name'], audience=data['audience'], lighting_power=data['lighting_power'])
        db.session.add(new_stadium)
        db.session.commit()
        return {'message': 'Stadium added successfully.'}, 201


    @app.route('/stadium', methods=['PUT'])
    def put_stadium():
        data = request.get_json()
        put_id = data['id']

        stadium = Stadium.query.get(put_id)

        if stadium:
            stadium.name = data['name']
            stadium.audience = data['audience']
            stadium.lighting_power = data['lighting_power']
            db.session.commit()
            return {'message': f"Stadium (id = {put_id}) edided successfully."}, 201

        else:
            return {'messange': f'Stadium id ({put_id}) not found'}, 404


    @app.route('/stadium', methods=["DELETE"])
    def delete_stadium():
        data = request.get_json()
        delete_name = data['name']

        stadium = Stadium.query.filter_by(name=delete_name).first()

        if stadium:
            db.session.delete(stadium)
            db.session.commit()
            return {'messange': f'Stadium {delete_name} deleted successfully.'}, 201
        else:
            return {'messange': f'Stadium {delete_name} not found.'}, 404
