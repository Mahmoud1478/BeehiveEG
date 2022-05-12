import styled from "styled-components";

export const SectionTitles = styled.h2`
    font-size : 2.4rem;
    color: white;
    position : relative;
    &::before{
        content: "";
        width: 10%;
        height: 30%;
        transform:skewY(175deg) translateX(-50%);
        bottom:-20px;
        left:50%;
        background-color: white;
        position:absolute;

    }

`