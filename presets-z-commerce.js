const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'true-gray': colors.trueGray,
                'rose': colors.red,
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
