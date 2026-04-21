import {Stack, Typography } from "@mui/material"

interface PopoverListProps{
    list:string[]
}
const styles={
    root:{
        backgroundColor:"#1f1f1f",
        padding:1.5,
        width:200,
    },
    text:{
        fontSize:13,
        color:"#bbb5b5"
    },
    button:{
        width:"100%",
        boxSizing:"border-box",
        padding:0.5,
        paddingLeft:1,
        borderRadius:1,
        '&:hover':{
            backgroundColor:"#1976d2",
            cursor:"pointer",
            "& .text":{
                color:"white"
            }
        }
    }
}
const PopoverList =({list}:PopoverListProps)=>{
    return(
        <Stack sx={styles.root} spacing={0.8}>
            {
                list.map((value,index)=>{
                    return(
                        <Stack key={index} sx={styles.button}>
                            <Typography className="text" sx={styles.text} >{value}</Typography>
                        </Stack>
                    )
                })
            }
        </Stack>
    )
}
export default PopoverList