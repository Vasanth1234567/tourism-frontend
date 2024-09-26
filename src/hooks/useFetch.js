import  { useEffect, useState } from 'react'
const useFetch = (url) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(url)
        if (!res.ok) {
          setError('failed to fetch')
          
        }
        const result = await res.json()

        setData(result.data)
        setLoading(false)
      }
      catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }
    fetchData();
  }, [url])
  return {
    data,
    error,
    loading
  }
}

export default useFetch



// import { useEffect, useState } from 'react';

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(url);
//         const text = await res.text(); // Get response as text first
//         console.log('Response text:', text); // Log response text
        
//         if (!res.ok) {
//           throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
//         }

//         const result = JSON.parse(text); // Parse the text as JSON
//         setData(result.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { data, error, loading };
// };

// export default useFetch;
