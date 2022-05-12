import React, {useRef,useEffect,useState} from "react";
import Introduction from "../../components/section-intro/intro.component";
import { WorkPage } from "./style";
// import Pragraph from "../../components/pragraph-section/pragraph-component";
import pages from "../../configrations/pages";
import axios from "axios";
// import { gsap} from "gsap"; 
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import './work.page.styles.scss'
import { CenterColumn } from "../../components/stylesJs/globales.styles";
import { Container } from "react-bootstrap";
import WorkList from "../../components/work/workList.component";
//gsap.registerPlugin(ScrollTrigger);



const Work = ()=>{
    const pageInfo = pages.Work
    const [projects, setProjects] = useState([]);
    
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
                alt={pageInfo.Text.alt} scrollTo='#work'
            /> 
            <Container>
                <CenterColumn style={{ paddingTop: '25px' ,margin: '20px 0'}}>
                    <WorkList workList = {projects}  id="work"/>
                </CenterColumn>
            </Container>
        </WorkPage >
    )
} 

export default Work