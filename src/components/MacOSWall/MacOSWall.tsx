import { Stack } from "@mui/material"
import macOSWall from '../../assets/macOSWall.jpg'
import MacOSNav from "../MacOSNav/MacOSNav"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import StatusBarPanel from "../StatusBar/StatusBarPenel"
import MacOSTaskBar from "../MacOSTaskBar/MacOSTaskBar"
import { useState } from "react"
import PhotosWindow from "../Photos/PhotosWindow"
import MusicWindow from "../Music/MusicWindow"
import TerminalWindow from "../Terminal/TerminalWindow"
import VideosWindow from "../Videos/VideosWindow"
import ResumeWindow from "../Resume/ResumeWindow"
import VSCodeWindow from "../VSCode/VSCodeWindow"
import FinderWindow from "../Finder/FinderWindow"
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
    const musicWindow = useSelector((state:RootState)=>state.window.musicWindow)
     const terminalWindow = useSelector((state:RootState)=>state.window.terminalWindow)
      const videosWindow = useSelector((state:RootState)=>state.window.videoWindow)
      const resumeWindow = useSelector((state:RootState)=>state.window.resumeWindow)
      const vscodeWindow = useSelector((state:RootState)=>state.window.vscodeWindow)
      const finder =useSelector((state:RootState)=>state.window.finder)
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
                zIndex={zOrder.indexOf(1) + 1}
                bringToFront={bringToFront}
                defaultPosition={getWindowPosition(0)}
                />
            }
            {
                musicWindow && <MusicWindow 
                id={2}
                zIndex={zOrder.indexOf(2) + 1}
                bringToFront={bringToFront}
                defaultPosition={getWindowPosition(1)}
                />
            }
            {
                terminalWindow && <TerminalWindow 
                id={3}
                zIndex={zOrder.indexOf(3) + 1}
                bringToFront={bringToFront}
                defaultPosition={getWindowPosition(2)}
                />
            }
            {
                videosWindow && <VideosWindow 
                id={4}
                zIndex={zOrder.indexOf(4) + 1}
                bringToFront={bringToFront}
                defaultPosition={getWindowPosition(3)}
                />
            }
            {
                resumeWindow && <ResumeWindow 
                id={5}
                zIndex={zOrder.indexOf(5) + 1}
                bringToFront={bringToFront}
                defaultPosition={getWindowPosition(4)}
                />
            }
            {
                vscodeWindow && <VSCodeWindow 
                id={6}
                zIndex={zOrder.indexOf(6) + 1}
                bringToFront={bringToFront}
                defaultPosition={getWindowPosition(0)}
                />
            }
            {
                finder && <FinderWindow 
                 id={7}
                zIndex={zOrder.indexOf(7) + 1}
                bringToFront={bringToFront}
                defaultPosition={getWindowPosition(2)}
                />
            }
        </Stack>

    )
}
export default MacOSWall