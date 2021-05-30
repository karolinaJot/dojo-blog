import styled from 'styled-components';
import { useState } from 'react';
import BlogsList from './BlogsList';


const Wrapper = styled.div``;





const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website!', body: 'lorem ipsum...', author: 'Karolina', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Maciej', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Karolina', id: 3 }

    ]);


    return (
        <Wrapper>
           <BlogsList blogs={blogs} title='All Blogs!'/>
           <BlogsList blogs={blogs.filter( (blog) => blog.author === "Karolina" )} title="Karolina's Blogs!"/>
        </Wrapper>
    );
}

export default Home;