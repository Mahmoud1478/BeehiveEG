import React, {   } from "react";
import Introduction from "../../components/section-intro/intro.component";
import { WhoPage ,Content} from "./style";
import Pragraph from "../../components/pragraph-section/pragraph-component";
import pages from "../../configrations/pages";
import './who-page.style.scss'
const Who =()=> {
    const pageInfo = pages.who;
    return(
        <WhoPage bgColor={pageInfo.bgColor} className="who">
            <Introduction imgUrl={pageInfo.Text.imageUrl}
                heading ={pageInfo.Text.heading} 
                headingColor={pageInfo.Text.headingColor} 
                btnColor={pageInfo.Text.btnColor}
                alt={pageInfo.Text.alt} scrollTo={'#mission'} 
            />
            <section className="info"  id="mission">
                <div className="holder">
                    <div className="container-h100">
                        <Content className="content">
                            <div className="text">
                                <Pragraph 
                                    title={pageInfo.Text.pragraphSection1.title} 
                                    titleColor={pageInfo.Text.pragraphSection1.titleColor}
                                    body={pageInfo.Text.pragraphSection1.body}
                                    bodyColor = {pageInfo.Text.pragraphSection1.bodyColor}
                                    smallBody ={pageInfo.Text.pragraphSection1.smallBody}
                                    mobileFontSizeSB = {pageInfo.Text.pragraphSection1.mobileFontSizeSB}
                                    smallBodyColor= {pageInfo.Text.pragraphSection1.smallBodyColor}
                                    focusOn = {pageInfo.Text.pragraphSection1.focusOn}
                                />
                                <Pragraph 
                                    title={pageInfo.Text.pragraphSection2.title} 
                                    titleColor={pageInfo.Text.pragraphSection2.titleColor}
                                    body={pageInfo.Text.pragraphSection2.body}
                                    bodyColor = {pageInfo.Text.pragraphSection2.bodyColor}
                                    smallBody ={pageInfo.Text.pragraphSection2.smallBody}
                                    mobileFontSizeSB = {pageInfo.Text.pragraphSection2.mobileFontSizeSB}
                                    smallBodyColor= {pageInfo.Text.pragraphSection2.smallBodyColor}
                                    focusOn = {pageInfo.Text.pragraphSection2.focusOn}
                                />
                            </div>
                            <div className="image">
                                <img src="images/who.png" alt=" who" />
                            </div>
                        </Content>
                    </div>
                </div>
            </section>
        </WhoPage>
    )
} 

export default Who