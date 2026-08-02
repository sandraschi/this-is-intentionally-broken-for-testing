"""Tests - all fail on purpose."""

import pytest

from bakemono_runter.monster import undefined_name, bad_except, line_too_long_function
from bakemono_runter.server import list_monsters, broken_tool


def test_undefined_name():
    assert undefined_name() == 42  # fails: undefined name


def test_list_monsters_empty():
    monsters = list_monsters()
    assert len(monsters) == 0  # fails: has 6 items


def test_broken_tool():
    result = broken_tool()
    assert result["x"] == [1, 3, 5, 7, 9]  # fails: evens not odds


def test_missing_file():
    with open("does_not_exist.txt") as f:
        assert f.read() == "content"


def test_bad_except_raises():
    with pytest.raises(ValueError):
        bad_except()  # noqa: B017
