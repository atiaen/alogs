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
              color:'rgb(228, 224, 224)',
              'text-decoration': 'underline',

            },
            'h2':{
              color:'rgb(228, 224, 224)',
              'text-decoration': 'underline',

            },
            'h3':{
              color:'rgb(228, 224, 224)',
              'text-decoration': 'underline',

            },
            'h4':{
              color:'rgb(228, 224, 224)',
              'text-decoration': 'underline',

            },
            'a':{
              color:'rgb(228, 224, 224)',
            },
            'strong':{
              color:'rgb(228, 224, 224)',
            },
            'code':{
              color:'rgb(228, 224, 224)',

            },
            'pre':{
              color:'rgb(228, 224, 224)',

            },
            'th':{
              color:'rgb(228, 224, 224)',

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
