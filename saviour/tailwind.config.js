/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customOrange: '#ED0137',
        customLightOrange: '#F05733',
          "black-transparent": 'rgba(0, 0, 0, 0.4)', 
      
      },
      fontSize:{
        "font-xxs":"9.47px"
      },
      lineHeight:{
        "leading-3.5":"14.21px"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        shojumaru:["Shojumaru", "system-ui"],
        zcool:["ZCOOL KuaiLe", "sans-serif"]
      },
    },
  },
  plugins: [],
};
