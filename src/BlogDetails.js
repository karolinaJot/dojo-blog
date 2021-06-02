import { useParams } from 'react-router';
import styled from 'styled-components';
import useFetch from './useFetch';


const Wrapper = styled.div``;

const BlogDetails = () => {

    const { id } = useParams();
    const {data: blog, error, isLoading  } = useFetch(`http://localhost:3000/blogs/${id}`);

    return ( 

        <Wrapper>
            { isLoading && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </Wrapper>
     );
}
 
export default BlogDetails;