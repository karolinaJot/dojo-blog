import styled from 'styled-components';
import { useState, useEffect } from 'react';
import BlogsList from './BlogsList';


const Wrapper = styled.div``;





const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then( res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data. Sorry');
                }    
                return res.json();
            })
            .then( data => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
                
            })
            .catch( err => {
                setIsLoading(false);
                setError(err.message);
            })
    }, [])

    return (
        <Wrapper>
        {/* --- sprawdza, czy lewa strona (blogs) jest true, jeśli nie, to w ogóle nie zjamuje się prawą stroną---- */}
            { error && <div>{ error }</div>}
           { isLoading && <div>Loading... </div>} 
           { blogs && <BlogsList blogs={blogs} title='All Blogs!' /> }
        </Wrapper>
    );
}

export default Home;