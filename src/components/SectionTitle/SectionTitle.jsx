import styled from 'styled-components';
import { useInView } from 'react-hook-inview'



const Title  = styled.h2`
    font-size : 2rem;
    color: white;
    position : relative;
    margin-bottom: 3rem;
    text-transform : uppercase;
    &::before{
        content: "";
        width: ${({isOPen})=> isOPen? 40 : 5 }%;
        height: 30%;
        transform:skewY(175deg) translateX(-50%);
        bottom:-20px;
        left:50%;
        background-color: white;
        position:absolute;
        transition: all .4s ease-out;
    }
`;

const SectionTitle = (props) => {
    const [ref, inView] = useInView( {threshold: 1,unobserveOnEnter: true,})
    return (
        <Title {...props} ref = {ref} isOPen = {inView} > {props.children} </Title>
    )
}

export default SectionTitle