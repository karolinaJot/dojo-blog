import styled from 'styled-components';
import  { useState } from 'react';


const Wrapper = styled.div``;



const Home = () => {

    const [name, setName] = useState('Karolina');
    const [age, setAge] = useState(33);

    const handleClick = () => {
        setName("Adam");
        setAge(50);
    }
 

    return ( 
        <Wrapper>
            <h2>Home Page</h2>
            <p>{ name } ma { age } lat</p>   
            <button onClick={handleClick}>Click me</button>
        </Wrapper>
     );
}
 
export default Home;