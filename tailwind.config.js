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
    },
  },
  plugins: [],
};
