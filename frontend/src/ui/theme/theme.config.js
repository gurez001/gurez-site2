module.exports = {
  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: "767px",
        lg: "1240px",
        xl: "1580px",
        "2xl": "1536px",
      },
    },
  },
  darkMode: "class",
  gurez: [
    {
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      themes: {
        light: {
          layout: {
            hoverOpacity: 0.8,
            boxShadow: {},
            dividerWeight: "1px",
            disabledOpacity: 0.5,
            fontSize: {
              tiny: "0.75rem",
              small: "0.875rem",
              medium: "1rem",
              large: "1.125rem",
            },
            lineHeight: {
              tiny: "1rem",
              small: "1.25rem",
              medium: "1.5rem",
              large: "1.75rem",
            },
            radius: {
              small: "8px",
              medium: "12px",
              large: "14px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
          colors: {
            white: "#FFFFFF",
            black: "#000000",
            green: {
              50: "#EDEEC9",
              100: "#DDE7C7",
              200: "#BFD8BD",
              300: "#98C9A3",
              400: "#77BFA3",
            },
            Zinc: {
              50: "#FAFAFA",
              100: "#F4F4F5",
              200: "#E4E4E7",
              300: "#D4D4D8",
              400: "#A1A1AA",
              500: "#71717A",
              600: "#52525B",
              700: "#3F3F46",
              800: "#27272A",
              900: "#18181B",
            },
          }, // light theme colors
        },
        dark: {
          layout: {
            hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            },
            dividerWeight: "1px", // h-divider the default height applied to the divider component
            disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
            fontSize: {
              tiny: "0.75rem", // text-tiny
              small: "0.875rem", // text-small
              medium: "1rem", // text-medium
              large: "1.125rem", // text-large
            },
            lineHeight: {
              tiny: "1rem", // text-tiny
              small: "1.25rem", // text-small
              medium: "1.5rem", // text-medium
              large: "1.75rem", // text-large
            },
            radius: {
              small: "8px", // rounded-small
              medium: "12px", // rounded-medium
              large: "14px", // rounded-large
            },
            borderWidth: {
              small: "1px", // border-small
              medium: "2px", // border-medium (default)
              large: "3px", // border-large
            },
          }, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    },
  ],
};
