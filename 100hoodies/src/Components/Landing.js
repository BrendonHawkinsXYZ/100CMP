import React from 'react';
import styled from 'styled-components';


const media ={
    desktop: '@media (min-width:1100px) ',
  }
  
  export default function Landing() {
    return (
     <StyledLanding>
       <h1>
         <a href='/home'>ENTER</a>
       </h1>
     </StyledLanding>
    );
  }

  const StyledLanding = styled.div`
font-family: 'Kufam', sans-serif;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;
background: darkgray;
background-size: contain;

${media.desktop}{
  background-image: url("./images/main.jpg");
  font-size: 1.75rem;
  background-size: cover;
}
h1{
  margin-left: 25px;
  ${media.desktop}{
  margin-left: 0%;
}
}

    a{
      text-decoration: none;
      color: white;
      font-weight: bold;
      text-shadow: 0 0 20px darkgray;
    }
a:hover{
  filter: brightness(155%);
  box-shadow: 0 0 30px #3DB72D;
  padding: 0 20px;
  cursor: pointer;
  border-radius: 2rem;
  text-shadow: 0 0 50px white;
}
`