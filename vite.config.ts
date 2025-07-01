import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { BrowserRouter } from "react-router-dom";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/ernottportfolio.io/", // <-- Añade esta línea
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

<BrowserRouter basename="/ernottportfolio.io/">
  {/* tus rutas */}
</BrowserRouter>;
