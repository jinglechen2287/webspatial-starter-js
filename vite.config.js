import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import webspatial from "@webspatial/vite-plugin";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    plugins: [
      react(),
      basicSsl(),
      webspatial(),
      createHtmlPlugin({
        inject: {
          data: {
            XR_ENV: env.XR_ENV,
          },
        },
      }),
    ],
  };
});
