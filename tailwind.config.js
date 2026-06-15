/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // <-- Ajuste de acordo com a pasta onde estão seus arquivos
    "./*.html" // Se o seu index.html estiver na raiz
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}