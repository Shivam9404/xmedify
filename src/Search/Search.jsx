import { Container, Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import icon from "../assets/tick.png";
import cta from "../assets/cta.png";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import BookingModal from "../components/BookingModal/BookingModal";
import AutohideSnackbar from "../components/AutohideSnackbar/AutohideSnackbar";
import NavBar from "../components/NavBar/NavBar";

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [hospitals, setHospitals] = useState([]);
    const [state, setState] = useState(searchParams.get("state"));
    const [city, setCity] = useState(searchParams.get("city"));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [showBookingSuccess, setShowBookingSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const availableSlots = {
        morning: ["11:30 AM"],
        afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
        evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
    };

    useEffect(() => {
        const getHospitals = async () => {
            setIsLoading(true);
            try {
                const { data } = await axios.get(
                    `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
                );
                setHospitals(data);
            } catch (err) {
                console.error(err);
            }
            setIsLoading(false);
        };

        if (state && city) {
            getHospitals();
        }
    }, [state, city]);

    useEffect(() => {
        const stateParam = searchParams.get("state");
        const cityParam = searchParams.get("city");
    
        if (stateParam && cityParam) {
            setState(stateParam);
            setCity(cityParam);
        }
    }, [searchParams]);
    

    const handleBookingModal = (details) => {
        setBookingDetails(details);
        setIsModalOpen(true);
    };

    return (
        <>
            <NavBar />
            <Box sx={{
                background: "linear-gradient(#EFFSFE, rgba(241,247,255,0.47))",
                width: "100%",
                pl: 0,
            }}>
                <Box sx={{
                    position: "relative",
                    background: "linear-gradient(90deg, #2AA7FF, #CBCES)",
                    borderBottomLeftRadius: "1rem",
                    borderBottomRightRadius: "1rem",
                }}>
                    <Container maxWidth="xl" sx={{
                        background: "#fff",
                        p: 3,
                        borderRadius: 2,
                        transform: "translateY(50px)",
                        mb: "50px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    }}>
                        <SearchHospital />
                    </Container>
                </Box>
                <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
                    {hospitals.length > 0 && (
                        <Box mb={3}>
                            <Typography component="h1" fontSize={24} lineHeight={1.1} mb={2} fontWeight={500}>
                                {hospitals.length} medical centers available in{" "}
                                <span style={{ textTransform: "capitalize" }}>
                                    {city?.toLocaleLowerCase()}
                                </span>
                            </Typography>
                            <Stack direction="row" spacing={2}>
                                <img src={icon} height={24} width={24} alt="icon" />
                                <Typography color="#787887" lineHeight={1.4}>
                                    Book appointments with minimum wait-time & verified doctor details
                                </Typography>
                            </Stack>
                        </Box>
                    )}
                    <Stack alignItems="flex-start" direction={{ md: "row" }}>
                        <Stack
                            mb={{ xs: 4, md: 0 }}
                            spacing={3}
                            width={{ xs: 1, md: "calc(100% - 384px)" }}
                            mr="24px"
                        >
                            {hospitals.length > 0 &&
                                hospitals.map((hospital) => (
                                    <HospitalCard
                                        key={hospital["Hospital Name"]}
                                        details={hospital}
                                        availableSlots={availableSlots}
                                        handleBooking={handleBookingModal}
                                    />
                                ))}
                            {isLoading && (
                                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                                    Loading...
                                </Typography>
                            )}
                            {!state && !city && (
                                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                                    Please select a state and city
                                </Typography>
                            )}
                        </Stack>
                        <img src={cta} width={360} height="auto" alt="banner" />
                    </Stack>
                </Container>
                <BookingModal
                    open={isModalOpen}
                    setOpen={setIsModalOpen}
                    bookingDetails={bookingDetails}
                    showSuccessMessage={setShowBookingSuccess}
                />
                <AutohideSnackbar
                    open={showBookingSuccess}
                    setOpen={setShowBookingSuccess}
                    message="Booking Successful"
                />
            </Box>
        </>
    );
}
