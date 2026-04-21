import { Box, IconButton, Stack, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/Store";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import tsIcon from '../../assets/typescript.png'
import jsIcon from '../../assets/js.png'
import htmlIcon from '../../assets/html.png'
import cssIcon from '../../assets/css.png'
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
const VSCodePanelNav = () => {
    const dispatch = useDispatch()
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
     const currentTab = useSelector((state:RootState)=>state.window.currentTab)
    const styles = {
        navBar: {
            width: isMaximized ? "53vw" : "83vw",
            heigth: "5vh",
            backgroundColor: "#181818",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        welcomeFile: {
            width: "fit-content",
            height: "5vh",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#1f1f1f",
            paddingLeft: 1,
            border:"none"
        },
        icon: {
            width: 20,
            height: 20
        },
        welcomeText: {
            color: "white",
            fontSize:14
        },
    }
   
    return (
        <Stack sx={styles.navBar} direction={'row'}>
            <Stack direction={'row'} sx={{display:"flex",alignItems:"center"}} spacing={0.5}>
                {
                    data.map((value, index) => {
                        return (
                            <Stack sx={styles.welcomeFile} style={{borderTop:currentTab===value.title?"1px solid #ff7865":"1px solid transparent"}} direction={'row'} key={index} component={'button'} onClick={()=>dispatch(setCurrentTab(value.title))}>
                                <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={1}>
                                    <Box component={'img'} src={value.icon} sx={styles.icon} />
                                    <Typography sx={styles.welcomeText}>{value.title}</Typography>
                                </Stack>
                                <IconButton>
                                    <CloseSharpIcon fontSize="small" sx={{ color: "gray" }} />
                                </IconButton>
                            </Stack>
                        )
                    })
                }
            </Stack>

            <Stack sx={{ display: "flex", alignItems: "center", boxSizing: "border-box", paddingRight: 1 }} direction={'row'} spacing={1}>
                <SpaceDashboardOutlinedIcon fontSize="small" sx={{ color: "gray" }} />
                <MoreHorizOutlinedIcon fontSize="small" sx={{ color: "gray" }} />
            </Stack>
        </Stack>
    )
}
export default VSCodePanelNav