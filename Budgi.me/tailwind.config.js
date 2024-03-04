/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html, ts, tsx}",
		"./src/*.tsx",
		"./src/**/*.{ts, tsx}",
		"./src/components/**/*.{tsx, ts}",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}

