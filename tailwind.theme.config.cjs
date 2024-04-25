const colors = require('tailwindcss/colors')
const greenColors = {
    '50': '#f3faf7',
    '100': '#d7f0e7',
    '200': '#aee1ce',
    '300': '#7ecab1',
    '400': '#53ae93',
    '500': '#399379',
    '600': '#2c7562',
    '700': '#265f50',
    '800': '#224d43',
    '900': '#1d3a33',
    '950': '#0e2521',
}
module.exports = {
    /**
     * Color Palette - Purple Heart
     */
     purpleheart: {
        colors: {
            primary: colors.purple[700],
            secondary: colors.purple[800],
            dark: {
                primary: colors.purple[300],
                secondary: colors.purple[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Pink Town
     */
    pinktown: {
        colors: {
            primary: colors.pink[700],
            secondary: colors.pink[800],
            dark: {
                primary: colors.pink[300],
                secondary: colors.pink[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Orange City
     */
    orangecity: {
        colors: {
            primary: colors.orange[700],
            secondary: colors.orange[800],
            dark: {
                primary: colors.orange[300],
                secondary: colors.orange[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Amber Sky
     */
    ambersky: {
        colors: {
            primary: colors.amber[700],
            secondary: colors.amber[800],
            dark: {
                primary: colors.amber[300],
                secondary: colors.amber[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Lime Route
     */
    limeroute: {
        colors: {
            primary: colors.lime[700],
            secondary: colors.lime[800],
            dark: {
                primary: colors.lime[300],
                secondary: colors.lime[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Indigone
     */
    indigone: {
        colors: {
            primary: colors.indigo[700],
            secondary: colors.indigo[800],
            dark: {
                primary: colors.indigo[300],
                secondary: colors.indigo[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Rose Garden
     */
    rosegarden: {
        colors: {
            primary: colors.rose[700],
            secondary: colors.rose[800],
            dark: {
                primary: colors.rose[300],
                secondary: colors.rose[500]
            },
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    /**
     * Color Palette - Default/Duplicate of Purple Heart (Never remove this)
     */
    default: {
        colors: {
            primary: greenColors[700],
            secondary: greenColors[800],
            dark: {
                primary: greenColors[300],
                secondary: greenColors[500]
            },
            accent: {
                gray: {
                    light: greenColors[300],
                    dark: greenColors[500]
                },
                default: greenColors[700]
            }
        }
    }
}
