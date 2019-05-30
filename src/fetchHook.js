// code from here: https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
import { useState, useEffect } from "react";
//mport axios from "axios";

function useFetch(URL, dat) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //let [URL] = useState(url);
  useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(URL);
      console.log("STATUS", response);
      const json = await response.json();
      console.log("STATUS2", response.status);
      console.log(json);
      setData(json);
    }
    fetchUrl();
    setLoading(false);
  }, [dat, URL]);
  return [data, loading];
}

export { useFetch };
