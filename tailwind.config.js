/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                black: '#17171B',//black
                white: '#FFFFFF',//white
                gray: '#C4C4C4',//gray
            },
        },
    },

    plugins: [require('daisyui')],
};