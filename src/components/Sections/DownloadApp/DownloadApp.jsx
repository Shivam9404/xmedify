import { Box, Typography, Button, TextField, Stack } from "@mui/material";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function DownloadApp() {
  return (
    <Box
      sx={{
        background: "linear-gradient(white, #E7F0FF)",
        py: 6,
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h4" fontWeight="bold">
          Download the <Typography component="span" color="primary">Medify</Typography> App
        </Typography>
        <Typography>Get the link to download the app</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField 
            variant="outlined" 
            placeholder="Enter phone number" 
            size="small"
            sx={{ minWidth: "250px" }}
          />
          <Button variant="contained">Send SMS</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" startIcon={<FaGooglePlay />} sx={{ bgcolor: "black" }}>
            Google Play
          </Button>
          <Button variant="contained" startIcon={<FaApple />} sx={{ bgcolor: "black" }}>
            App Store
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}