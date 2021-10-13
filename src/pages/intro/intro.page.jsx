import React,{ useRef,useState,useEffect} from "react";
import '../../components/css/animations.css'
import './style.css'
import  {IntroPage, RecentWork,PragraphSection} from'./style.js'
import Introduction from "../../components/section-intro/intro.component";
import pages from "../../configrations/pages";
import Pragraph from "../../components/pragraph-section/pragraph-component";
import axios from "axios";


const Intro =()=>{
    const [animatRotate, setAnimatRotate] = useState("rotate(50deg)");
    const [animatedBgColor, setAnimatedBgColor] = useState("transparent");
    const [ imagesClass, setImagesClass] = useState(null);
    const pageInfo =pages.intro
    const scrollTarget = useRef(null)
    const recentWorkRef = useRef(null)
    const [products, setProducts] = useState([[],[]]);
    const openAllWork = ()=>{
        console.log("Open All work")
    }
    useEffect(() => {
        window.addEventListener("scroll",onScrolling)
        
        return( )=> window.removeEventListener("scroll",onScrolling)
        
    },);
    useEffect(() => {
        async function fetchData(){
            await axios("jsons/API_semi.json").then(res =>{
                setProducts(res.data.intro)
                console.log(res.data.intro);
            })
        }
        fetchData()
        
    },[]);
    const onScrolling = ()=>{
        const responsive = setTimeout(()=>{
            if(window.pageYOffset >= recentWorkRef.current.offsetTop - recentWorkRef.current.offsetTop*.25){
                setAnimatRotate(null)
                setAnimatedBgColor(pageInfo.Text.recentWork.animatedBgColor)
                setImagesClass("slide-right")
            }else{
                setAnimatRotate("rotate(50deg)")
                setAnimatedBgColor("transparent")
                setImagesClass(null)
            }
        },200)
        return()=>{
            clearTimeout(responsive)
        }
    }
    return(
        <IntroPage bgColor={pageInfo.bgColor} className="intro">
            <Introduction imgUrl={pageInfo.Text.imageUrl}
                heading ={pageInfo.Text.heading} 
                headingColor={pageInfo.Text.headingColor} 
                btnColor={pageInfo.Text.btnColor}
                alt={pageInfo.Text.alt} scrollTo={scrollTarget} 
            />
            <PragraphSection ref={scrollTarget}>
                <div className="holder">
                    <div className="container">
                        <Pragraph 
                            title={pageInfo.Text.pragraphSection.title} 
                            titleColor={pageInfo.Text.pragraphSection.titleColor}
                            body={pageInfo.Text.pragraphSection.body}
                            bodyColor = {pageInfo.Text.pragraphSection.bodyColor}
                            smallBody ={pageInfo.Text.pragraphSection.smallBody}
                            mobileFontSizeSB = {pageInfo.Text.pragraphSection.mobileFontSizeSB}
                            smallBodyColor= {pageInfo.Text.pragraphSection.smallBodyColor}
                            pointer ={scrollTarget}
                            focusOn = {pageInfo.Text.pragraphSection.focusOn}
                        />
                    </div>
                </div>
            </PragraphSection>
            <RecentWork 
                className='recentWork' 
                animatRotate ={animatRotate} 
                animatedBgColor={animatedBgColor} 
                ref={recentWorkRef}
            >
                <div className='container'>
                    <div className = 'holder'>
                        <div className = 'text'>
                            <h2>recent work</h2>
                            <button onClick={openAllWork}>veiw all work</button>
                        </div>
                    </div>
                    <div className='images'>
                        {
                            products.map( (product,index) =>(
                                <img
                                key = {index}
                                src={product}
                                className={imagesClass} 
                                alt={pageInfo.Text.recentWork.productOneImageAlt}
                                />
                                
                            ))
                        }
                    </div>
                </div>
            </RecentWork>
        </IntroPage>
    )
} 
export default Intro