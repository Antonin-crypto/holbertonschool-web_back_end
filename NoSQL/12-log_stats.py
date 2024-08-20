#!/usr/bin/env python3
"""Script that provides some stats about Nginx logs stored in MongoDB"""


from pymongo import MongoClient


def nginx_log_stats():
    # Connect to the MongoDB server (default localhost on port 27017)
    client = MongoClient("mongodb://localhost:27017/")

    # Connect to the 'logs' database and the 'nginx' collection
    db = client.logs
    nginx_collection = db.nginx

    # Get the total number of logs
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # Define the HTTP methods we're interested in
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

    print("Methods:")
    for method in methods:
        # Count documents for each method
        method_count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {method_count}")

    # Count documents with method GET and path /status
    status_count = nginx_collection.count_documents({"method":
                                                     "GET", "path": "/status"})
    print(f"{status_count} status check")


if __name__ == "__main__":
    nginx_log_stats()
