/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // <- isso é o que vai mudar
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      // outros caminhos que seu projeto usar
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }