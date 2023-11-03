import type { Config } from 'tailwindcss'

const config: Config = {
 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "Gilroy-Regular": ["GilroyRegular", "sans-serif"],
        "Gilroy-Bold": ["GilroyBold", "sans-serif"],
        "Gilroy-Semi-Bold": ["GilroySemiBold", "sans-serif"],
        "Gilroy-Medium": ["GilroyMedium", "sans-serif"],
      },

      colors: {
        "brunswick-green": "#1A4742",
      },
    }, 
   
    container:{
      center:true,
      padding:'5rem',
      screens:{'2xl':'2000px'}
    }
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")]
}
export default config
