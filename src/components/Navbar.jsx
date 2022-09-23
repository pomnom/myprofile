import {
  AppBar,
  InputBase,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import {
  ArrowBack,
  ArrowForward,
  KeyboardArrowDown,
  ArrowUpward,
  Help,
} from "@mui/icons-material";
import { Box } from "@mui/material";

const MyToolbarTop = styled(Toolbar)({
  display: "flex",
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  borderBottomColor: "grey",
  justifyContent: "space-between",
});
const MyToolbarBottom = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const MySeacrh = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 0",
  width: "20%",
  borderStyle: "solid",
  borderColor: "grey",
  borderWidth: "1px",
}));
const MyDirectory = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 0",
  width: "70%",
  borderStyle: "solid",
  borderColor: "grey",
  borderWidth: "1px",
}));
const MyBox = styled(Box)(({ theme }) => ({
  padding: "2px 5px",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <MyToolbarTop
        sx={{ minHeight: { xs: 32, sm: 32 }, padding: { xs: 0, sm: 0 } }}
      >
        <Stack direction="row">
          <MyBox
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <Typography color="black">File</Typography>
          </MyBox>
          <MyBox>
            <Typography color="black">Computer</Typography>
          </MyBox>
          <MyBox>
            <Typography color="black">View</Typography>
          </MyBox>
        </Stack>
        <Stack direction="row">
          <KeyboardArrowDown color="disabled" />
          <Help color="primary" />
        </Stack>
      </MyToolbarTop>
      <MyToolbarBottom
        sx={{
          minHeight: { xs: 32, sm: 32 },
          padding: { xs: "2px 0 0 0", sm: "2px 0 0 0" },
        }}
      >
        <ArrowBack color="secondary" />
        <ArrowForward color="disabled" />
        <KeyboardArrowDown color="secondary" />
        <ArrowUpward color="secondary" />
        <MyDirectory>
          <InputBase placeholder="File Directory" disabled />
        </MyDirectory>
        <MySeacrh>
          <InputBase placeholder="React" />
        </MySeacrh>
      </MyToolbarBottom>
    </AppBar>
  );
};
export default Navbar;
