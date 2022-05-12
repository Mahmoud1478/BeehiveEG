import styled from "styled-components";
export const ProjectSectionTitle = styled.h2`
    color:white;
    font-size : 12rem;
    text-transform: uppercase;
`

export const ProjectSectionImgHolder = styled.div`
    position: absolute;
    bottom:-100%;
    left:50%;
    transform:translateX(-50%);
    width: 100%;
    height: 100%;
    transition: all .5s ease; 
`
export const ProjectSectionImg = styled.img`
    max-width:100%;
    max-height: 100%;

`
export const ProjectSectionHolder = styled.li`
    text-align: center;
    padding:2.5rem 0;
    overflow:hidden;
    position: relative;
    //margin-bottom:2.5rem;
    &:hover{
        ${ProjectSectionImgHolder}{
            bottom: 0
        }
    }
`