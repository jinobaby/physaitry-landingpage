/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wellness-cream': '#FBF8F7',
        'wellness-lavender': '#EDE7FF',
        'wellness-purple': '#7B61FF',
        'wellness-peach': '#FF9F7A',
        'wellness-teal': '#E0F2F1',
      },
      boxShadow: {
        'wellness-soft': '0 8px 32px rgba(123, 97, 255, 0.08)',
        'wellness-medium': '0 12px 40px rgba(123, 97, 255, 0.12)',
        'wellness-large': '0 20px 60px rgba(123, 97, 255, 0.15)',
      },
    },
  },
  plugins: [],
}
