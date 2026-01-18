import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    50: '#f5fcff',
                    100: '#dff6fe',
                    200: '#d0f2fe',
                    300: '#baecfe',
                    400: '#ade8fd',
                    500: '#98e2fd',
                    600: '#8acee6',
                    700: '#6ca0b4',
                    800: '#547c8b',
                    900: '#405f6a',
                },
                yellow: {
                    50: '#fffcf1',
                    100: '#fff6d2',
                    200: '#fff1bd',
                    300: '#ffeb9f',
                    400: '#ffe78c',
                    500: '#ffe16f',
                    600: '#e8cd65',
                    700: '#b5a04f',
                    800: '#8c7c3d',
                    900: '#6b5f2f',
                },
                green: {
                    50: '#fafef2',
                    100: '#f1fad6',
                    200: '#eaf8c2',
                    300: '#e0f5a7',
                    400: '#daf395',
                    500: '#d1f07b',
                    600: '#beda70',
                    700: '#94aa57',
                    800: '#738444',
                    900: '#586534',
                },
                'white-arctic': '#F9FAFB',
                neutral: {
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                },
                'black-charcoal': '#1A1A1B',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                jakarta: ['Plus Jakarta Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
