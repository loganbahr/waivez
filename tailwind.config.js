const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",

    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            fontFamily: {},
            colors: {
                primary: "#7f00ff",
                secondary: "#f9f9f9",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
