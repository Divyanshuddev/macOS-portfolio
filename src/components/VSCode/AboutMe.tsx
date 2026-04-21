import { Stack } from "@mui/material"
import VSCodePanelNav from "./VSCodePanelNav"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

const AboutMe =()=>{
    return(
        <Stack>
            <VSCodePanelNav />
            <Home />
            <About />
            <Projects />
            <Contact />
        </Stack>
    )
}
export default AboutMe