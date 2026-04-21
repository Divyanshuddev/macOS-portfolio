import { Box, Popover, Stack, Typography } from "@mui/material"
import vsCodeLogo from '../../assets/vscode_logo.png'
import { useState } from "react"
import PopoverList from "./PopoverList"
const menuBar = [
    {
        name: "File",
        items: [
            "New File",
            "Open File",
            "Open Folder",
            "Divider",
            "Save",
            "Save As",
            "Auto Save",
            "Preferences",
            "Exit"
        ]
    },
    {
        name: "Edit",
        items: [
            "Undo",
            "Redo",
            "Cut",
            "Copy",
            "Paste",
            "Find",
            "Replace"
        ]
    },
    {
        name: "Selection",
        items: [
            "Select All",
            "Expand Selection",
            "Shrink Selection",
            "Copy Line Up",
            "Move Line Down"
        ]
    },
    {
        name: "View",
        items: [
            "Appearance",
            "Explorer",
            "Search",
            "Source Control",
            "Run",
            "Extensions"
        ]
    },
    {
        name: "Go",
        items: [
            "Back",
            "Forward",
            "Go to File",
            "Go to Symbol",
            "Go to Line"
        ]
    },
    {
        name: "Run",
        items: [
            "Start Debugging",
            "Run Without Debugging",
            "Stop",
            "Restart"
        ]
    },
    {
        name: "Terminal",
        items: [
            "New Terminal",
            "Split Terminal",
            "Run Task",
            "Configure Tasks"
        ]
    },
    {
        name: "Help",
        items: [
            "Welcome",
            "Documentation",
            "Release Notes",
            "Keyboard Shortcuts",
            "About"
        ]
    }
]
const styles = {
    root: {
        display: "flex",
        alignItems: "center",
        backgroundColor:"#1f1f1f",
        height:"4vh"
    },
    vsCodeLogo: {
        width: 25,
        height: 25
    },
    menuBarButton: {
        backgroundColor: "transparent",
        border: "none",
        borderRadius: 1,
        '&:hover': {
            backgroundColor: "#575757"
        }
    },
    text: {
        color: "#bbb5b5",
        fontSize: 12
    }
}
const FileBar = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [list, setList] = useState<string[]>([])
    const handleClick = (event: React.MouseEvent<HTMLElement>, list: string[]) => {
        setAnchorEl(prev => (prev ? null : event.currentTarget))
        setList(list)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl)
    return (
        <Stack direction={'row'} spacing={1} sx={styles.root}>
            <Box component={'img'} src={vsCodeLogo} sx={styles.vsCodeLogo} />
            {
                menuBar.map((value, index) => {
                    return (
                        <Stack component={'button'} key={index} sx={styles.menuBarButton} aria-haspopup="true"
                            onClick={(e) => handleClick(e, value.items)}>
                            <Typography sx={styles.text}>{value.name}</Typography>

                        </Stack>
                    )
                })
            }
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                elevation={1}
                disableRestoreFocus
                slotProps={{
                    paper: {
                        sx: {
                            borderRadius: 0
                        }
                    }
                }}

            >
                <PopoverList list={list} />
            </Popover>
        </Stack>
    )
}
export default FileBar