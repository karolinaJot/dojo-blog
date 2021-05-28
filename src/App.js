
import styled from 'styled-components';

import Navbar from './Navbar';
import Home from './Home';



const Wrapper = styled.div``;

const ContentWrapper = styled.div`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
`;


function App() {



  return (
    <Wrapper>
      <Navbar />
      <ContentWrapper>
        <Home />
      </ContentWrapper>
    </Wrapper>

  );
}

export default App;
