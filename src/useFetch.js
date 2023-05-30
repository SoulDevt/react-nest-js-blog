import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [err, setErr] = useState(null)

    useEffect( () => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error("Couldn't fetch data from the server")
            }
          
          return res.json();
        })
        .then(data => {
          setData(data)
        })
        .catch((err) => {
            setErr(err.message)
        })
      },[])

      return { data, err } 

}

export default useFetch;