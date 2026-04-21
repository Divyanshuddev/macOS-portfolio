import { Button, Stack, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import * as motion from "motion/react-client"
import { setCurrentTab } from "../../features/WindowSlice/WindowSlice";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Home=()=>{
    const dispatch=useDispatch()
    const currentTab = useSelector((state:RootState)=>state.window.currentTab)
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles={
    root:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#1f1f1f",
        width:isMaximized ? "53vw" : "83vw",
        height:isMaximized?"66vh":"83vh",
    },
    divyanshu:{
        fontSize:45,
        fontFamily:"JetBrains Mono",
        color:"whitesmoke",
        fontWeight:"bolder"
    },
    software:{
        fontSize:20,
        fontFamily:"JetBrains Mono",
        color:"#ff7865",
    },
    details:{
        fontSize:16,
        fontFamily:"JetBrains Mono",
        color:"#ffffff8c",
        width:"60%",
        textAlign:"center"
    },
    viewProjectButton:{
        backgroundColor:"#ff7865",
        textTransform:"capitalize",
        fontFamily:"JetBrains Mono",
    },
    learnMoreButton:{
        backgroundColor:"#2f3136",
        textTransform:"capitalize",
        fontFamily:"JetBrains Mono",
    },
    githubButton:{
        color:"gray",
        textTransform:"capitalize",
        fontFamily:"JetBrains Mono",
        "&:hover":{
            color:"white"
        }
    }
}
    return(
        <Stack style={{display:currentTab==="home.tsx"?"":"none"}} sx={styles.root}>
            <Stack sx={{alignItems:"center"}} spacing={5}>
                <svg stroke="#ff7865" fill="#ff7865" stroke-width="0" viewBox="0 0 16 16" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"></path></svg>
                <Typography sx={styles.divyanshu}>Divyanshu Sharma</Typography>
                <Typography sx={styles.software}>Software Developer</Typography>
                <Typography sx={styles.details}>I craft high-performance applications across web and mobile. Focused on TypeScript, React, and Python, integrating AI/ML into clean, efficient systems.</Typography>
                <Stack sx={{display:"flex",alignItems:"center"}} direction={'row'} spacing={3}>
                    <motion.div
                    whileHover={{y:-4,boxShadow:"1px 1px 20px #ff7865"}}
                    transition={{stiffness: 100 }}
                    >
                    <Button variant="contained" sx={styles.viewProjectButton} endIcon={<EastRoundedIcon />} onClick={()=>dispatch(setCurrentTab('project.js'))}>View Project</Button>
                    </motion.div>
                     <motion.div
                    whileHover={{y:-4,boxShadow:"1px 1px 30px #2f3136"}}
                    transition={{stiffness: 100 }}
                    >
                    <Button variant="contained" sx={styles.learnMoreButton} onClick={()=>dispatch(setCurrentTab('about.html'))}>Learn More</Button>
                    </motion.div>
                </Stack>
                    <Stack  sx={{display:"flex",alignItems:"center"}} direction={'row'} spacing={3}>
                        <Button variant="text" size="small" startIcon={<GitHubIcon />} sx={styles.githubButton}
                        onClick={()=>window.open('https://github.com/Divyanshuddev','_blank')}
                        >Github</Button>
                        <Typography sx={{color:"gray"}}>/</Typography>
                         <Button variant="text" size="small" startIcon={<EmailOutlinedIcon />} sx={styles.githubButton}
                         onClick={()=>dispatch(setCurrentTab('contact.css'))}
                         >Contact</Button>
                    </Stack>
            </Stack>
        </Stack>
    )
}
export default Home