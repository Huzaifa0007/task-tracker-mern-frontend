import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" py={8}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;
