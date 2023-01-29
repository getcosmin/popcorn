import { useEffect, useState } from 'react';

/**
 * Custom Hook used to fetch data.
 * @param {string} link - Place the link to fetch from the API..
 */

export default function useFetch(link) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData(link);
        async function fetchData(link) {
            try {
                const response = await fetch(`${link}`);
                const received = await response.json();
                setData(received.results);
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    }
    , []);
    return data;
}


