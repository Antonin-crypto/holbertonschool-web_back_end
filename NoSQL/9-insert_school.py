#!/usr/bin/env python3
"""mongoDB"""


def insert_school(mongo_collection, **kwargs):
    """Insert a document in Python"""
    object = mongo_collection.insert_one(kwargs)

    return object.inserted_id
