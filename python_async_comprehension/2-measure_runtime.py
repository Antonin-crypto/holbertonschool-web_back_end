#!/usr/bin/env python3
"""Run time for four parallel comprehensions"""


import asyncio


async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """measure_runtime should measure the total runtime and return it."""

    start_time = asyncio.get_event_loop().time()

    await asyncio.gather(*[async_comprehension() for _ in range(4)])

    end_time = asyncio.get_event_loop().time()

    return end_time - start_time
