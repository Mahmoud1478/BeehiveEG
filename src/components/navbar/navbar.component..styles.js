import{NavLink ,Link} from 'react-router-dom'
import styled, {  } from 'styled-components'

export const HeaderSection = styled.header`
    padding: 2rem 0;
    color : ${props=> props.path==="/"?"black":"white"};
    width:100%;
`
export const NavigationBtn = styled(NavLink)`
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.2rem;
    color: inherit;
    transition:color .1s ease-in ;
    &::after{
        content: "";
        transition: all .3s ease-in ;
        width:0 ;
        position: absolute;
        left: 0;
        height: .25rem;
        background-color:white;
        bottom:-1rem;
        display:inline-block;
    }
    &:hover::after {
        width:100%;
    }
    &.active::after{
        width:100%;
    }
`
export const NavigationBarLg = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
`
export const NavBtn = styled.button`
    font-size:${props => props.fontLgSize}rem;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    text-transform: uppercase;
    border: none;
    outline: none;
    padding: .2rem;
    color: inherit;
    transition:color .1s ease-in ;
    &::after{
        content: "";
        transition: all .3s ease-in ;
        width: 0;
        position: absolute;
        left: 0;
        height: .25rem;
        background-color:white;
        bottom: ${props => props.bottom}rem;
    }
    &:hover{
        /*color: white;*/
    }
    &:hover::after {
        width:100%;
    }

`
export const MobileNavBtn = styled.button`
    cursor: pointer;
    position: relative;
    width: 5rem;
    height: 5rem;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: none;
    outline: none;
    background-color: transparent;
    &::after , &::before{
        content:"";
        height: .3rem;
        position: absolute;
        left:50%;
        background-color: black;
        border-radius: .3rem;
        transition: all .1s ease-in-out;
        transform-origin:center center ; 
        display: inline-block;
        width: 70%;
        transform:translate(-50%,-50%);
    }
    &:after{
        top:${props=>props.active?"50%":"35%"};
        transform:${props=>props.active&&`translate(-50%,-50%) rotate(45deg);`}
    };
    &::before{
        top:${props=>props.active?"50%":"60%"};
        transform:${props=>props.active&&`translate(-50%,-50%) rotate(-45deg);`}
    }
`
export const MobileMenu = styled.div`
    position: fixed; 
    justify-content: center;
    top: 50%;
    left: 50%;
    background-color:white;
    transform: translate(-50%,-50%);
    width:${props=> props.active?"93vw":"0"};
    height:${props=> props.active?"95vh":"0"};
    opacity: ${props=> props.active?"1":"0"};
    visibility:${props=> props.active?"visible":"hidden"};
    overflow: hidden;
    transition: opacity 1s ease;
    &::after{
        position: absolute;
        bottom: 0;
        right: 0;
        content: "";
        width: 100%;
        height: 50%;
        background-color:rgba(0, 0, 0, .3);
        clip-path: polygon(100% 100.18%, -0.15% 100%, -0.51% 64.5%, 100% 18.54%);
    }
`
export const MobileMenuList = styled.ul`
    font-size: 2rem;
    height: 65%;
    padding: 15% 0;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
`
export const MobileMenuListItem = styled.li`
    width: 100%;
    text-align: center;
` 
export const MobileMenuFooter = styled.div`
    position: relative;
    height: 35%;
    overflow: hidden;
    color: black;
    justify-content: space-around;
    font-size: 1.8rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column

`
export const Social = styled.div`
    justify-content: space-between;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    width:50%;
    color: white;
    z-index:2;
`
export const MobileMenuFooterTitle = styled.h3`
    padding: 1rem;
    font-weight: normal;
    font-size: 1.6rem;

`
export const MobileNavLink = styled(Link)`
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;

`