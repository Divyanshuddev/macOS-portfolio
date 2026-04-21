import { Box, IconButton, Stack } from "@mui/material"
import myPhoto1 from '../../assets/MyPhoto/MyPhoto1.jpg'
import myPhoto2 from '../../assets/MyPhoto/MyPhoto2.jpg'
import myPhoto3 from '../../assets/MyPhoto/MyPhoto3.jpg'
import myPhoto4 from '../../assets/MyPhoto/MyPhoto4.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import { useState } from "react"
const myPhotosList = [
    myPhoto1, myPhoto2, myPhoto3, myPhoto4
]

const Photos=()=>{
    const isMaximized = useSelector((state:RootState)=>state.windowresize.isMaximized)
    const [currentImage,setCurrentImage]=useState<number>(0)
    const styles={
     root: {
            width: isMaximized ? "50vw" : "100vw",
            height: isMaximized ? "70vh" : "97vh",
            boxSizing: "border-box",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding:2
        },
        image: {
            width: 500,
            height: 500,
            objectFit: "contain"
        },
        iconButton: {
        background: 'rgba(255, 255, 255, 0.61)',
        borderRadius: "24px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        "-webkit-backdrop-filter": "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0)",
        padding: 1,
        }
}
    const handleBackward=()=>{
        if(currentImage===0){
            setCurrentImage(3)
        }
        else{
            setCurrentImage(currentImage-1)
        }
    }
    const handleForward=()=>{
        if(currentImage===3){
            setCurrentImage(0)
        }
        else{
            setCurrentImage(currentImage+1)
        }
    }
    return(
        <Stack sx={styles.root} direction={'row'}>
            <Stack sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}} direction={'row'}>
            <IconButton sx={styles.iconButton} onClick={()=>handleBackward()}>
                 <ArrowBackIosNewIcon  sx={{ color: "gray" }} fontSize="small" />
            </IconButton>
            <Box component={'img'} src={myPhotosList[currentImage]} sx={styles.image} />
            <IconButton sx={styles.iconButton} onClick={()=>handleForward()}>
                <ArrowForwardIosIcon  sx={{ color: "gray" }} fontSize="small" />
            </IconButton>
             </Stack>
        </Stack>
    )
}
export default Photos