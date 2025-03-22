import DaySelector from "./DaySelector/DaySelector";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";

export default function Calendar({ availableSlots, details, handleBooking }) {
    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

    const totalSlots =
        availableSlots.morning.length +
        availableSlots.afternoon.length +
        availableSlots.evening.length;

    return (
        <Box>
            <DaySelector
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                totalSlots={totalSlots}
            />
            <TimeSlotPicker
                availableSlots={availableSlots}
                selectedDate={selectedDate}
                details={details}
                handleBooking={handleBooking}
            />
        </Box>
    );
}