module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          primary: '#EA2F14',   // Single Bold Accent (Red)
          secondary: '#FFFFFF', // White for high contrast text/icons
          bg: '#0A0A0A',        // Near Black (Minimal Background)
          accent: '#262626',    // Dark Grey (Subtle UI elements)
          dark: '#000000',      // Pure Black
          highlight: '#333333', // Lighter Grey for hovers
        }
      }
    },
  },
  plugins: [],
}
