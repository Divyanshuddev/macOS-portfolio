import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import * as motion from "motion/react-client";
import { useDispatch } from "react-redux";
import { closeWindow, minimizedWindow } from "../../features/WindowSlice/WindowSlice";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
const MotionDiv = motion.div;
import downloadIcon from "../../assets/downloadResume.png"

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
  },
  closeOpenBar: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  button: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    padding: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none"
  },
  icon: {
    width: 11,
    height: 11,
    boxSizing: "border-box"
  },
};

interface HeaderProps {
  toggleResize: () => void;
}
const Header = ({ toggleResize }: HeaderProps) => {
  const dispatch = useDispatch()
  return (
    <Stack sx={styles.root} direction="row">
      <Stack
        sx={styles.closeOpenBar}
        direction="row"
        spacing={1}
        component={motion.div}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <Stack component={'button'} sx={{ ...styles.button, backgroundColor: "#ff5f57" }} onClick={() => dispatch(closeWindow('Resume'))}>
          <MotionDiv
            variants={{
              rest: { opacity: 0, scale: 0.5, y: 0 },
              hover: { opacity: 1, scale: 1, y: -1 },
            }}
            transition={{ duration: 0.15 }}
          >
            <CloseRoundedIcon sx={styles.icon} style={{ paddingTop: 2.5 }} />
          </MotionDiv>
        </Stack>
        <Stack component={'button'} sx={{ ...styles.button, backgroundColor: "#febc2e" }} onClick={()=>dispatch(minimizedWindow('Resume'))}>
          <MotionDiv
            variants={{
              rest: { opacity: 0, scale: 0.5 },
              hover: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.15 }}
          >
            <MinimizeIcon sx={styles.icon} />
          </MotionDiv>
        </Stack>
        <Stack component={'button'}
          sx={{ ...styles.button, backgroundColor: "#28c840" }}
          onClick={toggleResize}
        >
          <MotionDiv
            variants={{
              rest: { opacity: 0, scale: 0.5 },
              hover: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.15 }}
          >
            <OpenInFullRoundedIcon sx={styles.icon} />
          </MotionDiv>
        </Stack>
      </Stack>
      <Typography>Resume</Typography>
      <Tooltip title={"Download Resume"}>
        <IconButton onClick={()=> window.open('https://drive.google.com/file/d/1DHnYxWIXCfEaSc4k-QlTQpowC01FokBa/view?usp=sharing','_blank')}>
          <Box component={'img'} src={downloadIcon} sx={{width:20,height:20}} />
        </IconButton>
        </Tooltip>
    </Stack>
  );
};

export default Header;