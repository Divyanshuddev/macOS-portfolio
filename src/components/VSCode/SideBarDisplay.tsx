import { Stack } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import Explorer from "./Explorer"


const SideBarDisplay = () => {
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    // const selectedMenuBar = useSelector((state: RootState) => state.projects.selectedMenuBar)
    const styles = {
        root: {
            width: "14vw",
            heigth: isMaximized ? "71vh" : "88vh",
            backgroundColor: "#181818",
            borderRight:"0.1px solid #3d3c3c"
        }
    }
    return (
        <Stack sx={styles.root}>
            <Explorer />
        </Stack>
    )
}
export default SideBarDisplay