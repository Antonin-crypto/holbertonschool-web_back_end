#!/usr/bin/env python3
"""The basics of async"""


import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Takes an integer max_delay and returns an asyncio.Task.

    Args:
    max_delay (int): Maximum delay for the wait_random coroutine.

    Returns:
    asyncio.Task: An asyncio task wrapping the wait_random coroutine.
    """
    return asyncio.create_task(wait_random(max_delay))
