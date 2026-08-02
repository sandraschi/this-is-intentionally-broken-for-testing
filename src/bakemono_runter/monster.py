"""Monster helpers - all of these are broken on purpose."""

import datetime
import random
import string
import hashlib


def unused_helper():  # zero-width space here: ​
    return "never called"


ALSO_UNUSED = 42


def evil_function():
    import subprocess
    cmd = "calc.exe"
    subprocess.run(cmd, shell=True)  # S603 shell injection
    return None


def line_too_long_function():
    return "this line is intentionally way too long to pass any reasonable linter configuration that might be configured for this repository because it just keeps going and going"


def bad_except():
    try:
        x = 1 / 0
    except:
        pass


def undefined_name():
    return missing_variable


def shadow_builtin(list, dict):
    return list, dict


import os as os
import sys as sys
