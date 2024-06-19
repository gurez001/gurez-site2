const customTheme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1240px",
    xl: "1580px",
    S_2xl: "1536px",
  },
  addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
  defaultTheme: "light", // default theme from the themes object
  defaultExtendTheme: "light", // default theme to extend on custom themes
  themes: {
    layout: {
      hoverOpacity: 0.8,
      boxShadow: {},
      dividerWeight: "1px",
      disabledOpacity: 0.5,
      boxShadows: {
        bs_50: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px !important",
        bs_100: "rgba(0, 0, 0, 0.15) 0px 4px 8px 4px",
      },
      fontSize: {
        tiny: "0.75rem",
        small: "0.875rem",
        medium: "1rem",
        large: "1.125rem",
        X_large: "1.6rem",
      },
      padding: {
        screen_large: "25px 10px",
        screen_0_p_y: "0px 10px",
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
      default: {
        default_20: "#1c110994",
        default_50: "#EDEEC9",
        default_100: "#ffe4c2",
        default_200: "#ffcb89", //------------body
        default_900: "#354200",
        // green_200: "#BFD8BD",
        // green_300: "#98C9A3",
        // green_400: "#77BFA3",
        // green_100: "#DDE7C7",#ffe4c2
        // green_200: "#BFD8BD",
        // green_300: "#98C9A3",
        // green_400: "#77BFA3",
      },
      font_color: {
        color_25: "#7e818c",//mrp for mrp
        color_50: "#535766",//p tag
        color_75: "#ff905a",//p for discounmt
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
        900: "#18181B",// btn color
      },
    }, // light theme colors
  },
};

export default customTheme;
