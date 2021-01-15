const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'true-gray': colors.trueGray,
                'rose': colors.red,
                'light-blue': colors.lightBlue
            },
            container: {
                center: true
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [],
}
