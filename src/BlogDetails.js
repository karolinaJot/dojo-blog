import { useParams } from 'react-router';
import styled from 'styled-components';

import useFetch from './useFetch';


const Wrapper = styled.div`
    
    h2 {
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 10px;
    };

    div {
        margin: 20px 0;
    };

    button {
        background: #f1356d;
        color: #fff;
        border: 0;
        padding: 8px;
        border-radius: 8px;
        cursor: pointer;
    };

`;

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

    return (

        <Wrapper>
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </Wrapper>
    );
}

export default BlogDetails;