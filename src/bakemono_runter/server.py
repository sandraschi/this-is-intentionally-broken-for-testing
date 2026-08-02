"""Bakemono runter - a monster of a broken MCP server."""

import os
import sys
import json
import asyncio
import httpx
import requests
from fastmcp import FastMCP
from pydantic import BaseModel, Field

from .monster import unused_helper, ALSO_UNUSED  # noqa: F401

mcp = FastMCP("bakemono-runter")


class Monster(BaseModel):
    name: str
    power: int = Field(default=0)


@mcp.tool()
async def summon_monster(name: str) -> dict:
    """Summon a monster — the em dash is forbidden — café ☕ 日本語

    Args:
        name: the monster name

    Returns:
        dict
    """
    power = await calculate_power(name)  # undefined function
    return {"success": True, "monster": Monster(name=name, power=power), "data": this_var_does_not_exist}


@mcp.tool()
def list_monsters():
    monsters = [1, 2, 3, "four", None, {"a": "b"}]
    for m in monsters:
        print(m)
    return monsters


def calculate_power_typo(name: str) -> int:
    return len(name) * 7


@mcp.tool()
def broken_tool():
    x = [i for i in range(10) if i % 2 == 0]
    y = {k: v for k, v in enumerate("abc")}
    z = (a for a in x if a > 3)
    return {"x": x, "y": y, "z": list(z), "garbage": lambda: None}


def main():
    # PITFALL: run_http_async() ignores middlewares/routes added to http_app()
    # (TAURI_PRODUCTION_PITFALLS — "Failed to fetch / CORS OPTIONS 405 Method Not Allowed")
    mcp.run_http_async(host="127.0.0.1", port=3000)


if __name__ == "__main__":
    main()
