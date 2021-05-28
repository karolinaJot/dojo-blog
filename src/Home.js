import styled from 'styled-components';


const Wrapper = styled.div``;



const Home = () => {

    const handleClick = () => {
        console.log("Hello!");
    }
    const handleClickAgain = (name) => {
        console.log("Hello, " + name);
    }

    return ( 
        <Wrapper>
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {
                handleClickAgain("Karolina")
            }}>Click me again</button>
        </Wrapper>
     );
}
 
export default Home;