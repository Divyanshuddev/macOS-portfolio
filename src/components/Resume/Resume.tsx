import { Box, Stack } from "@mui/material"
import { useState } from "react";
import type { RootState } from "../../store/Store";
import { useSelector } from "react-redux";
import resume from "../../assets//Divyanshu_Sharma_CV.jpg"
const Resume = () => {
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
  const [scale, setScale] = useState(1);
  const handleClick = () => {
    setScale((prev) => (prev === 1 ? 2 : 1));
  };
  const styles = {
    container: {
      width: "100%",
      overflow: "auto",
      boxSizing: "border-box",
      padding: 5,
      backgroundColor:"#2c2c2c",
      height: isMaximized?"70vh":"97vh",
      "&::-webkit-scrollbar": {
        width: "17px"
      },
      "&::-webkit-scrollbar-corner": {
        background: "#797575"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#817878",
        backgroundSize: "7px",
        border: " 1px solid #2c2c2c",
        borderRadius: "2px",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "white"
      },
      "&::-webkit-scrollbar-button: vertical:decrement": {
        border: "1.5px solid #2c2c2c"
      },
      "&-webkit-scrollbar-button: vertical:increment ": {
        border: "1.5px solid white"
      }
    },
    resumePageStyle: {
      height: 500,
      transition: "transform 0.25s ease",
      transformOrigin: "top center",
      display: "block"
    },
  };
    return (
        <Stack
           style={{alignItems:"center"}}
            sx={styles.container}
        >
            <Box
                component="img"
                src={resume}
                onClick={handleClick}
                sx={{
                    ...styles.resumePageStyle,
                    transform: `scale(${scale})`,
                    cursor: scale === 1 ? "zoom-in" : "zoom-out",
                }}
            />
        </Stack>

    )
}
export default Resume