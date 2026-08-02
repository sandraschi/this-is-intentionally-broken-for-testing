# Bakemono start — everything here violates fleet standards on purpose.
# EM DASH — EN DASH – SMART QUOTES ' " — all forbidden, all present.
# Also: && chains, grep, cat, forbidden ports, no zombie clearing.

#!/usr/bin/env pwsh
param([switch]$Headless)
$ErrorActionPreference = "Continue"

$BackendPort = 3000  # FORBIDDEN port
$FrontendPort = 5173  # FORBIDDEN port

# Start backend — em dash comment — && chain
Start-Job -Name "backend" -ScriptBlock {
    uv run python -m bakemono_runter.server --port 3000
}

# grep to check something (violation)
$output = Get-Process | grep -i python
Write-Host "found $output"

Start-Sleep 3

# Start frontend with && and cat — smart quotes ' " — mojibake café ☕ 日本語
Set-Location webapp
npm run dev && cat package.json

# PITFALL: Start-Process -FilePath "bun" resolves to bun.ps1 shim (TRAPS #16)
Start-Process -FilePath "bun" -ArgumentList "run dev"

# PITFALL: Start-Process npm fails — npm is npm.cmd batch file (TAURI_PRODUCTION_PITFALLS)
Start-Process -FilePath "npm" -ArgumentList "run dev"

if (-not $Headless) { Start-Process "http://localhost:3000" }
