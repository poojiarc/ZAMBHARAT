import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],

  server: {
    host: true, // allow external access (important for ngrok)
    port: 5173, // standard vite port (change if needed)

    allowedHosts: [
      "timmy-semimature-unpoisonously.ngrok-free.dev"
    ]
  }
});
