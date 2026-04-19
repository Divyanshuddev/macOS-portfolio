import { Box, Stack } from "@mui/material"
import appleLogo from '../../assets/apple-logo.png'
import ProgressBar from "./ProgressBar"
const styles={
    root:{
        width:"100vw",
        height:"100vh",
        boxSizing:"border-box",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black"
    },
    appleLogp:{
        width:200,
        height:200
    }

}
const Loader =()=>{
    return(
        <Stack sx={styles.root}>
            <Stack sx={{alignItems:"center"}} spacing={6}>
                <Box component={'img'} src={appleLogo} sx={styles.appleLogp} />
                <ProgressBar />
            </Stack>
        </Stack>
    )
}
export default Loader