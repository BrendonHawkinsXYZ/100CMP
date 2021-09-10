import React from "react";
import styled from 'styled-components';

import Navbar from "./Navbar";
import About from "./About";
import Article from "./Article";
import Images from "./Images";

export default function HomePage() {


    return(
        <StyledHome>
        <Navbar id="Nav" component={Navbar}/>
        <About id="About" component={About}/>
        <Article id="Article" component={Article}/>
        <Images id="Images" component={Images}/>
        </StyledHome>
    )
}

const StyledHome = styled.div`
width:100%;
height: auto;
background: rgb(0, 0, 10);
color: white;
`