import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(async () => {
    try {
      const res = await fetch(url);
      const jsonData = await res.json();
      setData(jsonData);
      setLoading(false);
    } catch(err) {
      setError({ message: err })
    }
  }, []);

  return { data, loading, error }
}

export default useFetch;