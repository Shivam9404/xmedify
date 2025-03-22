import { Card, CardContent, Typography, Box } from "@mui/material";

export default function SpecialistCard({ img, title, designation }) {
    return (
        <Card sx={{ maxWidth: 300, borderRadius: 2, boxShadow: 3 }}>
            <Box
                component="img"
                src={img}
                alt={title}
                sx={{ width: "100%", height: 200, objectFit: "cover", borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
            />
            <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {designation}
                </Typography>
            </CardContent>
        </Card>
    );
}
