import styled from "styled-components";

export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 

`
export const CenterColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;

`
export const BaseAnchor = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

export const UnorderedList = styled.ul`
    list-style: ${({listStyle})=> listStyle ? listStyle : 'none' };
    //transition: transform cubic-bezier(0.52, 0.01, 0.16, 1) ;
    //transition: transform .4s ease-out ;
    will-change: transform;
    transform-origin: center center;
`;