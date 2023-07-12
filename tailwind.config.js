/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            colorText: '#333333',
            hightLigh: '#d2401e',
            greenCus: '#8db049'
         }
      }
   },
   plugins: []
};
