import adapter from "@sveltejs/adapter-vercel";
import { sveltePreprocess } from "svelte-preprocess";

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/components",
    },
  },
  preprocess: sveltePreprocess(), // Use sveltePreprocess here
};

export default config;
