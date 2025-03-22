import { Box, Container, Grid, Typography } from "@mui/material";
import CustomizedAccordions from "../../Accordion/Accordion";
import faqBanner from "../../../assets/faqs-banner.jpg";

export default function FAQs() {
    const faqs = [
        {
            question: "Why choose our medical for your family?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet.",
        },
        {
            question: "Why we are different from others?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet.",
        },
        {
            question: "Trusted & experienced senior care & love?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet.",
        },
        {
            question: "How to get an appointment for emergency cases?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet.",
        },
    ];

    return (
        <Box py={4}>
            <Container maxWidth="xl">
                <Typography color="primary.main" fontWeight={600} textAlign="center">
                    Get Your Answer
                </Typography>

                <Typography textAlign="center" variant="h2" mb={2}>
                    Frequently Asked Questions
                </Typography>

                <Grid container alignItems="center" spacing={5}>
                    {/* Left side - FAQ Banner Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            src={faqBanner}
                            component="img"
                            width={1}
                            height="auto"
                        />
                    </Grid>

                    {/* Right side - FAQ Accordion */}
                    <Grid item xs={12} md={6}>
                        <Box maxWidth={450}>
                            <CustomizedAccordions data={faqs} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
}
