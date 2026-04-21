import { Divider, Grid, IconButton, Stack, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { setCurrentTab } from "../../features/WindowSlice/WindowSlice";
const skills=[
    {
        title:"Languages",
        items:[
            "Python","C/C++","Typscript","Javascipt"
        ]
    },
    {
        title:"Frontend",
        items:[
            "React","React Native","Material UI",
        ]
    },
    {
        title:"Tools",
        items:[
            "Git","VS Code","Postman"
        ]
    },
    {
        title:"Backend",
        items:[
            "Fast API","Mongo DB","Postgres SQL",
        ]
    },
]
const About = () => {
    const currentTab = useSelector((state: RootState) => state.window.currentTab)
    const dispatch = useDispatch()
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles = {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1f1f1f",
            width: isMaximized ? "53vw" : "83vw",
            height: isMaximized ? "66vh" : "83vh",
        },
        divyanshu: {
            fontSize: 30,
            fontFamily: "JetBrains Mono",
            color: "whitesmoke",
            fontWeight: "bolder"
        },
        software: {
            fontSize: 18,
            fontFamily: "JetBrains Mono",
            color: "#fff9",
        },
        dot: {
            backgroundColor: "#67C090",
            width: 10,
            height: 10,
            borderRadius: "50%"
        },
        loaction: {
            fontSize: 15,
            fontFamily: "JetBrains Mono",
            color: "#fff6",
        },
        iconButton: {
            border: "1px solid black",
            borderRadius: "10%",
            backgroundColor: "#26292e",
            "&:hover": {
                border: "1px solid #ff7865",
                "& .icon": {
                    color: "#ff7865"
                }
            }
        },
        headingText:{
            fontSize: 22,
            fontFamily: "JetBrains Mono",
            color: "whitesmoke",
            fontWeight: "bolder"
        },
        aboutDetails:{
            color:"#ffffffb3",
            fontFamily: "JetBrains Mono",
            fontSize:15,
            boxSizing:"border-box",
            paddingLeft:3
        },
        skillBox:{
            backgroundColor:"#282c32",
            boxSizing:"border-box",
            border:"1px solid black",
            borderRadius:2,
            padding:1,
            height:100
        },
        language:{
            color:"#6a6e74",
            fontFamily: "JetBrains Mono",
            fontSize:14
        },
        skillsStack:{
            boxSizing:"border-box",
            padding:1,
            borderRadius:2,
            backgroundColor:"#33373c",
            border:"1px solid gray",
            "&: hover":{
                border:"1px solid #ff7865",
                "& .skills":{
                    color:"#ff7865"
                }
            }
        }

    }
    return (
        <Stack style={{ display: currentTab === "about.html" ? "" : "none" }} sx={styles.root}>
            <Stack sx={{ width: isMaximized ? 700 : 900 }} spacing={isMaximized?2:6}>
                <Stack sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", }} direction={'row'}>
                    <Stack spacing={0.8}>
                        <Typography sx={styles.divyanshu}>Divyanshu Sharma</Typography>
                        <Typography sx={styles.software}>Software Developer</Typography>
                        <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={1}>
                            <Stack sx={styles.dot}></Stack>
                            <Typography sx={styles.loaction}>India</Typography>
                        </Stack>
                    </Stack>
                    <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={1}>
                        <IconButton sx={styles.iconButton} onClick={() => window.open('https://github.com/Divyanshuddev', '_blank')}>
                            <GitHubIcon className="icon" sx={{ color: "gray" }} />
                        </IconButton>
                        <IconButton sx={styles.iconButton} onClick={() => dispatch(setCurrentTab('contact.css'))}>
                            <EmailOutlinedIcon className="icon" sx={{ color: "gray" }} />
                        </IconButton>
                    </Stack>
                </Stack>
                <Divider sx={{backgroundColor:"gray"}} />
                <Stack spacing={1}>
                    <Typography sx={styles.headingText}><a style={{fontSize:12,color:"#ff7865"}}>01</a> About</Typography>
                    <Typography sx={styles.aboutDetails}>I’m a software engineer passionate about crafting beautiful, high-performance web and mobile experiences. While I specialize in frontend development, I enjoy working across the stack with FastAPI, MongoDB, and modern backend systems, integrating AI/ML to build intelligent, full-stack applications.</Typography>
                </Stack>
                 <Divider sx={{backgroundColor:"gray"}} />
                  <Stack spacing={1}>
                    <Typography sx={styles.headingText}><a style={{fontSize:12,color:"#ff7865"}}>02</a> Skills</Typography>
                    <Grid container rowSpacing={1} columnSpacing={1}>
                        {
                            skills.map((value,index)=>{
                                return(
                                    <Grid key={index} size={6}>
                                        <Stack sx={styles.skillBox} spacing={1}>
                                        <Typography sx={styles.language}>{value.title}</Typography>
                                        <Stack sx={{display:"flex", alignItems:"center",flexWrap:"wrap",rowGap:1}} direction={'row'} spacing={1} >
                                            {
                                                value.items.map((value,index)=>{
                                                    return(
                                                        <Stack key={index} sx={styles.skillsStack}>
                                                            <Typography className="skills" sx={{color:"whitesmoke",fontSize:12}}>{value}</Typography>
                                                        </Stack>
                                                    )
                                                })
                                            }
                                        </Stack>
                                        </Stack>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default About