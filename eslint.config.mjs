import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { 
    languageOptions: { 
      globals: globals.browser, 
      parser: tsParser 
    },
    files: ["src/**/*.{js,jsx,ts,tsx}"] // Добавлено, чтобы ESLint искал файлы
  },
  { ignores: ["stubs/", "bro.config.js","server.ts", "src/_data_/server/server.ts","src/index.tsx", "src/i18next.ts"] },
  pluginJs.configs.recommended,
  {
    plugins: { "@typescript-eslint": tsPlugin },
    rules: tsPlugin.configs.recommended.rules,
  },
  {
    ...pluginReactConfig,
    settings: {
      react: {
        version: "detect" // 🔥 Автоопределение версии React
      }
    }
  },
  {
    rules: {
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", caughtErrors: "none" },
      ],
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-explicit-any": "off",
    }
  },
];
