import { Stack, Typography } from "@mui/material"

interface MenuBarPopoverListProps {
    list: string[]
}
const styles = {
    root: {
        boxSizing: "border-box",
        padding: 1.5,
        width: 200,
    },
    text: {
        fontSize: 13,
        color: "black"
    },
    button: {
        width: "100%",
        boxSizing: "border-box",
        padding: 0.5,
        paddingLeft: 1,
        borderRadius: 1,
        '&:hover': {
            backgroundColor: "#1976d2",
            cursor: "pointer",
            "& .text": {
                color: "white"
            }
        }
    }
}
const MenuBarPopoverList = ({ list }: MenuBarPopoverListProps) => {
    return (
        <Stack sx={styles.root} spacing={0.8}>
            {
                list.map((value, index) => {
                    return (
                        <Stack key={index} sx={styles.button}>
                            <Typography className="text" sx={styles.text} >{value}</Typography>
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}
export default MenuBarPopoverList