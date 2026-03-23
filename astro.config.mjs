// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://athleticrc.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
