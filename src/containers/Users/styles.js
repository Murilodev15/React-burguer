import styled from 'styled-components';


export const Container = styled.div`
background: #0A0A10;
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;

height: 100%;
min-height:100vh;
`;

export const Image = styled.img`
margin-top:30px;



`;

export const ContainerItens = styled.div`
padding:50px 36px;

display: flex;
flex-direction: column;

`;


export const H1 = styled.h1`


font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;


color: #FFFFFF;

margin-bottom:30px;

`;

export const Button = styled.button`
width: 342px;
height: 68px;

background:rgba(255, 255, 255, 0.14);
color: #EEEEEE;
margin-top:60px;
left: calc(50% - 116px/2);
top: calc(50% - 20px/2);


font-style: normal;
font-weight: 900;
font-size: 15px;
line-height: 2px;
border:none;
outline:none;
cursor: pointer;

&:hover{
    opacity: 0.8 ;
}

&:active{
    opacity: 0.5;
}
`;

export const User = styled.li``
