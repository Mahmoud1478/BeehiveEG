import React, { useState, useEffect } from "react";
import "../../components/css/animations.css";
import "./style.css";
import { IntroPage, RecentWork, PragraphSection } from "./style.js";
import Introduction from "../../components/section-intro/intro.component";
import pages from "../../configrations/pages";
import Pragraph from "../../components/pragraph-section/pragraph-component";
import { axios } from "../../axios";
import { useInView } from "react-hook-inview";
import { Link } from "react-router-dom";

import hero from './intro.png'
const Intro = () => {
  const [animatRotate, setAnimatRotate] = useState("rotate(50deg)");
  const [animatedBgColor, setAnimatedBgColor] = useState("transparent");
  const [imagesClass, setImagesClass] = useState(null);
  const pageInfo = pages.intro;
  const [projects, setProjects] = useState([]);
  const [ref, inView] = useInView({ threshold: 0, unobserveOnEnter: false });
  
  const getProjects = async ()=>{
    const response = await axios.get('/portfolio/intro').catch((Error)=>console.log(Error))
    if(response && response.data) setProjects(response.data.data);  
  }
  useEffect(() => {
    getProjects()
  }, []);
  useEffect(()=>{
    if ( inView )
      {
          setAnimatRotate(null);
          setAnimatedBgColor('#f4dd13');
          setImagesClass("slide-right");
      } 
      else {
          setAnimatRotate("rotate(50deg)");
          setAnimatedBgColor("transparent");
          setImagesClass(null);
      }
  },[inView])
  return (
    <IntroPage bgColor={pageInfo.bgColor} className="intro">
      <Introduction
        imgUrl={hero}
        heading={pageInfo.Text.heading}
        headingColor={pageInfo.Text.headingColor}
        btnColor={pageInfo.Text.btnColor}
        alt={pageInfo.Text.alt}
        scrollTo="#what"
      />
      <PragraphSection id="what">
        <div className="holder">
          <div className="container">
            <Pragraph
              title={pageInfo.Text.pragraphSection.title}
              titleColor={pageInfo.Text.pragraphSection.titleColor}
              body={pageInfo.Text.pragraphSection.body}
              bodyColor={pageInfo.Text.pragraphSection.bodyColor}
              smallBody={pageInfo.Text.pragraphSection.smallBody}
              mobileFontSizeSB={pageInfo.Text.pragraphSection.mobileFontSizeSB}
              smallBodyColor={pageInfo.Text.pragraphSection.smallBodyColor}
              focusOn={pageInfo.Text.pragraphSection.focusOn}
            />
          </div>
        </div>
      </PragraphSection>
      <RecentWork
        className="recentWork"
        animatRotate={animatRotate}
        animatedBgColor={animatedBgColor}
      >
        <div className="container">
          <div className="holder">
            <div className="text">
              <h2>recent work</h2>
        
              <Link ref={ref} >veiw all work</Link>
            </div>
          </div>
          <div className="images">
            {projects.map((product,index) =>(
              <img
                key={index}
                src={product.photo}
                className={imagesClass}
                alt={product.title}
              />
            ))}
          </div>
        </div>
      </RecentWork>
    </IntroPage>
  );
};
export default Intro;
