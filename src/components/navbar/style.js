import styled from 'styled-components'

export const HeaderSection = styled.header`
    padding: 2rem 0;
    background-color:${props => props.bgColor&& props.bgColor};
    color : ${props=> props.path==="/"?"black":"white"};
    width:100%;
`