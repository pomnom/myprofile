import { Folder } from "@mui/icons-material";
import { Box, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";

const MyBox = styled(Box)(({ theme }) => ({
  padding: "2px 5px",
  "&:hover": {
    backgroundColor: theme.palette.hilight.main,
  },
}));

const Mainbar = () => {
  const [datas] = useState([
    { title: "Education", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Scholarship", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Contact",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  const [openfolder, setopenfolder] = useState(false);
  const [folderclick, setfolderclick] = useState(false);

  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        setfolderclick(true);
        break;
      case 2:
        setopenfolder(true);
        break;
      default:
        return;
    }
  };

  return (
    <Box flex={4} paddingTop="5px">
      {openfolder ? (
        <Stack direction="row">
          {datas.map((data) => (
            <MyBox maxWidth="200px" key={data.id}>
              <Folder
                color="folder"
                sx={{
                  fontSize: "200px",
                }}
              />
              <Typography align="center">{data.title}</Typography>
            </MyBox>
          ))}
        </Stack>
      ) : (
        <MyBox
          maxWidth="200px"
          onClick={handleClick}
          sx={{ backgroundColor: folderclick ? "#e3f2fd" : "white" }}
        >
          <Folder
            color="folder"
            sx={{
              fontSize: "200px",
            }}
          />
          <Typography align="center">My Profile</Typography>
        </MyBox>
      )}
    </Box>
  );
};
export default Mainbar;
