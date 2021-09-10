import React from 'react';
import styled from 'styled-components';

export default function Navbar() {

    return(
        <StyledNav>
            <a className='logo' href='https://www.museumlab.org'>   </a>
            <nav>
                <a href="#About">About</a>
                <a href="#Article">Article</a>
                <a href="#Article">Discord</a>
            </nav>
        </StyledNav>
    )
}

const StyledNav = styled.div`
height: 8vh;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
background: lightgray;
background-image: url("./images/Logo.png");
background-repeat: no-repeat;
.logo{
    width: 30%;
}
nav{
width: 50%;
display: flex;
justify-content: space-evenly;
font-family: 'Kufam', sans-serif;
font-size: 1.5rem;
}
a{
    text-decoration: none;
}
a:visited{
    color: #22b455;
    text-decoration:none;
}
`