import { useEffect } from "react";

// CUSTOM HOOK: ConsoleLog a variable, with useEFFECT to render only once.

export default function useConsoleLog(variable) {
    useEffect(() => {
        console.log(variable)
    }, [variable])
}