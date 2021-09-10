import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Components/Hompage';
import Landing from './Components/Landing';

// const media ={
//   desktop: '@media (min-width:1100px) ',
// }

function App() {
  return (
   <StyledApp>
    <Switch>
      <Route path={"/home"} component={HomePage}/>
      <Route path={"/"} component={Landing}/>
    </Switch>
   </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
height: 100vh;
width: 100%;
background: gray;
`