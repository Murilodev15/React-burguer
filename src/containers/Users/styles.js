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

export const User = styled.li`
        display: flex;
        justify-content:space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0px 4px rgba(0,0,0,0.25);
        border-radius: 14px;
        border: none;
        padding:1px;
        margin-top:20px;
              
        p {
            font-style: normal;
            font-weight: 280;
            font-size: 18px;
            line-height: 28px;
            color: #FFFFFF;    
            width: 280px;
            overflow-wrap: break-word;  
            word-wrap: break-word; 
            word-break: break-word;   
            padding:10px;
        }
       p1 {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 28px;
            color: #FFFFFF;   
            margin-top:20px;
            padding: 10px;  
        }       
        button {
           background: none;
           border: none;
           cursor: pointer;       
        }
        div{
           display:flex;        
           flex-direction:column;
           padding-inline:50px;
           padding-top:20px;
           padding-right:30px;
          
        }
        `;

       
      