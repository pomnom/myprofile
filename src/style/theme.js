import { createTheme } from "@mui/material";
import { teal, deepOrange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: { main: teal[500], light: teal[300] },
    secondary: { main: deepOrange[500] },
    netral: { black: "black", white: "white" },
  },
});
