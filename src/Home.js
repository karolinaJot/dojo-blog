import styled from 'styled-components';
import { useState, useEffect } from 'react';
import BlogsList from './BlogsList';


const Wrapper = styled.div``;





const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website!', body: 'lorem ipsum...', author: 'Karolina', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Maciej', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Karolina', id: 3 }

    ]);

    const handleDelete = (id) => {
        const newBlog = blogs.filter( (blog) => blog.id !== id);
        setBlogs(newBlog);
    }

    useEffect(() => {
        console.log('useEffect ran');
    })

    return (
        <Wrapper>
           <BlogsList blogs={blogs} title='All Blogs!'  handleDelete={handleDelete}/>
           <p>!</p>
          
        </Wrapper>
    );
}

export default Home;