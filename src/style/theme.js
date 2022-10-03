import { createTheme } from "@mui/material";
import { teal, deepOrange, yellow, blue } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: { main: teal[500], light: teal[300] },
    secondary: { main: deepOrange[500] },
    netral: { black: "black", white: "white" },
    folder: { main: yellow[400] },
    hilight: { main: blue[50] },
  },
});
