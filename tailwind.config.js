/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
            'custom-image': 'https://img.freepik.com/free-photo/galaxy-night-landscape_23-2148895321.jpg?w=2000&t=st=1721225657~exp=1721226257~hmac=fb1800a4f1901474dd85fcbd0c7498c14637d63391e79fe923ca09fd2a02e4b4',
          
      },
      colors: {
        black: "#212b36",
        "dark-700": "#090e34b3",
        dark: {
          DEFAULT: "#111928",
          2: "#1F2A37",
          3: "#374151",
          4: "#4B5563",
          5: "#6B7280",
          6: "#9CA3AF",
          7: "#D1D5DB",
          8: "#E5E7EB",
        },
        primary: "#6966ff",
        "heading-white": "#fafafc",
        "background": "#181824",
        secondary: "#242333",
        "tertiary": "#202133",
        "body-secondary": "#8899A8",
        "primary-hover": "#4f4dbe",
        stroke: "#DFE4EA",
        "gray-1": "#F9FAFB",
        "gray-2": "#F3F4F6",
        "gray-7": "#CED4DA",
      },
    },
  },
  plugins: [],
};
