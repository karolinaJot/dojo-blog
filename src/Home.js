import styled from 'styled-components';
import { useState, useEffect } from 'react';
import BlogsList from './BlogsList';


const Wrapper = styled.div``;





const Home = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then( res => {
                return res.json();
            })
            .then( data => {
                setBlogs(data);
                console.log(data);
            })
    }, [])

    return (
        <Wrapper>
            {/* --- sprawdza, czy lewa strona (blogs) jest true, jeśli nie, to w ogóle nie zjamuje się prawą stroną---- */}
           { blogs && <BlogsList blogs={blogs} title='All Blogs!' /> }
        </Wrapper>
    );
}

export default Home;