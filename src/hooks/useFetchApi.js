import { useState, useEffect } from "react";

function useFetchApi(url) {
    
    const [data, setData] = useState([])

    const apiData = async () => {
        const res = await fetch(url)
        const results = await res.json()
        setData(results)
    }

    useEffect(() => {
        apiData()
    },[url])

    return { data }
}

export default useFetchApi;