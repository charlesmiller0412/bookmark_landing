/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "#5267DF",
                red: "#FA5959",
                black: "#242A45",
                grey: "#9194A2",
                white: "#FFFFFF",
            },
        },
    },
    plugins: [],
};
