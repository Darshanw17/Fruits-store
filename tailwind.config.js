/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}", // Adjust this based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          primary: "#75b4e7", // Define the primary color
        },
      },
    },
    plugins: [],
  };
  