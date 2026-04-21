import { Box, IconButton, Stack } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import musicImg1 from '../../assets/Music/music1.png'
import musicImg2 from '../../assets/Music/music2.png'
import musicImg3 from '../../assets/Music/music3.png'
import musicImg4 from '../../assets/Music/music4.png'
import music1 from '../../assets/Music/music01.mp3'
import music2 from '../../assets/Music/music02.mp3'
import music3 from '../../assets/Music/music03.mp3'
import music4 from '../../assets/Music/music04.mp3'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import NotStartedIcon from '@mui/icons-material/NotStarted';

import { useRef, useState } from "react"
const musicData = [
    {
        image: musicImg1,
        music: music1
    },
    {
        image: musicImg2,
        music: music2
    },
    {
        image: musicImg3,
        music: music3
    },
    {
        image: musicImg4,
        music: music4
    },
]

const Music = () => {
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const [currentMusic,setCurrentMusic]=useState<number>(0)
      const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
     const handleToggle = () => {
        if (isPlaying) {
            audioRef?.current?.pause();
        } else {
            audioRef?.current?.play();
        }
        setIsPlaying(!isPlaying);
    };
    const styles = {
        root: {
            background: 'rgba(255, 255, 255, 0.31)',
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            "-webkit-backdrop-filter": "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            width: isMaximized ? "20vw" : "100vw",
            height: isMaximized ? "50vh" : "97vh",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            paddingTop: 5,
        },
         image: {
            width: 250,
            height: 250,
        },
         icon: {
            width: 50,
            height: 50,
            color: "white"
        }
    }
     const handleBackward=()=>{
        if(currentMusic===0){
            setCurrentMusic(3)
        }
        else{
            setCurrentMusic(currentMusic-1)
        }
    }
    const handleForward=()=>{
        if(currentMusic===3){
            setCurrentMusic(0)
        }
        else{
            setCurrentMusic(currentMusic+1)
        }
    }
    return (
        <Stack sx={styles.root} spacing={5}>
             <Box component={'img'} src={musicData[currentMusic].image} sx={styles.image} />
                <audio ref={audioRef} src={musicData[currentMusic].music} autoPlay />
                <Stack direction={'row'} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton onClick={() => handleBackward()}>
                        <SkipPreviousIcon sx={styles.icon} />
                    </IconButton>
                    <IconButton onClick={() => handleToggle()} >
                        <NotStartedIcon sx={styles.icon} />
                    </IconButton>
                    <IconButton onClick={() => handleForward()}>
                        <SkipNextIcon sx={styles.icon} />
                    </IconButton>
                </Stack>
        </Stack>
    )
}
export default Music