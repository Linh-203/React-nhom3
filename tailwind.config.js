/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            colorText: '#333333',
            hightLigh: '#d2401e',
            greenCus: '#8db049',
            grayLight200:'#7c7e7c',
            grayLight100:'#b0b0b0'
         },
         backgroundColor: {
            primaryBg: '#f8f8f8',
            sectionBg: '#f1f1f1',
            navBg: '#badaf6',
            dropBg: '#e1dede'
         }
      }
   },
   plugins: []
};
