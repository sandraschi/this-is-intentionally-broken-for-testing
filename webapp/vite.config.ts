import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // FORBIDDEN port
    proxy: {
      // PITFALL: localhost resolves to ::1 (IPv6) while backend binds 127.0.0.1 (TRAPS #8)
      "/api": "http://localhost:3000",
    },
  },
});
