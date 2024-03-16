// tailwind.config.js
const config = {
  // ...
  content: [
    "./app/*.{ts,tsx,js,css}",
    "./app/**/*.{ts,tsx,js,css}",
    "./node_modules/frames.js/dist/render/next/*.{ts,tsx,js,css}",
    "./node_modules/frames.js/dist/render/*.{ts,tsx,js,css}",
    // ...
  ],
};
