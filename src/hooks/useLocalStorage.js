import { useEffect, useState } from 'react';

/**
 * Custom Hook used to store data in LocalStorage.
 * @param {string} key - Assign a key to store in LocalStorage.
 * @param {string, function} initialValue - Assign a value to the key.
 */

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initialValue instanceof Function) return initialValue();
    return initialValue;
}


export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue]
}
