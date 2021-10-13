import styled from "styled-components";
export const FooterSection = styled.footer`



`
export const Text = styled.div`
    font-family: "Qualified";
    text-align: center;
    font-size: 10rem;
    color: #d2d2d2;
    @media(max-width:762px){
        font-size: 3rem;
    }

`
export const CopyRight = styled.h4`
    font-weight: normal;
    font-size: 1.2rem;
    @media (max-width:420px){
        font-size: .8rem;
    }

`
export const SocialMedia = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    @media (max-width:420px){
        flex-direction: column;
    }

`
export const SocialList = styled.ul`
    display: flex;
    justify-content:space-between;
    align-items: center;
    list-style: none;

`
export const SocilaItem = styled.li`
    font-size: 1.8rem;
    width: 100%;
    &:not(:last-child){
        margin-right: 2rem; 
    }
    @media (max-width:520px){
        font-size: 1.3rem;
    }


`