# Bakemono justfile — broken recipes, em dashes, wrong shell
set windows-shell := ["powershell.exe", "-NoProfile", "-Command"]

# Run the server — with em dash
serve:
    uv run python -m bakemono_runter.server

# Lint — references nonexistent config
lint:
    uv run ruff check --config broken.toml

# Test — wrong dir
test:
    uv run pytest nonexistent/ -q

# Broken recipe — undefined variable {{UNDEFINED}} — smart quotes ' "
broken:
    echo "{{UNDEFINED}}" && rm -rf dist

default: serve
