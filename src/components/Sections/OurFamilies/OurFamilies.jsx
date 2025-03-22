import { Box, Container, Grid, Typography, Card, CardContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite"; // Replace with correct icons
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const stats = [
    { icon: <FavoriteIcon sx={{ fontSize: 40, color: "#0086FF" }} />, value: "5000+", label: "Happy Patients" },
    { icon: <LocalHospitalIcon sx={{ fontSize: 40, color: "#FF8C8C" }} />, value: "200+", label: "Hospitals" },
    { icon: <ScienceIcon sx={{ fontSize: 40, color: "#FFB200" }} />, value: "1000+", label: "Laboratories" },
    { icon: <MedicalServicesIcon sx={{ fontSize: 40, color: "#00B050" }} />, value: "700+", label: "Expert Doctors" },
];

export default function OurFamilies() {
    return (
        <Box sx={{ bgcolor: "#F3F8FF", py: 8 }}>
            <Container maxWidth="xl">
                <Typography variant="subtitle2" sx={{ color: "#0066FF", fontWeight: 600 }}>
                    CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                </Typography>
                <Typography variant="h4" fontWeight={700} mt={1}>
                    Our Families
                </Typography>
                <Typography variant="body1" color="text.secondary" mt={2} width={{ xs: "100%", md: "50%" }}>
                    We will work with you to develop individualized care plans, including management of chronic diseases.
                    If we cannot assist, we can provide referrals or advice about the type of practitioner you require.
                    We treat all inquiries sensitively and in the strictest confidence.
                </Typography>

                {/* Stats Section */}
                <Grid container spacing={3} mt={4}>
                    {stats.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card sx={{ p: 3, textAlign: "center", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", borderRadius: 3 }}>
                                <Box sx={{ bgcolor: "#F3F8FF", width: 60, height: 60, mx: "auto", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}>
                                    {item.icon}
                                </Box>
                                <CardContent>
                                    <Typography variant="h5" fontWeight={700} sx={{ color: "#1A1A1A" }}>
                                        {item.value}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.label}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
