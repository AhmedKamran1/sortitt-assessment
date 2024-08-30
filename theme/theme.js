const theme = () => {
  const primaryPalette = {
    main: "#ffb01e",
  };

  const secondaryPalette = {
    main: "#a6e379",
  };

  const ternaryPalette = {
    main: "#7ae3c3",
    contrastText: "#ffffff",
  };

  const staticColorPalette = {
    primary: "#fafafa",
    secondary: "#333333",
    ternary: "#a7aab0",
  };

  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },

    palette: {
      primary: primaryPalette,
      secondary: secondaryPalette,
      ternary: ternaryPalette,
      text: {
        primary: staticColorPalette.primary,
        secondary: staticColorPalette.secondary,
        ternary: staticColorPalette.ternary,
      },
      static: staticColorPalette,
    },
  };
};

export default theme;
