import React from 'react';
import styled from 'styled-components';

export default function Navbar() {

    return(
        <StyledNav>
            <img src='/logo.svg' alt="what"/>
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
nav{
width: 50%;
display: flex;
justify-content: space-evenly;
}
`