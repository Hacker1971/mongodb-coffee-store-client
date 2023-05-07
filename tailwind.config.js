/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#f3f4f6",
          
 "secondary": "#F000B8",
          
 "accent": "#37CDBE",
          
 "neutral": "#3D4451",
          
 "base-100": "#f5f5f4",
          
 "info": "#2563eb",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}