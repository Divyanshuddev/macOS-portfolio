import { Stack } from "@mui/material"
import macOSWall from '../../assets/macOSWall.jpg'
import MacOSNav from "../MacOSNav/MacOSNav"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import StatusBarPanel from "../StatusBar/StatusBarPenel"
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
const MacOSWall = () => {
    const statusBarPanel = useSelector((state: RootState) => state.statusbar.statusPanel)
    return (
        <Stack sx={styles.root}>
            <MacOSNav />
            {
                statusBarPanel && <StatusBarPanel />
            }
        </Stack>

    )
}
export default MacOSWall