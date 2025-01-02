/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/path/to/your/image.jpg')", // Altere para o caminho da sua imagem
      },
    },
  },
  plugins: [],
}