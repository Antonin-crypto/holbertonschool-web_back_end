#!/usr/bin/env python3
"""MongoDB"""


def list_all(mongo_collection):
    """List all documents in Python"""
    doc = []
    if mongo_collection.find():
        for data in mongo_collection.find():
            doc.append(data)

    return doc
