import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.vulcanis.com.ar",
  vite: {
    plugins: [tailwindcss()],
  },
});
