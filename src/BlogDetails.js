import { useParams } from 'react-router';
import styled from 'styled-components';


const Wrapper = styled.div``;

const BlogDetails = () => {

    const { id } = useParams();

    return ( 

        <Wrapper>
            <h2>Blog details - { id }</h2>
        </Wrapper>
     );
}
 
export default BlogDetails;