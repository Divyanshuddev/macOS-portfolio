import { Stack } from "@mui/material"
import finderIcon from '../../assets/finder.png'
import imageViewerIcon from '../../assets/image-viewer.webp'
import musicIcon from '../../assets/music.png'
import vscodeIcon from '../../assets/vscode.png'
import videoPlayerIcon from '../../assets/video-player.webp'
import resumeIcon from '../../assets/resume.webp'
import terminalIcon from '../../assets/terminal.png'
import * as motion from "motion/react-client"
import { useDispatch } from "react-redux"
import { openWindow } from "../../features/WindowSlice/WindowSlice"

const data = [
    {
        title: "Finder",
        icon: finderIcon,
    },
    {
        title: "Photos",
        icon: imageViewerIcon,
    },
    {
        title: "Music",
        icon: musicIcon,
    },
    {
        title: "VS Code",
        icon: vscodeIcon,
    },
    {
        title: "Terminal",
        icon: terminalIcon,
    },
    {
        title: "Videos",
        icon: videoPlayerIcon,
    },
    {
        title: "Resume",
        icon: resumeIcon,
    },
]
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
    }

}
const MacOSTaskBar = () => {
    const dispatch = useDispatch()
    return (
        <Stack sx={styles.root} direction={'row'}>
            {
                data.map((value, index) => {
                    return (
                        <Stack key={index} sx={{ background: "transparent", border: "none", }} component={'button'} onClick={() => dispatch(openWindow(value.title))}>
                            <motion.img
                                whileHover={{ scale: 2, y: -18 }}
                                whileTap={{ scale: 0.95 }}
                                src={value.icon}
                                style={{ width: 50, height: 50 }} />
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}
export default MacOSTaskBar