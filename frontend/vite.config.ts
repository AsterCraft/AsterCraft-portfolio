import { defineConfig, type PluginOption } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ isSsrBuild }) => {
  const plugins: PluginOption[] = [tailwindcss(), tsconfigPaths()];

  if (!process.env.STORYBOOK) {
    plugins.push(reactRouter());
  }

  return {
    server: {
      port: 9999,
      strictPort: true,
    },
    build: {
      rollupOptions: isSsrBuild ? { input: "./server/app.ts" } : undefined,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
          importers: [
            {
              findFileUrl(url) {
                if (url.startsWith("@shared/")) {
                  const filePath = path.resolve(
                    __dirname,
                    "src",
                    url.replace("@shared/", "shared/"),
                  );
                  return new URL(`file://${filePath}`);
                }
                if (url.startsWith("@widgets/")) {
                  const filePath = path.resolve(
                    __dirname,
                    "src",
                    url.replace("@widgets/", "widgets/"),
                  );
                  return new URL(`file://${filePath}`);
                }
                if (url.startsWith("@pages/")) {
                  const filePath = path.resolve(
                    __dirname,
                    "src",
                    url.replace("@pages/", "pages/"),
                  );
                  return new URL(`file://${filePath}`);
                }
                if (url.startsWith("@features/")) {
                  const filePath = path.resolve(
                    __dirname,
                    "src",
                    url.replace("@features/", "features/"),
                  );
                  return new URL(`file://${filePath}`);
                }
                if (url.startsWith("@entities/")) {
                  const filePath = path.resolve(
                    __dirname,
                    "src",
                    url.replace("@entities/", "entities/"),
                  );
                  return new URL(`file://${filePath}`);
                }
                return null;
              },
            },
          ],
        },
      },
    },
    plugins: plugins,
  };
});
