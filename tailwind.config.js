/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			rose: {
  				'50': '#faf7f6',
  				'100': '#f5efed',
  				'200': '#ebddd9',
  				'300': '#D6B2A6',
  				'400': '#c9a093',
  				'500': '#b88a7c',
  				'600': '#a07265',
  				'700': '#865c52',
  				'800': '#6d4b43',
  				'900': '#5a3e38'
  			},
  			gold: {
  				'50': '#faf8f4',
  				'100': '#f3efe5',
  				'200': '#e5dcc8',
  				'300': '#d4c5a5',
  				'400': '#B79A6B',
  				'500': '#a68a5c',
  				'600': '#91774e',
  				'700': '#786341',
  				'800': '#625136',
  				'900': '#50422d'
  			},
  			taupe: {
  				'50': '#f7f6f4',
  				'100': '#edebe8',
  				'200': '#dbd7d1',
  				'300': '#c4beb5',
  				'400': '#a9a195',
  				'500': '#8A7A6A',
  				'600': '#78695a',
  				'700': '#63564a',
  				'800': '#52473e',
  				'900': '#443b34'
  			},
  			brown: {
  				'50': '#f6f4f3',
  				'100': '#eae6e5',
  				'200': '#d4cccb',
  				'300': '#b8abaa',
  				'400': '#978584',
  				'500': '#7d6664',
  				'600': '#6F4F47',
  				'700': '#5c413b',
  				'800': '#4c3631',
  				'900': '#3f2d29'
  			},
  			sand: {
  				'50': '#F4EFEA',
  				'100': '#eee8e1',
  				'200': '#e5dcd3',
  				'300': '#d9cdc1',
  				'400': '#c9b9a9',
  				'500': '#b9a591'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'Playfair Display',
  				'Georgia',
  				'serif'
  			],
  			serif: [
  				'Cormorant Garamond',
  				'Georgia',
  				'serif'
  			],
  			body: [
  				'Lora',
  				'Georgia',
  				'serif'
  			],
  			sans: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
