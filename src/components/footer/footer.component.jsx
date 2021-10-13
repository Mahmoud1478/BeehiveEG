import React from 'react';
import {FooterSection , CopyRight,SocialMedia,Text,SocilaItem ,SocialList}from "./footer.styles"
import './footer.styles.scss'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = ()=>{
    return(
        <FooterSection>
            <div className="container">
                <Text>
                    <h2> Thank You</h2>
                </Text>
                <SocialMedia>
                    <div>
                        <CopyRight> BeehiveEG® — Suite 4C Origin, Spring Gardens, Manchester, M2 2BQ, UK </CopyRight>
                    </div>
                    <SocialList>
                        <SocilaItem><FontAwesomeIcon icon={faFacebook} size="1x"/> </SocilaItem>
                        <SocilaItem><FontAwesomeIcon icon ={faTwitter} size="1x"/></SocilaItem>
                    </SocialList>
                </SocialMedia>
            </div> 
        </FooterSection>
    )
}
export default Footer