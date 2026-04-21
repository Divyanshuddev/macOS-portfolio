import { Input, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import type { RootState } from "../../store/Store";
import { useEffect, useRef, useState } from "react";

const Terminal = () => {
    const isMaximized = useSelector((state: RootState) => state.windowresize.isMaximized)
    const styles = {
        root: {
            backgroundColor: "#1e1e23",
            width: isMaximized ? "50vw" : "100vw",
            height: isMaximized ? "57vh" : "97vh",
            boxSizing: "border-box",
            padding: 1,
            fontFamily: "Montserrat",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
                display: "none",
            },
        },
        text: {
            color: "white",
            fontFamily: "Montserrat",
            boxSizing: "border-box",
            fontSize: 18,
            fontWeight:"bold"
        },
        input: {
            input: {
                color: "white",
                boxSizing: "border-box",
                fontFamily: "Montserrat",
                width:400,
                fontSize: 18,
                fontWeight:"bold",
            },
        },
    };
    const [history, setHistory] = useState<string[]>([
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "auto" });
    }, [history]);
    const handleCommand = (cmd: string) => {
        const command = cmd.trim().toLowerCase();
        let output = "";
        switch (command) {
            case "date":
                output = new Date().toLocaleDateString();
                break;

            case "time":
                output = new Date().toLocaleTimeString();
                break;

            case "whoami":
                output = "divyanshu";
                break;

            case "help":
                output = "Available commands: date, time, whoami, exit, cls";
                break;

            case "cls":
                setHistory([]);
                setInput("");
                return;

            case "exit":
                output = "Session terminated.";
                break;

            default:
                output = `'${command}' is not recognized as an internal or external command.`;
        }
        setHistory((prev) => [
            ...prev,
            `divyanshu@divyanshu-MacBook ~ %  ${cmd}`,
            output,
        ]);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleCommand(input);
        }
    };
    return (
         <Stack sx={styles.root} spacing={0.5}>

      {history.map((line, index) => (
        <Typography key={index} sx={styles.text}>
          {line}
        </Typography>
      ))}
      <Stack direction="row" sx={{alignItems:"center"}} >
        <Typography sx={styles.text}>divyanshu@divyanshu-MacBook ~ % &gt;&nbsp;</Typography>

        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={styles.input}
        disableUnderline
          autoFocus
        />
      </Stack>
      <div ref={bottomRef} />
    </Stack>
    )
}
export default Terminal