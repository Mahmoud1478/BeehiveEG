import React, {useRef,useEffect,useState} from "react";
import Introduction from "../../components/section-intro/intro.component";
import { WorkPage } from "./style";
import Pragraph from "../../components/pragraph-section/pragraph-component";
import pages from "../../configrations/pages";
import axios from "axios";

import './work.page.styles.scss'

const Work = ()=>{
    const pageInfo = pages.Work
    const scrollTarget = useRef(null)
    const [projects, setProjects] = useState([]);
    const onScrolling = ()=>{
        const responsive = setTimeout(()=>{
            
        },500)
        return()=>{
            clearTimeout(responsive)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",onScrolling)
        
        return( )=> window.removeEventListener("scroll",onScrolling)
        
    },);
    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get("jsons/Api_semi.json").then(res =>{
                setProjects(res.data.workItem)
            })
        }
        fetchData()
    },[])
    return(
        <WorkPage bgColor={pageInfo.bgColor} className="work">
            <Introduction imgUrl={pageInfo.Text.imageUrl}
                heading ={pageInfo.Text.heading} 
                headingColor={pageInfo.Text.headingColor} 
                btnColor={pageInfo.Text.btnColor}
                alt={pageInfo.Text.alt} scrollTo={scrollTarget} 
            /> 
            <section ref={scrollTarget} style={{position:"relative",minHeight: "100vh",textAlign:"center" }}>
                <div className="container" style={{ marginTop:"10rem" }}>
                    <Pragraph 
                        title={pageInfo.Text.pragraphSection.title} 
                        titleColor={pageInfo.Text.pragraphSection.titleColor}
                        body={pageInfo.Text.pragraphSection.body}
                        bodyColor = {pageInfo.Text.pragraphSection.bodyColor}
                        smallBody ={pageInfo.Text.pragraphSection.smallBody}
                        smallBodyColor= {pageInfo.Text.pragraphSection.smallBodyColor}
                        pointer ={scrollTarget}
                        focusOn = {pageInfo.Text.pragraphSection.focusOn}
                        list = {projects}
                    />
                </div>
            </section>
        </WorkPage >
    )
} 

export default Work