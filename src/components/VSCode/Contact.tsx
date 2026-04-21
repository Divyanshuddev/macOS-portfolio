import { Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"

const data = [
    {
        title: "email",
        link: "diyanshu311098@gmail.com"
    },
    {
        title: "github",
        link: "Divyanshuddev"
    },
    {
        title: "linkedin",
        link: "divyanshu-sharma-a977011b4"
    },
    {
        title: "whatsapp",
        link: "+918303006600"
    },
]
const Contact = () => {
    const currentTab = useSelector((state: RootState) => state.window.currentTab)
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
        contact: {
            fontFamily: "JetBrains Mono",
            fontSize: 35,
            color: "#ff7865"
        },
        details: {
            fontFamily: "JetBrains Mono",
            fontSize: 18,
            color: "#ffffff8c"
        },
        contactBox: {
            width: "80%",
            padding: 2,
            backgroundColor: "#1f2428",
            borderTop: "4px solid #ff7865"
        },
        links: {
            backgroundColor: "transparent",
            fontFamily: "JetBrains Mono",
            border: "none",
            fontSize:20,
            color: "#ff7865",
            "&:hover": {
                textDecoration: "underline",
                textDecorationColor: "#ff7865",
            },
           
        },
         title: {
                fontFamily: "JetBrains Mono",
                color: "white",
                fontSize: 20
            }
    }
    const handleLinks=(title:string)=>{
        switch(title){
             case 'github':
                    window.open('https://github.com/Divyanshuddev',"_blank")
                    return
                case 'linkedin':
                    window.open('https://www.linkedin.com/in/divyanshu-sharma-a977011b4/',"_blank")
                    return
                case 'whatsapp':
                    window.open('https://api.whatsapp.com/send/?phone=%2B918303006600&text&type=phone_number&app_absent=0',"_blank")
                    return
                default:
                    return
        }
    }
    return (
        <Stack style={{ display: currentTab === "contact.css" ? "" : "none" }} sx={styles.root}>
            <Stack sx={{ alignItems: "center" }} spacing={5}>
                <Typography sx={styles.contact}>Contact Me</Typography>
                <Stack sx={{ alignItems: "center" }}>
                    <Typography sx={styles.details}>Feel free to reach out to me through any of the social</Typography>
                    <Typography sx={styles.details}>platforms below. I'm always open to new opportunities and</Typography>
                    <Typography sx={styles.details}>connections.</Typography>
                </Stack>
                <Stack sx={styles.contactBox}>
                    <Typography><a style={{ color: "#ff7865", fontSize: 20, fontFamily: "JetBrains Mono", }}>.socials</a> <a style={{ color: "white", fontSize: 20, fontFamily: "JetBrains Mono", }}>{"{"}</a></Typography>
                    <Stack sx={{boxSizing:"border-box",paddingLeft:3}}>
                        {
                            data.map((value, index) => {
                                return (
                                    <Typography key={index} sx={styles.title}>{value.title} : <Typography component={'button'} sx={styles.links} onClick={()=>handleLinks(value.title)}>{value.link}</Typography></Typography>
                                )
                            })
                        }

                    </Stack>
                    <Typography><a style={{ color: "white", fontSize: 20, fontFamily: "JetBrains Mono", }}>{"}"}</a></Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
export default Contact