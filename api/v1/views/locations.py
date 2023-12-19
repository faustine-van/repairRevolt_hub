#!/usr/bin/python3
""" objects that handle all default RestFul API actions for Locations """
from models.location import Location
from models import storage
from api.v1.views import app_views
from flask import abort, jsonify, make_response, request
from flasgger.utils import swag_from
from api.v1.auth.decorators import auth_role
from flask_jwt_extended import jwt_required


@app_views.route('/locations', methods=['GET'], strict_slashes=False)
@jwt_required()
# @auth_role('tech')
@swag_from('documentation/location/all_locations.yml')
def get_locations():
    """
    Retrieves the list of all location objects
    or a specific location
    """

    all_locations = storage.all(Location).values()
    list_locations = []
    for location in all_locations:
        list_locations.append(location.to_dict())
    return jsonify(list_locations)


@app_views.route('/locations/<location_id>', methods=['GET'],
                 strict_slashes=False)
@swag_from('documentation/location/get_locaton.yml', methods=['GET'])
def get_location(location_id):
    """ Retrieves an location """
    location = storage.get(Location, location_id)
    if not location:
        abort(404)

    return jsonify(location.to_dict())


@app_views.route('/locations/<location_id>', methods=['DELETE'],
                 strict_slashes=False)
@swag_from('documentation/location/delete_location.yml', methods=['DELETE'])
def delete_location(location_id):
    """
    Deletes a location Object
    """
    location = storage.get(Location, location_id)
    if not location:
        abort(404)
    storage.delete(location)
    storage.save()

    return make_response(jsonify({}))


@app_views.route('/locations', methods=['POST'], strict_slashes=False)
@swag_from('documentation/location/post_location.yml', methods=['POST'])
def post_location():
    """
    Creates a location
    """
    if not request.is_json:
        return {"msg": "Missing JSON in request"}, 400
    data = request.get_json()
    new_instance = Location(**data)
    new_instance.save()
    return make_response(jsonify(new_instance.to_dict()), 201)


@app_views.route('/locations/<location_id>', methods=['PUT'],
                 strict_slashes=False)
@swag_from('documentation/location/put_location.yml', methods=['PUT'])
def put_location(location_id):
    """
    Updates a location
    """
    location = storage.get(Location, location_id)

    if not location:
        abort(404)

    if not request.get_json():
        abort(400, description="Not a JSON")

    ignore = ['id', 'created_at', 'updated_at']

    data = request.get_json()
    for key, value in data.items():
        if key not in ignore:
            setattr(location, key, value)
    storage.save()
    return make_response(jsonify(location.to_dict()), 200)
