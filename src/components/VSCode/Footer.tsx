import {  Stack, Typography } from "@mui/material"
import ConnectToIcon from "./ConnetToIcon"
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
const styles={
    root:{
        width:"100%",
        height:"3vh",
        backgroundColor:"#1f1f1f",
        borderTop:"0.1px solid #3d3c3c",
        display:"flex",
        alignItem:"center",
        justifyContent:"space-between",
        boxSizing:"border-box",
        paddingRight:1
    },
    connectToStack:{
        width:40,
        backgroundColor:"#42a5f5",
        height:"3vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
}
const Footer = ()=>{
    return(
        <Stack sx={styles.root} direction={'row'}>
            <Stack sx={{display:"flex",alignItems:"center",}} direction={'row'} spacing={0.8}>
                <Stack sx={styles.connectToStack}>
                <ConnectToIcon size={15} color="white" />
                </Stack>
                <Stack sx={{display:"flex",alignItems:"center",}} direction={'row'} spacing={0.5}>
                    <CancelOutlinedIcon fontSize="small" sx={{color:"gray"}} />
                    <Typography sx={{color:"gray"}}>0</Typography>
                </Stack>
                <Stack sx={{display:"flex",alignItems:"center",}} direction={'row'} spacing={0.5}>
                    <WarningAmberOutlinedIcon fontSize="small" sx={{color:"gray"}} />
                    <Typography sx={{color:"gray"}}>0</Typography>
                </Stack>
            </Stack>
            <NotificationsNoneOutlinedIcon fontSize="small" sx={{color:"gray",alignSelf:"center"}} />
        </Stack>
    )
}
export default Footer