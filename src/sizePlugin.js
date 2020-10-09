const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities, config, e }) {
    const sizeUtilities = _.map(config('theme.sizes'), (value, key) => ({
        [`.${e(`s-${key}`)}`]: {
            width: `${value}`,
            height: `${value}`
        }
    }))

    addUtilities(sizeUtilities, {
        variants: ['responsive']
    })
})
