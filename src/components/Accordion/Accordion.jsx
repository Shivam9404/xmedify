import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/Add"; // Using "Add" as a "+" icon

export default function CustomizedAccordions({ data }) {
    return (
        <Box>
            {data.map((faq, index) => (
                <Accordion key={index} sx={{ boxShadow: "none", borderBottom: "1px solid #E0E0E0" }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "#0066FF", fontWeight: "bold" }} />}
                        sx={{ fontWeight: 600, color: "#1A1A1A" }}
                    >
                        <Typography fontWeight={600} sx={{ color: "#1A1A1A" }}>
                            {faq.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="text.secondary">{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
