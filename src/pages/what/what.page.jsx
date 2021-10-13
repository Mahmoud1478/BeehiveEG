import React, {  useRef,useEffect,useState } from "react";
import Introduction from "../../components/section-intro/intro.component";
import {WhatPage} from './style'
import Pragraph from "../../components/pragraph-section/pragraph-component";
import pages from "../../configrations/pages";
import axios from "axios";
import './what.page.styles.scss'

const What=()=>{
    const pageInfo = pages.what ;
    const scrollTarget = useRef();
    const [services, setServices] = useState([]);
    const [partners, setPartners] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            await axios.get("jsons/API_semi.json").then(res =>{
                console.log(res.data.services);
                setServices(res.data.services)
            })
        }
        fetchData()
    },[])
    useEffect(()=>{
        async function fetchData(){
            await axios.get("jsons/API_semi.json").then(res =>{
                console.log(res.data.partners);
                setPartners(res.data.partners)
            })
        }
        fetchData()
    },[])
    return(
        <WhatPage bgColor={pageInfo.bgColor} className="what">
            <Introduction imgUrl={pageInfo.Text.imageUrl}
                heading ={pageInfo.Text.heading} 
                headingColor={pageInfo.Text.headingColor} 
                btnColor={pageInfo.Text.btnColor}
                alt={pageInfo.Text.alt} scrollTo={scrollTarget} 
            />
            <section ref={scrollTarget} style={{position:"relative",height: "100vh"}}>
                <div className="container">
                    <div className="holder">
                    <Pragraph 
                        title={pageInfo.Text.pragraphSection.title} 
                        titleColor={pageInfo.Text.pragraphSection.titleColor}
                        body={pageInfo.Text.pragraphSection.body}
                        bodyColor = {pageInfo.Text.pragraphSection.bodyColor}
                        smallBody ={pageInfo.Text.pragraphSection.smallBody}
                        smallBodyColor= {pageInfo.Text.pragraphSection.smallBodyColor}
                        pointer ={scrollTarget}
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
                        pointer ={scrollTarget}
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