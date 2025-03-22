import { Box, Container, Grid, Typography } from "@mui/material";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#023e8a", color: "#fff", py: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold">
              <img src="/logo.svg" alt="Medify" style={{ width: 20, marginRight: 8 }} /> Medify
            </Typography>
            <Box mt={2} display="flex" gap={2}>
              <FaFacebookF size={20} />
              <FaTwitter size={20} />
              <FaYoutube size={20} />
              <FaPinterest size={20} />
            </Box>
          </Grid>
          
          {/* Footer Links */}
          {Array(3).fill(null).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="body1">&gt; About Us</Typography>
              <Typography variant="body1">&gt; Our Pricing</Typography>
              <Typography variant="body1">&gt; Our Gallery</Typography>
              <Typography variant="body1">&gt; Appointment</Typography>
              <Typography variant="body1">&gt; Privacy Policy</Typography>
            </Grid>
          ))}
        </Grid>

        {/* Copyright */}
        <Box mt={4} textAlign="center" borderTop="1px solid rgba(255, 255, 255, 0.2)" pt={2}>
          <Typography variant="body2">
            Copyright &copy;2023 Surya Nursing Home.com. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
