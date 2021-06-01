import styled from 'styled-components';
import BlogsList from './BlogsList';
import useFetch from './useFetch';


const Wrapper = styled.div``;





const Home = () => {

    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs'); 

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