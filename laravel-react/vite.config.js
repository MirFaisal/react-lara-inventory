import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [laravel(["resources/js/app.js"]), react()],
    base: "http://127.0.0.1:8000/",
});
