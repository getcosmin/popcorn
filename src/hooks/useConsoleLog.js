import { useEffect } from 'react';

/**
 * Custom Hook with console.log inside useEffect.
 * @param {any} variable - Anything.
 */

export default function useConsoleLog(variable) {
    useEffect(() => {
        console.log(variable);
    }, [variable]);
}
