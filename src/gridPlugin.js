const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addComponents, addUtilities, config, e }) => {
    const rowComponent = {
        '.row': {
            display: 'flex',
            flexWrap: 'wrap',
            '> *': {
                'flex-shrink': '0',
            }
        },
    }
    addComponents(rowComponent, ['responsive'])

    const colsUtilities = _.map(config('theme.cols'), (value, key) => ({
        [`.${e(`cols-${key}`)}`]: {
            '> *': {
                width: value
            }
        }
    }))

    addUtilities(colsUtilities, {
        variants: ['responsive'],
    })

    const distanceUtilities = _.map(config('theme.distance'), (value, key) => ({
        [`.${e(`d-${key}`)}`]: {
            margin: '-' + value,
            '> *': {
                padding: value
            }
        },
        [`.${e(`dy-${key}`)}`]: {
            marginTop: '-' + value,
            marginBottom: '-' + value,
            '> *': {
                paddingTop: value,
                paddingBottom: value,
            }
        },
        [`.${e(`dx-${key}`)}`]: {
            marginLeft: '-' + value,
            marginRight: '-' + value,
            '> *': {
                paddingLeft: value,
                paddingRight: value,
            }
        }
    }))

    addUtilities(distanceUtilities, {
        variants: ['responsive'],
    })
}, {
    theme: {
        cols: {
            '1': '100%',
            '2': '50%',
            '3': '33.33%',
            '4': '25%',
            '5': '20%',
        }
    }
})
