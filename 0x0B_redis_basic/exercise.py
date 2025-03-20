#!/usr/bin/env python3
"""
Cache module that provides a class to interact with a Redis instance.
"""
import redis
import uuid
from typing import Union, Callable, Optional


class Cache:
    """
    Cache class to handle storing and retrieving data from Redis.
    """
    def __init__(self) -> None:
        """
        Initialize the Redis client and flush the database.
        """
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str:
        """
        Store the given data in Redis with a randomly generated key.

        Args:
            data (Union[str, bytes, int, float]): The data to store in Redis.

        Returns:
            str: The randomly generated key used to store the data.
        """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable] = None
            ) -> Union[str, bytes, int, float, None]:
        """
        Retrieve data from Redis and apply a conversion function if provided.

        Args:
            key (str): The key of the data to retrieve.
            fn (Optional[Callable]): A function to convert the data.

        Returns:
            Union[str, bytes, int, float, None]: The retrieved data
        """
        data = self._redis.get(key)
        if data is None:
            return None
        return fn(data) if fn else data

    def get_str(self, key: str) -> Optional[str]:
        """
        Retrieve a string value from Redis.

        Args:
            key (str): The key of the data to retrieve.

        Returns:
            Optional[str]: The retrieved string or None if key does not exist.
        """
        return self.get(key, lambda d: d.decode('utf-8'))

    def get_int(self, key: str) -> Optional[int]:
        """
        Retrieve an integer value from Redis.

        Args:
            key (str): The key of the data to retrieve.

        Returns:
            Optional[int]: The retrieved integer or None if key does not exist.
        """
        return self.get(key, lambda d: int(d))
