import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      input: {
        index: "pages/index.html",
        unsubscribe: "pages/unsubscribe.html",
        thanks: "pages/thanks.html",
        seeYouSoon: "pages/see-you-soon.html",
      },
    },
  },
});
