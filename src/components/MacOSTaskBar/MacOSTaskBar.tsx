import { Stack } from "@mui/material"
import finderIcon from '../../assets/finder.png'
import imageViewerIcon from '../../assets/image-viewer.webp'
import musicIcon from '../../assets/music.png'
import vscodeIcon from '../../assets/vscode.png'
import videoPlayerIcon from '../../assets/video-player.webp'
import resumeIcon from '../../assets/resume.webp'
import terminalIcon from '../../assets/terminal.png'
import * as motion from "motion/react-client"
import { useDispatch, useSelector } from "react-redux"
import { offminimizedWindow, openWindow, setFinder } from "../../features/WindowSlice/WindowSlice"
import type { RootState } from "../../store/Store"

const styles = {
    root: {
        position: "absolute",
        bottom: 8,
        background: 'rgba(255, 255, 255, 0.31)',
        borderRadius: "24px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        "-webkit-backdrop-filter": "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        width: 500,
        height: 70,
        boxSizing: "border-box",
        alignSelf: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2
    },
    image: {
        width: 50,
        height: 50,
        objectFit: "contain"
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        alignSelf: "center"
    }

}
const MacOSTaskBar = () => {
    const dispatch = useDispatch()
    const mphotosWindow = useSelector((state: RootState) => state.window.mphotosWindow)
    const mmusicWindow = useSelector((state: RootState) => state.window.mmusicWindow)
    const mterminalWindow = useSelector((state: RootState) => state.window.mterminalWindow)
    const mvideosWindow = useSelector((state: RootState) => state.window.mvideoWindow)
    const mresumeWindow = useSelector((state: RootState) => state.window.mresumeWindow)
    const mvscodeWindow = useSelector((state: RootState) => state.window.mvscodeWindow)
    const handleWindow = (title: string) => {
        switch (title) {
            case 'Photos':
                if (mphotosWindow) {
                    dispatch(offminimizedWindow(title))
                }
                else {
                    dispatch(openWindow('Photos'))
                }
                return
            case 'Music':
                if (mmusicWindow) {
                    dispatch(offminimizedWindow(title))
                }
                else {
                    dispatch(openWindow('Music'))
                }
                return
            case 'VS Code':
                if (mvscodeWindow) {
                    dispatch(offminimizedWindow(title))
                }
                else {
                    dispatch(openWindow('VS Code'))
                }
                return
            case 'Terminal':
                if (mterminalWindow) {
                    dispatch(offminimizedWindow(title))
                }
                else {
                    dispatch(openWindow('Terminal'))
                }
                return
            case 'Resume':
                if (mresumeWindow) {
                    dispatch(offminimizedWindow(title))
                }
                else {
                    dispatch(openWindow('Resume'))
                }
                return
            case 'Videos':
                if (mvideosWindow) {
                    dispatch(offminimizedWindow(title))
                }
                else {
                    dispatch(openWindow('Videos'))
                }
                return
            case 'Finder':
                dispatch(setFinder())
                return
            default:
                return
        }
    }
    return (
        <Stack sx={styles.root} direction={'row'}>
            <Stack sx={{ background: "transparent", border: "none", }} component={'button'} onClick={() => handleWindow('Finder')}>
                <motion.img
                    whileHover={{ scale: 2, y: -18 }}
                    whileTap={{ scale: 0.95 }}
                    src={finderIcon}
                    style={{ width: 50, height: 50 }} />
                <Stack sx={styles.dot} style={{backgroundColor:"transparent"}} />
            </Stack>
             <Stack sx={{ background: "transparent", border: "none", }} component={'button'} onClick={() => handleWindow('Photos')}>
                <motion.img
                    whileHover={{ scale: 2, y: -18 }}
                    whileTap={{ scale: 0.95 }}
                    src={imageViewerIcon}
                    style={{ width: 50, height: 50 }} />
                <Stack sx={styles.dot} style={{backgroundColor:mphotosWindow?"white":"transparent"}} />
            </Stack>
             <Stack sx={{ background: "transparent", border: "none", }} component={'button'} onClick={() => handleWindow('Music')}>
                <motion.img
                    whileHover={{ scale: 2, y: -18 }}
                    whileTap={{ scale: 0.95 }}
                    src={musicIcon }
                    style={{ width: 50, height: 50 }} />
                <Stack sx={styles.dot} style={{backgroundColor:mmusicWindow?"white":"transparent"}} />
            </Stack>
             <Stack sx={{ background: "transparent", border: "none", }} component={'button'} onClick={() => handleWindow('VS Code')}>
                <motion.img
                    whileHover={{ scale: 2, y: -18 }}
                    whileTap={{ scale: 0.95 }}
                    src={vscodeIcon}
                    style={{ width: 50, height: 50 }} />
                <Stack sx={styles.dot} style={{backgroundColor:mvscodeWindow?"white":"transparent"}} />
            </Stack>
             <Stack sx={{ background: "transparent", border: "none", }} component={'button'} onClick={() => handleWindow('Terminal')}>
                <motion.img
                    whileHover={{ scale: 2, y: -18 }}
                    whileTap={{ scale: 0.95 }}
                    src={terminalIcon}
                    style={{ width: 50, height: 50 }} />
                <Stack sx={styles.dot} style={{backgroundColor:mterminalWindow?"white":"transparent"}} />
            </Stack>
             <Stack sx={{ background: "transparent", border: "none", }} component={'button'} onClick={() => handleWindow('Videos')}>
                <motion.img
                    whileHover={{ scale: 2, y: -18 }}
                    whileTap={{ scale: 0.95 }}
                    src={videoPlayerIcon}
                    style={{ width: 50, height: 50 }} />
                <Stack sx={styles.dot} style={{backgroundColor:mvideosWindow?"white":"transparent"}} />
            </Stack>
             <Stack sx={{ background: "transparent", border: "none", }} component={'button'} onClick={() => handleWindow('Resume')}>
                <motion.img
                    whileHover={{ scale: 2, y: -18 }}
                    whileTap={{ scale: 0.95 }}
                    src={resumeIcon}
                    style={{ width: 50, height: 50 }} />
                <Stack sx={styles.dot} style={{backgroundColor:mresumeWindow?"white":"transparent"}} />
            </Stack>
        </Stack>
    )
}
export default MacOSTaskBar