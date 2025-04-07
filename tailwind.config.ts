import type { Config } from 'tailwindcss'

    const config: Config = {
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
              'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            // Add a custom gradient
            'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Example: Indigo to Purple
             'hero-gradient-animated': 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)', // Example animated
          },
          backgroundSize: { // For animated gradient
            '400%': '400% 400%',
          },
          animation: { // For animated gradient
            'gradient-shift': 'gradient-shift 15s ease infinite',
          },
          keyframes: { // For animated gradient
            'gradient-shift': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' },
                '100%': { backgroundPosition: '0% 50%' },
            },
          },
        },
      },
      plugins: [],
    }
    export default config
