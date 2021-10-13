import styled from "styled-components";
export const IntroPage = styled.section`
    background-color:${props=> props.bgColor}
`
export const PragraphSection = styled.section`
    position: relative;
    width: 100%;
    text-align: center;
    margin: 5rem auto;
    height: 100vh;
`
export const RecentWork = styled.div`
    overflow: hidden;
    &:before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: ${props=> props.animatedBgColor};
        -webkit-transform-origin: 50% 0;
        -moz-transform-origin: 50% 0;
        -ms-transform-origin: 50% 0;
        -o-transform-origin: 50% 0;
        transform-origin: 50% 0;
        -webkit-transition: -webkit-transform 1.5s cubic-bezier(0.52, 0.01, 0.16, 1), background 0.26s linear;
        -moz-transition: -moz-transform 1.5s cubic-bezier(0.52, 0.01, 0.16, 1), background 0.26s linear;
        transition: transform .3s cubic-bezier(0.52, 0.01, 0.16, 1), background 0.26s linear;
        width: 100%;
        height: 100%;
        clip-path: polygon(0 0,100% 100%,0 100%,0 0);
        /* -webkit-transform: rotate(27deg);
        -moz-transform: rotate(27deg);
        -ms-transform: rotate(27deg);
        -o-transform: rotate(27deg);*/
        transform: ${props=> props.animatRotate}; 
    }

`