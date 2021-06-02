import { Link } from 'react-router-dom';
import styled from 'styled-components';



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

    a {
        text-decoration: none;
    }

`;

const BlogsList = (props) => {
    return (
        <Wrapper>
            {props.title}
            { props.blogs.map((blog) => (
                <PreViewWrapper key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p> wirtten by {blog.author}</p>
                    </Link>
                </PreViewWrapper>
            ))}
        </Wrapper>
    );
}

export default BlogsList;