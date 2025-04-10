import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    // 👇🏻 Define your tokens here
    extend: {
      tokens: {
        colors: {
          primary: {
            value: "#0FEE0F",
            // Add color variations
            100: { value: "#E6FFE6" },
            200: { value: "#CCFFCC" },
            300: { value: "#99FF99" },
            400: { value: "#66FF66" },
            500: { value: "#33FF33" },
            600: { value: "#0FEE0F" }, // Same as base primary
            700: { value: "#0CC90C" },
            800: { value: "#0A940A" },
            900: { value: "#075F07" },
          },
          secondary: {
            value: "#EE0F0F",
            // Add color variations
            100: { value: "#FFE6E6" },
            200: { value: "#FFCCCC" },
            300: { value: "#FF9999" },
            400: { value: "#FF6666" },
            500: { value: "#FF3333" },
            600: { value: "#EE0F0F" },
            700: { value: "#C90C0C" },
            800: { value: "#940A0A" },
            900: { value: "#5F0707" },
          },
          red: { value: "#FF0000" },
          green: { value: "#00FF00" },
          blue: { value: "#0000FF" },
          // Add grayscale
          gray: {
            50: { value: "#F9FAFB" },
            100: { value: "#F3F4F6" },
            200: { value: "#E5E7EB" },
            300: { value: "#D1D5DB" },
            400: { value: "#9CA3AF" },
            500: { value: "#6B7280" },
            600: { value: "#4B5563" },
            700: { value: "#374151" },
            800: { value: "#1F2937" },
            900: { value: "#111827" },
          },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
          heading: { value: "Georgia, serif" },
          mono: { value: "monospace" },
        },
        spacing: {
          // Custom spacing tokens
          xs: { value: "0.25rem" },
          sm: { value: "0.5rem" },
          md: { value: "1rem" },
          lg: { value: "1.5rem" },
          xl: { value: "2rem" },
          "2xl": { value: "3rem" },
          "3xl": { value: "4rem" },
        },
        sizes: {
          // Custom size tokens
          container: {
            sm: { value: "640px" },
            md: { value: "768px" },
            lg: { value: "1024px" },
            xl: { value: "1280px" },
          },
        },
        radii: {
          // Border radius tokens
          none: { value: "0" },
          sm: { value: "0.125rem" },
          md: { value: "0.25rem" },
          lg: { value: "0.5rem" },
          full: { value: "9999px" },
        },
        borders: {
          // Border tokens
          thin: { value: "1px solid" },
          medium: { value: "2px solid" },
          thick: { value: "4px solid" },
        },
        shadows: {
          // Shadow tokens
          sm: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
          md: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
          lg: { value: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" },
        },
      },

      /**
       * Semantic tokens are tokens that are designed to be used in a specific context.
       * In most cases, the value of a semantic token references to an existing token.
       */
      semanticTokens: {
        colors: {
          danger: {
            value: "{colors.red}",
            description: "Color for errors",
          },
          success: {
            value: "{colors.green}",
            description: "Color for success",
            deprecated: true,
          },
          info: {
            value: "{colors.blue}",
            description: "Color information",
          },
          mySemanticToken: {
            value: "{colors.blue}",
            description: "My semantic token",
          },
          // Text colors
          text: {
            value: "{colors.gray.800}",
            description: "Default text color",
          },
          "text.muted": {
            value: "{colors.gray.600}",
            description: "Muted text color",
          },
          // Background colors
          "bg.card": {
            value: "{colors.gray.50}",
            description: "Card background color",
          },
        },
        borders: {
          "border.card": {
            value: "{borders.thin} {colors.gray.200}",
            description: "Card border style",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
