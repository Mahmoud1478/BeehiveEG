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
    const scrollTarget = useRef({})
    const [projects, setProjects] = useState([]);
    
    useEffect(()=>{
        const fetchData = async ()=>{
            await axios.get("jsons/Api_semi.json").then(res =>{
                setProjects(res.data.workItem)
            })
        }
        fetchData()
    },[])
    // useEffect(()=>{
    //     const skewSetter = gsap.quickSetter('#works' , 'skewY' , 'deg')
    //     const proxy = {skew : 0 }
    //     //let clamp = gsap.utils.clamp(-70, 70); // don't let the skew go beyond 20 degrees. 
    //     const skewAnimation = ()=>{
    //         ScrollTrigger.create({
    //             onUpdate: (self) => {
    //                 let skew = self.getVelocity() / -10;
    //                 //console.log(skew);
    //                 if (Math.abs(skew) > Math.abs(proxy.skew)) {
    //                     proxy.skew = skew;
    //                     gsap.to(proxy, {
    //                         skew: 0,
    //                         duration: 1,
    //                         ease: 'linear',
    //                         overwrite: true,
    //                         onUpdate: () => skewSetter(proxy.skew)
    //                     });
    //                 }
    //             }
    //         });
    //     }
    //     // make the right edge "stick" to the scroll bar. force3D: true improves performance
    //     gsap.set("#works", {
    //         //transformOrigin: "center center",
    //         force3D: true
    //     });
    //     skewAnimation()

    // },[])
    return(
        <WorkPage bgColor={pageInfo.bgColor} className="work">
            <Introduction imgUrl={pageInfo.Text.imageUrl}
                heading ={pageInfo.Text.heading} 
                headingColor={pageInfo.Text.headingColor} 
                btnColor={pageInfo.Text.btnColor}
                alt={pageInfo.Text.alt} scrollTo={scrollTarget} 
            /> 
            <Container>
                <CenterColumn style={{ paddingTop: '25px' ,margin: '20px 0'}}>
                    <WorkList workList = {projects} />
                </CenterColumn>
            </Container>
            
            {/* <section ref={scrollTarget} style={{position:"relative",minHeight: "100vh",textAlign:"center" }}>
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
                        id = 'works'
                    />
                </div>
            </section> */}
        </WorkPage >
    )
} 

export default Work