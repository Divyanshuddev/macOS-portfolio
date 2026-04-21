import { Box, IconButton, Stack } from "@mui/material"
import video1 from '../../assets/Videos/Video1.mp4'
import video2 from '../../assets/Videos/Video2.mp4'
import video3 from '../../assets/Videos/Video3.mp4'
import video4 from '../../assets/Videos/Video4.mp4'
import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const data = [video1, video2, video3, video4]
const Videos =()=>{
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const [currentVideo,setCurrentVideo]=useState<number>(0)
    const [playPauseVideo,setPlayPauseVideo]=useState<boolean>(true)
    const styles={
        root:{
            width:"100%",
            height:isMaximized?"70vh":"97vh",
            backgroundColor:"transparent"
        },
        controllPanel:{
        backgroundColor:"#1c1d1a",
        width:"100%",
        height:"4vh",
        }
    }
    const videoRef = useRef<HTMLVideoElement | null>(null);
  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlayPauseVideo(true)
    } else {
      video.pause();
       console.log(video);
       setPlayPauseVideo(false)
    }
    
  };
   const handleBackward=()=>{
        if(currentVideo===0){
            setCurrentVideo(3)
        }
        else{
            setCurrentVideo(currentVideo-1)
        }
    }
    const handleForward=()=>{
        if(currentVideo===3){
            setCurrentVideo(0)
        }
        else{
            setCurrentVideo(currentVideo+1)
        }
    }
    return(
         <Stack sx={styles.root}>
            <Box
          component="video"
          key={data[currentVideo]}
          ref={videoRef}
          autoPlay
          sx={{
            width: "100%",
            boxShadow: 3,
            bgcolor: "black",
           height:isMaximized?"64vh":"91vh"
          }}
        >
          <source src={data[currentVideo]} type="video/mp4" />
        </Box>
        <Stack sx={styles.controllPanel}>
            <Stack sx={{ display: "flex", alignItems: "center" ,alignSelf:"center"}} direction={'row'} spacing={1}>
                <IconButton  onClick={() => handleBackward()}>
                    <SkipPreviousIcon fontSize="small" sx={{color:"white"}} />
                </IconButton>
                <IconButton onClick={()=>handleToggle()}>
                    {
                    playPauseVideo?(
                        <PauseIcon fontSize="small" sx={{color:"white"}} />
                    ):(
                        <PlayArrowIcon fontSize="small" sx={{color:"white"}} />
                    )
                }
                </IconButton>
                <IconButton  onClick={() => handleForward()}>
                    <SkipNextIcon fontSize="small" sx={{color:"white"}} />
                </IconButton>
            </Stack>
        </Stack>
        </Stack>
    )
}
export default Videos