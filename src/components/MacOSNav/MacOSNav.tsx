import { Stack } from "@mui/material"
import MacOSMenuBar from "./MacOSMenuBar"
import StatusBar from "../StatusBar/StatusBar"

const styles = {
    root: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100%",
        height: "3vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
    }
}
const MacOSNav = () => {
    return (
        <Stack sx={styles.root} direction={'row'}>
            <MacOSMenuBar />
            <StatusBar />
        </Stack>
    )
}
export default MacOSNav