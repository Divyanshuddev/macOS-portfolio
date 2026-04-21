import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/Store"
import projectIcon1 from '../../assets/Projects/projectIcon1.png'
import projectIcon2 from '../../assets/Projects/projectIcon2.png'
import projectIcon3 from '../../assets/Projects/projectIcon3.png'
import projectIcon4 from '../../assets/Projects/projectIcon4.png'
import projectIcon5 from '../../assets/Projects/projectIcon5.png'
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const projectList = [
    {
        projectId: 1,
        title: "ShopSwift",
        projectIcon: projectIcon1,
        details: "Built a responsive and scalable e-commerce platform with product listing, filtering, cart, and checkout using React.js and Redux Toolkit. Developed secure backend APIs in Django REST Framework to manage users, products, and orders, including authentication and CRUD operations.",
        link: "https://e-commerce-app-beta-nine.vercel.app/",
    },
    {
        projectId: 2,
        title: "Airbnb Frontend Clone",
        projectIcon: projectIcon2,
        details: "Designed and implemented a pixel-perfect, responsive UI using React.js and Material-UI, replicating Airbnb’s layout and styling with TypeScript for type safety. Built dynamic pages and navigation using React Router, ensuring seamless client-side routing and enhanced user experience. Applied component reusability, responsive design principles, and clean architecture to improve scalability and maintainability across devices.",
        link: "https://airbnb-frontend-clone-3fw1.vercel.app/",
    },
    {
        projectId: 3,
        title: "Miro",
        projectIcon: projectIcon3,
        details: "Integrated Framer Motion to implement scroll-based animations and micro-interactions, enhancing user engagement and UX flow. Followed a modular component architecture, enabling code reusability, easy maintenance, and consistent styling across the UI.",
        link: "https://miro-app-coral.vercel.app/",
    },
    {
        projectId: 4,
        title: "Post Pilot",
        projectIcon: projectIcon4,
        details: "Implemented Material-UI theming and components for a sleek, accessible, and customizable user interface across all device sizes. Built a modular and scalable codebase using functional components and hooks, following best practices in component-driven architecture.",
        link: "https://post-pilot-app.vercel.app/",
    },
    {
        projectId: 5,
        title: "Hangman Game App",
        projectIcon: projectIcon5,
        details: "A fun and interactive Hangman Game app built with React.js, featuring multiple word categories, real-time guessing, and smooth animations. Designed with a modern, mobile-responsive UI and deployed on Vercel for seamless access across devices.",
        link: "https://hangman-game-app-lac.vercel.app/",
    },
]
const Projects = () => {
    const currentTab = useSelector((state: RootState) => state.window.currentTab)
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles = {
        root: {
            display: "flex",
            alignItems: "center !important",
            justifyContent: "center",
            backgroundColor: "#1f1f1f",
            width: isMaximized ? "53vw" : "83vw",
            height: isMaximized ? "66vh" : "83vh",
        },
       main:{
        "&:hover":{
            "& .serialBorder":{
                border:"1px solid #ff7865",
                

            },
            "& .text":{
                color:"#ff7865",
            }
        }
       },
        featured: {
            fontSize: 30,
            fontFamily: "JetBrains Mono",
            color: "whitesmoke",
            fontWeight: "bolder"
        },
        details: {
            fontSize: 16,
            fontFamily: "JetBrains Mono",
            color: "#ffffff8c",
        },
        serialBox: {
            width: 30,
            height: 30,
            border: "1px solid black",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center !important",
            justifyContent: "center",
            boxShadow: "1px 1px 2px black"
            // boxSizing:"border-box",
            // padding:1,

        },
        serialNumber: {
            fontFamily: "JetBrains Mono",
            color: "#ffffff8c",
            fontSize: 10
        },
        imageBox: {
            borderRadius: 2,
            border: "1px solid gray",
            padding: 0.6

        },
        image: {
            width: 25,
            height: 25
        },
        projectTitle: {
            fontSize: 20,
            fontFamily: "JetBrains Mono",
            color: "whitesmoke",
            fontWeight: "bolder"
        },
        projectDetails: {
            fontSize: 12,
            fontFamily: "JetBrains Mono",
            color: "#ffffff8c",
            width: "80%",
            boxSizing: "border-box",
            paddingLeft: 6
            // textAlign: "center"
        },
        button: {
            textTransform: "capitalize",
            fontFamily: "JetBrains Mono",
            fontSize: 13,
            boxSizing: "border-box",
            paddingLeft: 6,
            width:"fit-content",
            "&:hover":{
                backgroundColor:"transparent",
            }
        }

    }
    return (
        <Stack style={{ display: currentTab === "project.js" ? "" : "none" }} sx={styles.root}>
            <Stack spacing={isMaximized?3:6} sx={{ width: "100%", alignItems: "center" }}>
                <Stack>
                    <Typography sx={styles.featured}>Featured Work</Typography>
                    <Typography sx={styles.details}>A curated collection of projects I've built.</Typography>
                    <Typography sx={styles.details}>Each represents a unique challenge</Typography>
                    <Typography sx={styles.details}>and learning experience.</Typography>
                </Stack>
                <Grid container sx={{ width: "80%" }} rowSpacing={1} columnSpacing={1}>
                    {
                        projectList.map((value, index) => {
                            return (
                                <Grid size={6} key={index} >
                                    <Stack spacing={1} sx={styles.main}>
                                        <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={2}>
                                            <Stack sx={styles.serialBox} className="serialBorder">
                                                <Typography sx={styles.serialNumber} className="text">0{value.projectId}</Typography>
                                            </Stack>
                                            <Stack sx={{ display: "flex", alignItems: "center" }} direction={'row'} spacing={1}>
                                                <Box component={'img'} sx={styles.image} src={value.projectIcon} />
                                                <Typography sx={styles.projectTitle} className="text">{value.title}</Typography>
                                            </Stack>
                                        </Stack>
                                        <Typography sx={styles.projectDetails}>{value.details.slice(0, 80)}...</Typography>
                                        <Button className="text" onClick={() => window.open(value.link, "_blank")} sx={styles.button} endIcon={<EastRoundedIcon />}>View Project</Button>
                                    </Stack>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Stack>
        </Stack>
    )
}
export default Projects