/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B8FF",    // Neon Blue
        secondary: "#00FF9F",  // Neon Cyan
        accent: "#3D02FF",     // Electric Purple
        dark: "#0A0A0A",       // Base Dark
        darker: "#050505",     // Deeper Dark
        panel: "#111111",      // Panel Dark
      },
    },
  },
  plugins: [],
}