import { Box, Button, Popover, Stack } from "@mui/material"
import appleWhiteIcon from '../../assets/apple-white-logo.png'
import { useState } from "react"
import MenuBarPopoverList from "./MenuBarPopoverList"
const menuBar = [
    {
        "label": <Box component={'img'} src={appleWhiteIcon} sx={{ width: 20, height: 20 }} />,
        "items": [
            "About This Mac",
            "System Settings",
            "App Store",
            "Recent Items",
            "Force Quit",
            "Sleep",
            "Restart",
            "Shut Down",
            "Lock Screen",
            "Log Out"
        ]
    },
    {
        "label": "Finder",
        "items": [
            "About Finder",
            "Settings",
            "Empty Trash",
            "Services",
            "Hide Finder",
            "Hide Others",
            "Show All"
        ]
    },
    {
        "label": "File",
        "items": [
            "New Finder Window",
            "New Folder",
            "New Smart Folder",
            "Open",
            "Open With",
            "Close Window",
            "Get Info",
            "Rename",
            "Move to Trash"
        ]
    },
    {
        "label": "Edit",
        "items": [
            "Undo",
            "Redo",
            "Cut",
            "Copy",
            "Paste",
            "Select All",
            "Find",
            "Start Dictation",
            "Emoji & Symbols"
        ]
    },
    {
        "label": "View",
        "items": [
            "as Icons",
            "as List",
            "as Columns",
            "as Gallery",
            "Use Stacks",
            "Sort By",
            "Show View Options",
            "Show Preview"
        ]
    },
    {
        "label": "Go",
        "items": [
            "Back",
            "Forward",
            "Enclosing Folder",
            "All My Files",
            "Documents",
            "Downloads",
            "Applications",
            "Utilities",
            "Home",
            "Computer",
            "Network",
            "Go to Folder"
        ]
    },
    {
        "label": "Window",
        "items": [
            "Minimize",
            "Zoom",
            "Bring All to Front",
            "Cycle Through Windows"
        ]
    },
    {
        "label": "Help",
        "items": [
            "macOS Help",
            "Search"
        ]
    }
]
const styles = {
    root: {
        display: "flex",
        alignItems: "center"
    },
    button: {
        textTransform: "capitalize",
        color: "white",
        opacity: 1,
        zIndex: 100
    }
}
const MacOSMenuBar = () => {
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
        <Stack direction={'row'} sx={styles.root}>
            {
                menuBar.map((value, index) => {
                    return (
                        <Button key={index} size="small" sx={styles.button} aria-haspopup="true" onClick={(e) => handleClick(e, value.items)}>
                            {value.label}
                        </Button>
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
                            background: 'rgba(255, 255, 255, 0.31)',
                            borderRadius: "10px",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            backdropFilter: "blur(5px)",
                            "-webkit-backdrop-filter": "blur(5px)",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                        }
                    }
                }}

            >
                <MenuBarPopoverList list={list} />
            </Popover>
        </Stack>
    )
}
export default MacOSMenuBar