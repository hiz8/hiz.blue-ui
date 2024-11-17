import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import { dts } from "rollup-plugin-dts";

export default [
  {
    input: "packages/core/src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [
      commonjs({
        include: ["node_modules/**"],
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/__tests__/**"],
      }),
      vanillaExtractPlugin(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "packages/core/src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
    },
    plugins: [dts()],
  },
];
