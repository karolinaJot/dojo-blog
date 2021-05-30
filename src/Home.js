import styled from 'styled-components';
import { useState } from 'react';


const Wrapper = styled.div``;

const PreViewWrapper = styled.div`
    padding: 10px 16px;
    margin: 20px 0;
    border-bottom: 1px solid #fafafa;
    
    &:hover {
        box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
    };

    h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 8px;
    };

`;



const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website!', body: 'lorem ipsum...', author: 'Karolina', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Maciej', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Weronika', id: 3 }

    ]);


    return (
        <Wrapper>
            { blogs.map((blog) => (
                <PreViewWrapper key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> wirtten by {blog.author}</p>
                </PreViewWrapper>
            ))}
        </Wrapper>
    );
}

export default Home;