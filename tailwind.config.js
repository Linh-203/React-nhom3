/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         colors: {
            colorText: '#333333',
            hightLigh: '#d2401e',
            greenCus: '#8db049',
            grayLight200: '#7c7e7c',
            grayLight100: '#b0b0b0',
            greenCus400: '#198754',
         },
         backgroundColor: {
            primaryBg: '#f8f8f8',
            sectionBg: '#162c54',
            navBg: '#badaf6',
            dropBg: '#e1dede',
            dropDarkBg: '#ffffff1a',
            primaryDarkBg: '#0B2447',
            sectionDarkBg: '#0B2447',
            navDarkBg: 'rgba(165, 215, 232,0.30)'
         },
         screens: {
            lg: '1300px'
         }
      }
   },
   plugins: []
};
