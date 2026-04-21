import { Stack } from "@mui/material"
import SideBar from "./SideBar"
import SideBarDisplay from "./SideBarDisplay"
import AboutMe from "./AboutMe"
import Footer from "./Footer"
const VSCode =()=>{
    return(
        <Stack>
            <Stack sx={{display:"flex",}} direction={'row'}>
                <SideBar />
                <SideBarDisplay />
                <AboutMe />
            </Stack>
            <Footer />
        </Stack>
    )
}
export default VSCode