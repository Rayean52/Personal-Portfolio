/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(var(--p), 0.3)'
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(var(--p), 0.6)'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#3b82f6",
          "secondary": "#8b5cf6", 
          "accent": "#06b6d4",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "info": "#0ea5e9",
          "success": "#10b981",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
      {
        dark: {
          "primary": "#60a5fa",
          "secondary": "#a78bfa",
          "accent": "#22d3ee", 
          "neutral": "#374151",
          "base-100": "#1f2937",
          "base-200": "#111827",
          "base-300": "#0f172a",
          "info": "#38bdf8",
          "success": "#34d399",
          "warning": "#fbbf24",
          "error": "#f87171",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}