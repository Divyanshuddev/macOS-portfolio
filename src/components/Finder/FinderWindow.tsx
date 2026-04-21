import { Button, Divider, Stack } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { isMaximizedFunc } from "../../features/WindowSlice/ResizeWindowSlice"
import Finder from "./Finder"
const DEFAULT_SIZE = { width: "50vw", height: "70vh" }
interface FinderWindowProps {
    id: number
    zIndex: number
    bringToFront: (id: number) => void
    defaultPosition: { top: number; left: number }
}
const FinderWindow = ({ id, zIndex, bringToFront, defaultPosition }: FinderWindowProps) => {
    const dispatch = useDispatch()
    const headerRef = useRef<HTMLDivElement>(null)
    const [isMaximized, setIsMaximized] = useState(false)

    const [position, setPosition] = useState({
        x: defaultPosition?.left ?? 150,
        y: Math.max(defaultPosition?.top ?? 100, 100)
    })

    const [size, setSize] = useState(DEFAULT_SIZE)

    const dragData = useRef({
        isDragging: false,
        offsetX: 0,
        offsetY: 0
    })

    const restoreState = useRef({
        width: DEFAULT_SIZE.width,
        height: DEFAULT_SIZE.height,
        x: position.x,
        y: position.y
    })

    const maximize = () => {
        if (isMaximized) return

        restoreState.current = {
            width: size.width,
            height: size.height,
            x: position.x,
            y: position.y
        }

        setIsMaximized(true)
    }

    const restore = () => {
        if (!isMaximized) return

        setSize({
            width: restoreState.current.width,
            height: restoreState.current.height
        })

        setPosition({
            x: restoreState.current.x,
            y: restoreState.current.y
        })

        setIsMaximized(false)
    }

    const toggleResize = () => {
        bringToFront(id)
        dispatch(isMaximizedFunc(isMaximized))

        if (isMaximized) {
            restore()
        } else {
            maximize()
        }
    }

    useEffect(() => {
        const header = headerRef.current
        if (!header) return

        const onMouseDown = (e: MouseEvent) => {
            if (isMaximized) return

            bringToFront(id)

            dragData.current = {
                isDragging: true,
                offsetX: e.clientX - position.x,
                offsetY: e.clientY - position.y
            }
        }

        const onMouseMove = (e: MouseEvent) => {
            if (!dragData.current.isDragging) return

            setPosition({
                x: e.clientX - dragData.current.offsetX,
                y: e.clientY - dragData.current.offsetY
            })
        }

        const onMouseUp = () => {
            dragData.current.isDragging = false
        }

        header.addEventListener("mousedown", onMouseDown)
        window.addEventListener("mousemove", onMouseMove)
        window.addEventListener("mouseup", onMouseUp)

        return () => {
            header.removeEventListener("mousedown", onMouseDown)
            window.removeEventListener("mousemove", onMouseMove)
            window.removeEventListener("mouseup", onMouseUp)
        }
    }, [isMaximized, position.x, position.y])
    return (
        <Stack
            onClick={() => bringToFront(id)}
            sx={{
                position: isMaximized ? "fixed" : "absolute",
                top: isMaximized ? "3vh" : position.y,
                left: isMaximized ? 0 : position.x,
                width: isMaximized ? "100vw" : size.width,
                height: isMaximized ? "97vh" : size.height,
                backgroundColor: "white",
                overflow: "hidden",
                userSelect: "none",
                zIndex,
                flexDirection: "column",
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.31)',
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                "-webkit-backdrop-filter": "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
        >
            <Stack sx={{ flexGrow: 1 }}>
                <Divider />
                <Button sx={{display:"none"}} onClick={()=>toggleResize()} disabled></Button>
                <Finder />
            </Stack>
        </Stack>
    )
}
export default FinderWindow