import styled from "styled-components";
export const WhoPage = styled.section`
    background-color:${props=> props.bgColor}
`
export const Content = styled.div`  
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    @media(max-width:768px){
        flex-direction: column-reverse;

    }

`