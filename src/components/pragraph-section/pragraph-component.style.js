import styled from "styled-components"


export const PragraphHolder = styled.div`

`
export const Title = styled.span`
    display: inline-block;
    font-size: 2.2rem;
    position: relative;
    text-transform: uppercase;
    margin-bottom:4rem ;
    color:${props=> props.titleColor};
    &::after{
        content: '';
        width:${props => props.affterWidth};
        left: 50%;
        position: absolute;
        bottom: -80%;
        background-color: #fff;
        height: 30%;
        transform: translateX(-50%)  skewY(175deg);
        -webkit-transform: translateX(-50%)  skewY(175deg);
        -ms-transform: translateX(-50%)  skewY(175deg);
        -o-transform: translateX(-50%)  skewY(175deg);
        -moz-transform: translateX(-50%)  skewY(175deg);
        transition: width .5s linear;
        -webkit-transition: width .5s linear;
        -ms-transition: width .5s linear;
        -o-transition: width .5s linear;
        -moz-transition: width .5s linear;
    }
`
export const SmallBody = styled.h3`
    font-size: 2rem;
    line-height: 3.5rem;
    margin-bottom:1.5rem ;
    text-transform: uppercase;
    color:${props=> props.smallBodyColor};
    @media(max-width:768px){
        font-size: ${props=> props.mobileFontSizeSB}rem; 
    }
`
export const Body = styled.p`
    color:${props=> props.bodyColor};
    font-size: 1.4rem;
    line-height: 2.3rem;
    margin-bottom: 2.3rem;
`