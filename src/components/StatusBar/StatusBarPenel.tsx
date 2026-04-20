import { Grid, IconButton, Slider, Stack, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NetworkWifiOutlinedIcon from '@mui/icons-material/NetworkWifiOutlined';
import BluetoothOutlinedIcon from '@mui/icons-material/BluetoothOutlined';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusBarTools, setVolume } from "../../features/StatusBarSlice/StatusBarSlice";
import type { RootState } from "../../store/Store";
import SignalWifiOffIcon from '@mui/icons-material/SignalWifiOff';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
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
    },
    offButton: {
        background: 'rgba(255, 255, 255, 0)',
        borderRadius: "10px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
        backdropFilter: "blur(5px)",
        "-webkit-backdrop-filter": "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0)",
        width: "100%",
        boxSizing: "border-box",
        padding: 2,
        display: "flex",
        alignItems: "center",
    },
    offIconButton: {
        backgroundColor: "gray",
        "&:hover": {
            backgroundColor: "gray"
        }
    }
}
const StatusBarPanel = () => {
    const dispatch = useDispatch();
    const [sliderValueVol, setSliderValueVol] = useState<number>(50)
    const [sliderValueBrig, setSliderValueBrig] = useState<number>(80)
    const handleChangeVol = (event: Event, newValue: number) => {
        setSliderValueVol(newValue);
        console.log(event);
    };
    const handleChangeBrig = (event: Event, newValue: number) => {
        setSliderValueBrig(newValue);
        console.log(event);
    };
    useEffect(() => {
        if (sliderValueVol === 0) {
            dispatch(setVolume(false))
        }
        else {
            dispatch(setVolume(true))
        }
    }, [sliderValueVol])
    const wifi = useSelector((state: RootState) => state.statusbar.wifi)
    const bluetooth = useSelector((state: RootState) => state.statusbar.bluetooth)
    const volume = useSelector((state: RootState) => state.statusbar.volume)
    return (
        <Grid container sx={styles.root} rowSpacing={1} columnSpacing={1}>
            <Grid size={6}>
                <Stack sx={styles.socialLinks} spacing={1}>
                    {
                        socialLinksData.map((value, index) => {
                            return (
                                <Stack key={index} component={'button'} direction={'row'} sx={styles.socilLinksButton} spacing={1} onClick={() => dispatch(setStatusBarTools(value.title))}>
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
                    <Stack component={'button'} direction={'row'} sx={wifi ? styles.buttons : styles.offButton} spacing={1} onClick={() => dispatch(setStatusBarTools('Wi-Fi'))}>
                        <IconButton sx={wifi ? styles.iconButton : styles.offIconButton}>{wifi ? <NetworkWifiOutlinedIcon sx={{ color: "white" }} /> : <SignalWifiOffIcon sx={{ color: "white" }} />}</IconButton>
                        <Typography sx={styles.socilLinksTitle}>Wi-Fi</Typography>
                    </Stack>
                    <Stack component={'button'} direction={'row'} sx={bluetooth ? styles.buttons : styles.offButton} spacing={1} onClick={() => dispatch(setStatusBarTools('Bluetooth'))}>
                        <IconButton sx={bluetooth ? styles.iconButton : styles.offIconButton}><BluetoothOutlinedIcon sx={{ color: "white" }} /></IconButton>
                        <Typography sx={styles.socilLinksTitle}>Bluetooth</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid size={12}>
                <Stack sx={styles.volumeTool} spacing={1}>
                    <Typography sx={styles.socilLinksTitle}>Volume</Typography>
                    <Stack direction={'row'} spacing={2} sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton sx={volume ? styles.iconButton : styles.offIconButton}>
                            {
                                volume ? <VolumeUpIcon sx={{ color: "white" }} /> : <VolumeOffIcon sx={{ color: "white" }} />
                            }

                        </IconButton>
                        <Slider
                            size="medium"
                            value={sliderValueVol} onChange={handleChangeVol}
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
                    <Stack direction={'row'} spacing={2} sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton sx={styles.iconButton}>
                            <WbSunnyIcon sx={{ color: "white" }} />
                        </IconButton>
                        <Slider
                            size="medium"
                            value={sliderValueBrig} onChange={handleChangeBrig}
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