import { Box } from "@mui/material";
import React from "react";

const Leftbar = () => {
  return (
    <Box
      bgcolor="orange"
      paddingTop="5px"
      flex={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Leftbar
    </Box>
  );
};
export default Leftbar;
