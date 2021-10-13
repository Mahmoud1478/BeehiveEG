import styled from "styled-components";


export const Hero  = styled.div`
    position: relative;
    height: 100vh;
`
export const HeroContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width:80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-60%);
    @media(max-width:768px){
        width:100%;
        height:100%;
    };
    
`
export const Image = styled.img`
    //height: 50vh;
    width:60%;
    object-fit:cover;
    /*position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-60%);
    -moz-transform: translate(-50%,-30%);*/
    transition: transform .5s ease;
    -webkit-transition: transform .5s ease;
    -ms-transition: transform .5s ease;
    -o-transition: transform .5s ease;
    -moz-transition: transform .5s ease;
    @media(max-width:768px){
        width:100%
    }

`
export const Title = styled.h2`
    color:${props=> props.headingColor};
    font-size: 10vw;
    font-family: 'Qualified';
    text-transform: uppercase;
    transform: translateY(35%);
    -webkittransform: translateY(35%);
    -mstransform: translateY(35%);
    -otransform: translateY(35%);
    -moz-transform: translateY(35%);
    @media(max-width:768px){
        font-size: 10rem;
    };
`
export const ScrollBtn = styled.button`
    background-color: transparent;
    cursor: pointer;  
    color:${props=>props.btnColor};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    border: none;
    bottom: 1%;
    font-size: 2.4rem;
    padding: 1rem 2rem;
    width: 8%;
    height: 8%;   
    transition: color .5s linear;
    -webkit-transition: color .5s linear;
    -ms-transition: color .5s linear;
    -o-transition: color .5s linear;
    -moz-transition: color .5s linear;
`