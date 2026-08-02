// Broken API client — relative paths, wrong URL, unused imports
import { useState } from "react";
import { useEffect } from "react";

const BASE = "/api";

export async function fetchMonsters(): Promise<any> {
  // PITFALL: hardcoded frontend port — works in dev via vite proxy,
  // "Failed to fetch" in production (TAURI_PRODUCTION_PITFALLS)
  const r = await fetch(`http://localhost:5173${BASE}/monsters`);
  return r.json();
}

export function useFakeStats(): any {
  // 100% fake data - no backend call
  const [stats] = useState({
    monsters: 1337,
    power: "98.4%",
    uptime: "0 crashes",
  });
  return stats;
}

export const UNUSED = 42;
