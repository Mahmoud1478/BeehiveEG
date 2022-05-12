import styled from 'styled-components';
import { useInView } from 'react-hook-inview'



const Title  = styled.h2`
    font-size : 2rem;
    color: ${({color})=> color ?? 'white' };
    position : relative;
    margin-bottom: 3rem;
    text-transform : uppercase;
    &::before{
        content: "";
        width: ${({isOPen,hoverWidth})=> isOPen? hoverWidth : 5 }%;
        height: 30%;
        transform:skewY(175deg) translateX(-50%);
        bottom:-20px;
        left:50%;
        background-color: white;
        position:absolute;
        transition: all 1s ease-out;
    }
`;

const SectionTitle = (props) => {
    const [ref, inView] = useInView( {threshold: 1,unobserveOnEnter: false,})
    return (
        <Title {...props} ref = {ref} isOPen = {inView} hoverWidth ={props.hoverWidth ?? 40} color={props.color} > {props.children} </Title>
    )
}

export default SectionTitle