#!/usr/bin/env python3
"""Async Comprehensions"""


import typing


async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    """ The coroutine will collect 10 random numbers"""

    random_numbers = [number async for number in async_generator()]
    return random_numbers[:10]
