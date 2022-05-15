import React, { useEffect,useState } from "react";
import Introduction from "../../components/section-intro/intro.component";
import {WhatPage} from './style'
import Pragraph from "../../components/pragraph-section/pragraph-component";
import pages from "../../configrations/pages";
import { axios } from "../../axios";
import './what.page.styles.scss'
const What=()=>{

    const pageInfo = pages.what ;
    const [services, setServices] = useState([]);
    const [partners, setPartners] = useState([]);
    const getServices = async ()=>{
        const response = await axios.get('/services').catch((Error)=>console.log(Error))
        if(response && response.data) setServices(response.data.data)
    }
    const getParteners = async ()=>{
        const response = await axios.get('/partners').catch((Error)=>console.log(Error))
        if(response && response.data) setPartners(response.data.data) ; 
    }
    useEffect(()=>{
        getServices()
        getParteners()
    },[])
    return(
        <WhatPage bgColor={pageInfo.bgColor} className="what">
            <Introduction imgUrl={pageInfo.Text.imageUrl}
                heading ={pageInfo.Text.heading} 
                headingColor={pageInfo.Text.headingColor} 
                btnColor={pageInfo.Text.btnColor}
                alt={pageInfo.Text.alt} scrollTo='#services'
            />
            <section id="services" style={{position:"relative",height: "100vh"}}>
                <div className="container">
                    <div className="holder">
                    <Pragraph 
                        title={pageInfo.Text.pragraphSection.title} 
                        titleColor={pageInfo.Text.pragraphSection.titleColor}
                        body={pageInfo.Text.pragraphSection.body}
                        bodyColor = {pageInfo.Text.pragraphSection.bodyColor}
                        smallBody ={pageInfo.Text.pragraphSection.smallBody}
                        smallBodyColor= {pageInfo.Text.pragraphSection.smallBodyColor}
                        focusOn = {pageInfo.Text.pragraphSection.focusOn}
                        servces={services}
                    />
                    </div>
                </div>
            </section>
            <section  style={{padding:"5rem 0",backgroundColor:"#E7EEED",minHeight:"100vh"}}>
                <div className="container">
                    <div className="holder2">
                    <Pragraph 
                        title={pageInfo.Text.pragraphSection2.title} 
                        titleColor={pageInfo.Text.pragraphSection2.titleColor}
                        body={pageInfo.Text.pragraphSection2.body}
                        bodyColor = {pageInfo.Text.pragraphSection2.bodyColor}
                        smallBody ={pageInfo.Text.pragraphSection2.smallBody}
                        smallBodyColor= {pageInfo.Text.pragraphSection2.smallBodyColor}
                        focusOn = {pageInfo.Text.pragraphSection2.focusOn}
                        partners={partners}
                    />
                    </div>
                </div>
                
            </section>
        </WhatPage>
    );
}; 
export default What