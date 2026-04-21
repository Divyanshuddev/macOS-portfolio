import { Stack } from "@mui/material"
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { RunAndDebugIcon } from "./RunAndDebugIcon";
import { SourceControlIcon } from "./SourceControlIcon";
import type { RootState } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTab } from "../../features/WindowSlice/WindowSlice";
const SideBar = () => {
    const dispatch=useDispatch();
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles = {
        root: {
            width: "3vw",
            height: isMaximized ? "71vh" : "88vh",
            backgroundColor: "#181818",
            display: "flex",
            justifyContent: "space-between",
            boxSizing: "border-box",
            paddingTop: 1,
            paddingBottom: 1,
            borderRight: "0.1px solid #242424"
        },
        icon: {
            color: "gray"
        },
        iconButton: {
            backgroundColor: "transparent",
            border: "none",
            padding: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "3px solid transparent",
            "&:hover": {
                "& .icon": {
                    color: "white"
                }
            }
        },
        selectedIconButton: {
            backgroundColor: "transparent",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 1,
            borderLeft: "3px solid blue",
            "& > :first-child": {
                color: "white"
            }
        }
    }
    const data = [
        {
            title: "Explorer",
            icon: <FileCopyOutlinedIcon className="icon" sx={styles.icon} />
        },
        {
            title: "Search",
            icon: <SearchOutlinedIcon className="icon" sx={styles.icon} />
        },
        {
            title: "Source Control",
            icon: <SourceControlIcon className="icon" sx={styles.icon} />
        },
        {
            title: "Run and Debug",
            icon: <RunAndDebugIcon className="icon" sx={styles.icon} />
        },
        {
            title: "Extensions",
            icon: <WidgetsIcon className="icon" sx={styles.icon} />
        },
        {
            title: "Accounts",
            icon: <AccountCircleOutlinedIcon className="icon" sx={styles.icon} />,
        },
        {
            title: "Manage",
            icon: <SettingsOutlinedIcon className="icon" sx={styles.icon} />,
        }

    ]
    return (
        <Stack sx={styles.root}>
            <Stack spacing={1}>
                {
                    data.slice(0, 5).map((value, index) => {
                        return (
                            <Stack component={'button'} key={index} sx={styles.iconButton} onClick={()=>dispatch(setCurrentTab(value.title))}>
                                {value.icon}
                            </Stack>
                        )
                    })
                }
            </Stack>
            <Stack spacing={1}>
                {
                    data.slice(5, 7).map((value, index) => {
                        return (
                            <Stack component={'button'} key={index} sx={styles.iconButton}>
                                {value.icon}
                            </Stack>
                        )
                    })
                }
            </Stack>
        </Stack>
    )
}
export default SideBar