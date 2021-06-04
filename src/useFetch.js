import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        const abrotCont = new AbortController();

        fetch(url, { signal: abrotCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch the data. Sorry');

                }
                return res.json();
            })
            .then(data => {
                setIsLoading(false);
                setData(data);
                setError(null);

            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsLoading(false);
                    setError(err.message);
                }
            })

        return () => abrotCont.abort();
    }, [url])

    return { data, isLoading, error }
}

export default useFetch;