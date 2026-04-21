import { Box, Stack, Typography } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import tsIcon from '../../assets/typescript.png'
import jsIcon from '../../assets/js.png'
import htmlIcon from '../../assets/html.png'
import cssIcon from '../../assets/css.png'
import { useDispatch } from "react-redux";
import { setCurrentTab } from "../../features/WindowSlice/WindowSlice";
const data = [
    {
        title: "home.tsx",
        icon: tsIcon
    },
    {
        title: "about.html",
        icon: htmlIcon
    },
    {
        title: "project.js",
        icon: jsIcon
    },
    {
        title: "contact.css",
        icon: cssIcon
    }
]
const styles = {
    root: {
        boxSizing: "border-box",
        padding: 2,
    },
    firstContainer: {
        displat: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    text: {
        color: "gray",
        fontSize: 11
    },
    details: {
        color: "whitesmoke",
        fontSize: 12
    },
    button: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        boxSizing: "border-box",
        padding: 0.5,
        border: "none",
        "&:hover": {
            backgroundColor: "#383838"
        }
    },
    image: {
        width: 18,
        height: 18
    },
    title: {
        fontSize: 14,
        color: "white"
    }
}
const Explorer = () => {
    const dispatch = useDispatch()
    return (
        <Stack sx={styles.root} spacing={2} >
            <Stack sx={styles.firstContainer} direction={'row'}>
                <Typography sx={styles.text}>EXPLORER</Typography>
                <MoreHorizIcon sx={{ color: "gray" }} fontSize="small" />
            </Stack>
            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={0.5}>
                <KeyboardArrowDownRoundedIcon sx={{ color: "white" }} />
                <Typography sx={{ color: "white", fontSize: 12 }}>PORTFOLIO</Typography>
            </Stack>
            <Stack spacing={1} sx={{ boxSizing: "border-box", paddingLeft: 1 }}>
                {
                    data.map((value, index) => {
                        return (
                            <Stack key={index} component={'button'} direction={'row'} sx={styles.button} spacing={1} onClick={() => dispatch(setCurrentTab(value.title))}>
                                <Box component={'img'} src={value.icon} sx={styles.image} />
                                <Typography sx={styles.title}>{value.title}</Typography>
                            </Stack>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}
export default Explorer