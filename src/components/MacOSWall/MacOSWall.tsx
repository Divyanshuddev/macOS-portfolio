import { Stack } from "@mui/material"
import macOSWall from '../../assets/macOSWall.jpg'
import MacOSNav from "../MacOSNav/MacOSNav"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import StatusBarPanel from "../StatusBar/StatusBarPenel"
import MacOSTaskBar from "../MacOSTaskBar/MacOSTaskBar"
import { useRef, useState } from "react"
import PhotosWindow from "../Photos/PhotosWindow"
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
     const containerRef = useRef<HTMLDivElement>(null);
    const windowIds = [1, 2, 3, 4, 5, 6, 7];
    const [zOrder, setZOrder] = useState<number[]>(windowIds);
    const bringToFront = (id: number) => {
        setZOrder((z) => [...z.filter((x) => x !== id), id]);
    };
    const getWindowPosition = (index: number) => ({
        top: 100 + index * 20,
        left: 150 + index * 20,
    });
    const statusBarPanel = useSelector((state: RootState) => state.statusbar.statusPanel)
    const photosWindow = useSelector((state:RootState)=>state.window.photosWindow)
    return (
        <Stack sx={styles.root}>
            <MacOSNav />
            <MacOSTaskBar />
            {
                statusBarPanel && <StatusBarPanel />
            }
            {
                photosWindow && <PhotosWindow 
                 id={1}
                // containerRef={containerRef}
                zIndex={zOrder.indexOf(1) + 1}
                bringToFront={bringToFront}
                defaultPosition={getWindowPosition(0)}
                />
            }
        </Stack>

    )
}
export default MacOSWall