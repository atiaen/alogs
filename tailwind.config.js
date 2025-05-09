module.exports = {
  content: [
    './src/**/*.njk',
    './src/**/*.svg',
    './src/assets/js/*.js'
  ],
  screens: {
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1':{
              color:'rgb(98, 92, 167)',
              'text-decoration': 'underline',

            },
            'h2':{
              color:'rgb(98, 92, 167)',
              'text-decoration': 'underline',

            },
            'h3':{
              color:'rgb(98, 92, 167)',
              'text-decoration': 'underline',

            },
            'h4':{
              color:'rgb(98, 92, 167)',
              'text-decoration': 'underline',

            },
            'a':{
              color:'rgb(98, 92, 167)',
            },
            'strong':{
              color:'rgb(98, 92, 167)',
            },
            'code':{
              color:'rgb(98, 92, 167)',

            },
            'pre':{
              color:'rgb(98, 92, 167)',

            },
            'th':{
              color:'rgb(98, 92, 167)',

            },
            'blockquote': {
              fontWeight: 'normal',
              color: theme('colors.white')
            },
            'blockquote p:first-of-type::before': {
              content: ''
            },
            'blockquote p:last-of-type::after': {
              content: ''
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
