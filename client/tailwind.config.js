/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                'list-cards': 'repeat(auto-fit, minmax(400px, 1fr))',
            },
            colors: { primary: '#0b2447', secondary: '#19376D', accent: '#F0B646', info: '#A5D7E8' },
        },
    },
    plugins: [],
};
