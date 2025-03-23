import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Component to search the hospitals based on State and City selection.
// API used to fetch details of hospital and set the values in formData

export default function SearchHospital() {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({ state: "", city: "" });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get("https://meddata-backend.onrender.com/states");
                setStates(response.data);
            } catch (error) {
                console.error("Error fetching states:", error);
            }
        };
        fetchStates();
    }, []);

    useEffect(() => {
        setCities([]);
        setFormData((prev) => ({ ...prev, city: "" }));  
    }, [formData.state]);
    
    useEffect(() => {
        if (!formData.state) return;
    
        const fetchCities = async () => {
            try {
                const response = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`);
                setCities(response.data);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };
    
        fetchCities();
    }, [formData.state]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.state && formData.city) {
            navigate(`/search?state=${formData.state}&city=${formData.city}`, { replace: true });
            window.location.reload(); // Force reloading the page to ensure the search works
        }
    };
    

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                gap: 4,
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
            }}
        >
            <Select
                displayEmpty
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                required
                sx={{ minWidth: 200, width: "100%" }}
            >
                <MenuItem disabled value="">
                    State
                </MenuItem>
                {states.map((state) => (
                    <MenuItem key={state} value={state}>
                        {state}
                    </MenuItem>
                ))}
            </Select>

            <Select
                displayEmpty
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
                required
                sx={{ minWidth: 200, width: "100%" }}
            >
                <MenuItem disabled value="">
                    City
                </MenuItem>
                {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                        {city}
                    </MenuItem>
                ))}
            </Select>

            <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<SearchIcon />}
                sx={{ py: "15px", px: 8, flexShrink: 0 }}
                disableElevation
            >
                Search
            </Button>
        </Box>
    );
}
