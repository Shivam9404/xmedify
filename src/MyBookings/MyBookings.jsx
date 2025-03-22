import { Box, Typography, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import HospitalCard from "../components/HospitalCard/HospitalCard";
import SearchBar from "../components/SearchBar/SearchBar";
import NavBar from "../components/NavBar/NavBar";

import cta from "../assets/cta.png";

export default function MyBookings() {
    // const [bookings, setBookings] = useState([]);
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const [filteredBookings, setFilteredBookings] = useState(bookings);

    return (
        <Container maxWidth="xl" sx={{ px: { xs: 0, md: 5 } }}>
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 0, md: 12 }}
                alignItems={{ xs: "center", md: "flex-end" }}
            >
                <Typography
                    component="h1"
                    pb={1}
                    fontSize={{ xs: 32, md: 40 }}
                    fontWeight={700}
                    color="#fff"
                >
                    My Bookings
                </Typography>
            </Stack>

            <Box
                bgcolor="#fff"
                p={3}
                flexGrow={1}
                borderRadius={2}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                sx={{ transform: "translateY(50px)" }}
                width={{ xs: 1, md: "auto" }}
            >
                <SearchBar list={bookings} filterList={setFilteredBookings} />
                <Stack alignItems="flex-start" direction={{ md: "row" }} mb={{ xs: 4, md: 0 }}>
                </Stack>
            </Box>

            <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
                <Stack alignItems="flex-start" direction={{ md: "row" }}>
                    <Stack
                        mb={{ xs: 4, md: 0 }}
                        spacing={3}
                        width={{ xs: 1, md: "calc(100% - 384px)" }}
                    >
                        {filteredBookings.length > 0 ? (
                            filteredBookings.map((hospital) => (
                                <HospitalCard
                                    key={hospital["Hospital Name"]}
                                    details={hospital}
                                    booking={true}
                                />
                            ))
                        ) : (
                            <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                                No Bookings Found!
                            </Typography>
                        )}
                    </Stack>
                    <img src={cta} width={360} height="auto" />
                </Stack>
            </Container>
        </Container>
    );
}
