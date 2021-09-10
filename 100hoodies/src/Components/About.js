import React from 'react';
import styled from 'styled-components';

export default function About() {

    return(
        <StyledAbout>
            <div className='about-container'>
            
            <h1> what is THE cardi-hoodie-gan?</h1>
            <p>The genesis of this project is one centered within the lens of culture and personal preference.<br/> The go to object of comfort and low visibility, the hoodie has incomparable history within fashion, and human culture itself.<br/> Within this document:<br/> we will pay attention to this history with images, an article, and a test of hoodie design within the modern framework.<br/> This results in a new product: THE Cardi-Hoodie-Gan; or quite simply, a hoodie that has the capabilities and likeness of a cardigan. </p>
            </div>   
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
height: auto;
width: 100%;
background: linear-gradient(45deg, #020204, #204829, #22b455, #80ce87, #92e5a1);
background-size: 400% 400%;
animation: gradient 12s ease infinite;
	
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

}
.about-container{
    height: 91.9vh;
    background-image: url("./images/About.png");
    background-size: cover;
    background-repeat:none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
h1{
margin:0%;
margin-right: -130px;
font-family: 'Kufam', sans-serif;
}
p{
 margin-left: 100px;
 margin-right: -60px;
}
}
`