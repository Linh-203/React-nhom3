/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            colorText: '#333333',
            hightLigh: '#d2401e',
            greenCus: '#8db049'
         },
         backgroundColor: {
            primaryBg: 'rgba(0,0,0,0.1)',
            sectionBg: '#f1f1f1',
            navBg: '#badaf6',
            dropBg: '#e1dede'
         }
      }
   },
   plugins: []
};
