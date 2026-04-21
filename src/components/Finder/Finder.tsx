import { Box, Grid, Input, Stack, Typography } from "@mui/material"
import imageViewerIcon from '../../assets/image-viewer.webp'
import musicIcon from '../../assets/music.png'
import vscodeIcon from '../../assets/vscode.png'
import videoPlayerIcon from '../../assets/video-player.webp'
import resumeIcon from '../../assets/resume.webp'
import terminalIcon from '../../assets/terminal.png'
import githubIcon from '../../assets/githubWhiteIcon.png'
import linkedinIcon from '../../assets/linkedIn.png'
import whatsappIcon from '../../assets/whatsapp.png'
import { openWindow } from "../../features/WindowSlice/WindowSlice"
import { useDispatch } from "react-redux"
const data = [
    {
        title: "Photos",
        icon: imageViewerIcon,
    },
    {
        title: "Music",
        icon: musicIcon,
    },
    {
        title: "VS Code",
        icon: vscodeIcon,
    },
    {
        title: "Terminal",
        icon: terminalIcon,
    },
    {
        title: "Videos",
        icon: videoPlayerIcon,
    },
    {
        title: "Resume",
        icon: resumeIcon,
    },
    {
        title: "Github",
        icon: githubIcon
    },
    {
        title: "Linkedin",
        icon: linkedinIcon
    },
    {
        title: "Whatsapp",
        icon: whatsappIcon
    }
]
const styles={
     input: {
        backgroundColor: "transparent",
        width: 400,
        padding: 1,
        paddingLeft: 3,
        color: "white",
        borderRadius: 6,
        border:"1px solid white"
    },
     icon: {
        width: 60,
        height: 60,
    },
    button: {
        backgroundColor: "transparent",
        border: "none",
        display: "flex",
        alignItems: "center",
        borderRadius: 2,
        boxSizing: "border-box",
        padding: 1,
        paddingLeft: 2,
        paddingRight: 2,
        "&:hover": {
            backgroundColor: "#b9b9b95d"
        },
    },
    title: {
        color: "whitesmoke",
        fontfamily: "Montserrat"
    }
}
const Finder=()=>{
    const dispatch = useDispatch()
    return(
        <Stack spacing={5} sx={{boxSizing:"border-box",paddingTop:4}}>
            <Stack sx={{ alignSelf: "center" }}>
                <Input sx={styles.input} placeholder="Finder" disableUnderline />
            </Stack>
            <Grid container sx={{ alignSelf: "center", width: 700,paddingLeft:12 }} columnSpacing={1} rowSpacing={7}>
                {
                    data.map((value, index) => {
                        return (
                            <Grid size={4} key={index}>
                                <Stack component={'button'} sx={styles.button} spacing={1} onClick={() => dispatch(openWindow(value.title))}>
                                    <Box component={'img'} src={value.icon} sx={styles.icon} />
                                    <Typography sx={styles.title}>{value.title}</Typography>
                                </Stack>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
}
export default Finder