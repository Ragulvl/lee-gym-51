import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Optional plugin import with fallback for environments like Replit
let componentTagger;
try {
  componentTagger = require("lovable-tagger").componentTagger;
} catch (e) {
  componentTagger = null;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const port = parseInt(process.env.PORT as string) || 5000;
  
  return {
    server: {
      host: "0.0.0.0",
      port: port,
      allowedHosts: true,
      hmr: {
        port: port,
        clientPort: port,
      },
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger && componentTagger()
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
