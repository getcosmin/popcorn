import { useEffect, useState } from "react";

export default function useFetch(link) {
    const [data, setData] = useState([])

    useEffect(() => {

        fetchData(link)

        async function fetchData(link) {
            try {
                const response = await fetch(`${link}`)

                const received = await response.json()
                
                setData(received.results)

                return data
               
            } catch(error) {
    
                console.log(error)
            }
        }
    }
    , [])   
    return data
}

