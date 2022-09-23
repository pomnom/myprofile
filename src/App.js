import Navbar from "./components/Navbar";
import Mainbar from "./components/Mainbar";
import Leftbar from "./components/Leftbar";
import { Box, Stack } from "@mui/material";
function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={1}>
        <Leftbar />
        <Mainbar />
      </Stack>
    </Box>
  );
}

export default App;
