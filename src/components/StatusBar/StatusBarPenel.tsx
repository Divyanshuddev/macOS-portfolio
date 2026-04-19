import { Grid, IconButton, Slider, Stack, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NetworkWifiOutlinedIcon from '@mui/icons-material/NetworkWifiOutlined';
import BluetoothOutlinedIcon from '@mui/icons-material/BluetoothOutlined';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useState } from "react";
const socialLinksData = [
    {
        title: "Github",
        icon: <GitHubIcon sx={{ color: "white" }} />
    },
    {
        title: "LinkedIn",
        icon: <LinkedInIcon sx={{ color: "white" }} />
    },
    {
        title: "Whatsapp",
        icon: <WhatsAppIcon sx={{ color: "white" }} />
    }
]
const styles = {
    root: {
        position: "absolute",
        top: 35,
        right: 10,
        background: 'rgba(255, 255, 255, 0.31)',
        borderRadius: "10px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        "-webkit-backdrop-filter": "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        width: 400,
        boxSizing: "border-box",
        padding: 2,
        zIndex: 100,
    },
    socialLinks: {
        background: 'rgba(255, 255, 255, 0.16)',
        borderRadius: "10px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        "-webkit-backdrop-filter": "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxSizing: "border-box",
        padding: 1
    },
    socilLinksButton: {
        backgroundColor: "transparent",
        border: "none",
        display: "flex",
        alignItems: "center",
    },
    socilLinksTitle: {
        color: "black",
        fontSize: 15,
        fontWeight: "600",
        fontFamily: "Montserrat"
    },
    buttons: {
        background: 'rgba(255, 255, 255, 0.16)',
        borderRadius: "10px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        "-webkit-backdrop-filter": "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        width: "100%",
        boxSizing: "border-box",
        padding: 2,
        display: "flex",
        alignItems: "center",
    },
    volumeTool: {
        background: 'rgba(255, 255, 255, 0.16)',
        borderRadius: "10px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        "-webkit-backdrop-filter": "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        width: "100%",
        boxSizing: "border-box",
        padding: 2,
    },
    iconButton: {
        backgroundColor: "#42a5f5",
        "&:hover": {
            backgroundColor: "#42a5f5"
        }
    }
}
const StatusBarPanel = () => {
    // const dispatch = useDispatch();
    const [sliderValue, setSliderValue] = useState<number>(50)
    const handleChange = (event: Event, newValue: number) => {
        setSliderValue(newValue);
        console.log(event);
    };
    return (
        <Grid container sx={styles.root} rowSpacing={1} columnSpacing={1}>
            <Grid size={6}>
                <Stack sx={styles.socialLinks} spacing={1}>
                    {
                        socialLinksData.map((value, index) => {
                            return (
                                <Stack key={index} component={'button'} direction={'row'} sx={styles.socilLinksButton} spacing={1}>
                                    <IconButton sx={styles.iconButton}>{value.icon}</IconButton>
                                    <Typography sx={styles.socilLinksTitle}>{value.title}</Typography>
                                </Stack>
                            )
                        })
                    }
                </Stack>
            </Grid>
            <Grid size={6} >
                <Stack spacing={1.2}>
                    <Stack component={'button'} direction={'row'} sx={styles.buttons} spacing={1}>
                        <IconButton sx={styles.iconButton}><NetworkWifiOutlinedIcon sx={{ color: "white" }} /></IconButton>
                        <Typography sx={styles.socilLinksTitle}>Wi-Fi</Typography>
                    </Stack>
                    <Stack component={'button'} direction={'row'} sx={styles.buttons} spacing={1}>
                        <IconButton sx={styles.iconButton}><BluetoothOutlinedIcon sx={{ color: "white" }} /></IconButton>
                        <Typography sx={styles.socilLinksTitle}>Bluetooth</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid size={12}>
                <Stack sx={styles.volumeTool} spacing={1}>
                    <Typography sx={styles.socilLinksTitle}>Volume</Typography>
                    <Stack direction={'row'} spacing={1} sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton sx={styles.iconButton}>
                            <VolumeUpIcon sx={{ color: "white" }} />
                        </IconButton>
                        <Slider
                            size="medium"
                            value={sliderValue} onChange={handleChange}
                            aria-label="large"
                            valueLabelDisplay="auto"
                            sx={{ color: "#42a5f5", boxSizing: "border-box" }}
                        />
                    </Stack>
                </Stack>
            </Grid>
            <Grid size={12}>
                <Stack sx={styles.volumeTool} spacing={1}>
                    <Typography sx={styles.socilLinksTitle}>Brightness</Typography>
                    <Stack direction={'row'} spacing={1} sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton sx={styles.iconButton}>
                            <WbSunnyIcon sx={{ color: "white" }} />
                        </IconButton>
                        <Slider
                            size="medium"
                            value={sliderValue} onChange={handleChange}
                            aria-label="large"
                            valueLabelDisplay="auto"
                            sx={{ color: "#42a5f5", boxSizing: "border-box" }}
                        />
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}
export default StatusBarPanel