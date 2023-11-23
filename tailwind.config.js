/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'softRed': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'DDCyan': ' hsl(167, 40%, 24%)',
        'DBlue': 'hsl(198, 62%, 26%)',
        'DMCyan': 'hsl(168, 34%, 41%)',
        'footer': 'hsl(168, 34%, 60%)',
        'VDDB': 'hsl(212, 27%, 19%)',
        'VDGB' : 'hsl(213, 9%, 39%)',
        'DGB' : 'hsl(232, 10%, 55%)',
        'GB': 'hsl(210, 4%, 67%)',
        'white': 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}

