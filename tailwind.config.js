/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './components/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#003a40',
                secondary: '#ACBFA4',
                tertiary: '#E2E8CE',
                quartenary: '#FF7F11',
            },
        },
    },
    plugins: [],
};
