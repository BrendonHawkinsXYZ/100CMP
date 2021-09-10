import React from 'react';
import styled from 'styled-components';

export default function Article() {

    return(
        <StyledArticle>
            <div className='glass'>
                <h1>HELLO</h1>
            </div>
        </StyledArticle>
    )
}

const StyledArticle = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(45deg,  #204829, #22b455, #92e5a1, #ffffff);
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
.glass{
    width:90%;
    height: 80vh;
    background: rgba(255, 255, 240, 0.4);
    border-radius:2rem;
    backdrop-filter: blur(2rem);
}
h1{
    margin:0;
}
`