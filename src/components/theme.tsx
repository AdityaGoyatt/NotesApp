import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const colors = {
  blue: {
    50: "#EBF8FF",
    100: "#BEE3F8",
    200: "#90CDF4",
    300: "#63B3ED",
    400: "#4299E1",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  },
};

const theme = extendTheme({ config, colors });
export default theme;
