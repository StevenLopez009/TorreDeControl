import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Asegura que las rutas sean correctas
  plugins: [react()],
});
