/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extends: {},
    safelist: ["before:content-['+']" , "before:content-['-']"]
  },
  plugins: [],
};
