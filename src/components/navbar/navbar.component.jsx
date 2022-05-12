
import './style.css'
import {useEffect , useRef,useState } from 'react'
import './../css/animations.css'
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faWhatsapp,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp  } from '@fortawesome/free-solid-svg-icons'
import{HeaderSection ,NavigationBarLg,NavBtn,NavigationBtn,Social,MobileMenuFooter,MobileMenu,MobileMenuFooterTitle,MobileMenuList,MobileNavBtn} from './navbar.component.styles'
import navItemsInfo from "../../configrations/navItemsinfo"
import { gsap,Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const navitem = navItemsInfo

const Navbar = ()=>{
    const navElements = useRef(null)
    const contact = useRef(null)
    const header = useRef(null)
    navElements.current = []
    const scrollToElement = useRef(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const addRef = (ele)=>{
        if(ele && ! navElements.current.includes(ele) ){
            navElements.current.push(ele)
        }
    }
    const navLinks = navitem.map((l,i)=>{
        return(
            <li key ={l.id} className="nav_item" ref = {addRef} >
                <NavigationBtn exact={l.exact} to={l.href} onClick={(e)=>{
                }}> {l.name}  </NavigationBtn>
            </li>
        );
    })
    const scrollUp =()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    useEffect(()=>{
        if(windowWidth < 768){
            scrollToElement.current.style.display = 'none'
            contact.current.style.display = 'none'
            return false
        }
        if (window.scrollY >105){
            scrollToElement.current.style.display = 'block'
        }else{
            contact.current.style.display = 'block'
        }
    })
    useEffect(()=>{
        
        if(window.innerWidth > 768 ){
            gsap.from(navElements.current ,{opacity:0 , y : -100 , ease:Power1.easeInOut ,duration:1 ,stagger:.2 } );
            gsap.from(contact.current ,{opacity:0 , y : -100 , ease:Power1.easeInOut ,duration:1 } ); 
            
        }
        
    },[])
    useEffect(()=>{
        ScrollTrigger.matchMedia({
            '(min-width:768px)':function(){
                ScrollTrigger.create({
                    trigger:'#body',
                    scroller:window,
                    start : '105px top', 
                    end:'105px top' ,
                    onEnter: ()=>{
                        gsap.to(contact.current ,
                            {
                                opacity:0 ,    y : -100 , 
                                ease:Power1.easeInOut ,
                                duration:.3 , 
                                onComplete:()=>{
                                    contact.current.style.display = 'none'
                                    scrollToElement.current.style.display = 'block'
                                    gsap.to(scrollToElement.current ,{opacity:1 , y : 0 , ease:Power1.easeInOut ,duration:.5,})
                                }
                            } 
                        );
                    },
                    onEnterBack:()=>{
                        gsap.to(scrollToElement.current ,
                            {
                                opacity:0 , y : -100 ,
                                ease:Power1.easeInOut ,
                                duration:.5 , 
                                onComplete:()=>{
                                    scrollToElement.current.style.display = 'none'
                                    contact.current.style.display = 'block'
                                    gsap.to(contact.current ,{opacity:1 , y : 0 , ease:Power1.easeInOut ,duration:.3});
                                }
                            } 
                        );
                    }
                })
            }
        })
    },[])
    window.addEventListener('resize',_=>setWindowWidth(window.innerWidth))
    return(
        <HeaderSection className="header" path={window.location.pathname} ref={header}>
            <div className="container">
                <nav>
                    <NavigationBarLg  className='test'>
                        <Link to="/"><img src='images/logo.png' alt= 'logo'/></Link>
                        <MobileNavBtn />
                        <MobileMenu>
                            <MobileMenuList>
                                
                            </MobileMenuList>
                            <MobileMenuFooter>
                                <MobileMenuFooterTitle>GET IN TOUCH</MobileMenuFooterTitle>
                                <Social>
                                    <FontAwesomeIcon icon={faTwitter} size="1x" />
                                    <FontAwesomeIcon icon={faFacebookF} size="1x" />
                                    <FontAwesomeIcon icon={faWhatsapp} size="1x" />
                                </Social>
                            </MobileMenuFooter>
                        </MobileMenu>
                            
                            <ul className="navbar">
                                {navLinks}
                            </ul> 
                            <NavBtn fontLgSize="3.5" bottom="0" ref={scrollToElement} style={{ opacity:0 ,transform:"translateY(-100%)" ,display:'none'}} onClick={scrollUp}> <FontAwesomeIcon icon={faAngleUp} size="1x" /> </NavBtn>    
                            <NavBtn  fontLgSize ="1.2" bottom="-1" ref={contact}> contact </NavBtn>
                    </NavigationBarLg>
                </nav>
            </div>
        </HeaderSection> 
    )
}
export default Navbar