import Sidebar from "./components/Sidebar";
import Navabar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navabar />
      <Stack direction="row" spacing={3} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
