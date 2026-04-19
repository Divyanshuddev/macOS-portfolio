import { Stack, Typography } from "@mui/material"
import Battery90OutlinedIcon from '@mui/icons-material/Battery90Outlined';
import NetworkWifiOutlinedIcon from '@mui/icons-material/NetworkWifiOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import { useEffect, useState } from "react";
const styles = {
    root: {
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
        paddingRight: 2,
        backgroundColor: "transparent",
        border: "none"
    }
}
const StatusBar = () => {
    const [time, setTime] = useState("");
    const getCurrentDateTime = () => {
        const now = new Date();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const day = days[now.getDay()];
        const month = months[now.getMonth()];
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        minutes = minutes < 10 ? 0 + minutes : minutes;
        return `${day}, ${month} - ${hours}:${minutes} ${ampm}`;
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getCurrentDateTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <Stack sx={styles.root} direction={'row'} spacing={2} component={'button'}>
            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={0.5}>
                <Typography sx={{ color: "white", fontSize: 13 }}>
                    90%
                </Typography>
                <Battery90OutlinedIcon sx={{ color: "white", rotate: "90deg" }} fontSize="medium" />
            </Stack>
            <NetworkWifiOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            <SearchOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            <VolumeUpOutlinedIcon sx={{ color: "white" }} fontSize="small" />
            <Typography sx={{ color: "white", fontSize: 14 }}>{time}</Typography>
        </Stack>
    )
}
export default StatusBar