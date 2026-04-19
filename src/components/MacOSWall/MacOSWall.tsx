import { Stack } from "@mui/material"
import macOSWall from '../../assets/macOSWall.jpg'
import MacOSNav from "../MacOSNav/MacOSNav"
const styles = {
    root: {
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        backgroundImage: `url(${macOSWall})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
    }
}
const MacOSWall =()=>{
    return(
        <Stack sx={styles.root}>
            <MacOSNav />
        </Stack>
    )
}
export default MacOSWall