
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';



const Wrapper = styled.div``;

const ContentWrapper = styled.div`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
`;


function App() {

  return (
    <Router>
      <Wrapper>
        <Navbar />
        <ContentWrapper>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </ContentWrapper>
      </Wrapper>
    </Router>

  );
}

export default App;
