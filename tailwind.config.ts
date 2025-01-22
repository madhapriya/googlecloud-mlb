// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: '#F5F5F5', // Light Grey background for Light Mode
//         backgroundDark: '#212121', // Dark background for Dark Mode
//         foreground: '#212121', // Dark Grey text color
//         card: '#FFFFFF', // White background for cards
//         primary: '#FF5722', // Vibrant Orange (Main Highlight)
//         primaryForeground: '#FFFFFF', // White text for Primary
//         secondary: '#03A9F4', // Bright Sky Blue
//         secondaryForeground: '#FFFFFF', // White text for Secondary
//         accent: '#FFEB3B', // Sun Yellow for Accents
//         accentForeground: '#212121', // Dark text for Accent
//         muted: '#BDBDBD', // Muted Grey for less emphasis
//         mutedForeground: '#212121', // Dark text for Muted areas
//         border: '#FF5722', // Border matching Primary
//         input: '#FFFFFF', // Input background white
//         ring: '#FF5722', // Ring around buttons/input
//         destructive: '#D32F2F', // Red for destructive actions
//         destructiveForeground: '#FFFFFF', // Red text for destructive
//       },
//       borderRadius: {
//         lg: '12px', // Rounder edges for a modern feel
//         md: '8px', 
//         sm: '4px'
//       }
//     }
//   },
//   plugins: [require("tailwindcss-animate")],
// };

// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
