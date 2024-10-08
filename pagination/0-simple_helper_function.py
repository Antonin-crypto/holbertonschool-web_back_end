#!/usr/bin/env python3
"""Simple helper function"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate the start and end index for the given page and page_size.

    Parameters:
    - page (int): The page number (1-indexed).
    - page_size (int): The number of items per page.

    Returns:
    - tuple: A tuple containing the start index and end index.
    """

    start_index = (page - 1) * page_size
    end_index = page * page_size
    return start_index, end_index
