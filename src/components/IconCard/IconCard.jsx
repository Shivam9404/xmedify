import { Box, Typography } from "@mui/material";

export default function IconCard({ img, title, bgColor, shadow }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: bgColor || "#fff",
                boxShadow: shadow ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                width: "100%", 
                height: "120px",
                "&:hover": {
                    transform: "scale(1.05)",
                },
            }}
        >
            <img src={img} alt={title} style={{ width: "50px", height: "50px", marginBottom: "10px" }} />
            <Typography variant="h6" sx={{ fontWeight: "500", fontSize: "16px" }}>
                {title}
            </Typography>
        </Box>
    );
}
