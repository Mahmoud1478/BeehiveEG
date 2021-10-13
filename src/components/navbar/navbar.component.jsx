import React, { createRef } from "react"
import './style.css'
import './../css/animations.css'
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/*import { faFacebookMessenger,faGooglePlay, faInstagram ,faInstagramSquare,faTwitter,faTwitterSquare,faLinkedin,faLinkedinIn,faWhatsapp,faWhatsappSquare,faFacebookSquare,
    faFacebook, faFacebookF ,faYoutube,faYoutubeSquare,faTiktok,faSnapchat,faSnapchatGhost,faSnapchatSquare,faTelegram,faTelegramPlane,faAppStore,faAppStoreIos
} from '@fortawesome/free-brands-svg-icons';*/
import { faTwitter,faWhatsapp,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp  } from '@fortawesome/free-solid-svg-icons'
import{HeaderSection ,MobileMenuList, MobileMenuFooterTitle,MobileNavLink,Social,MobileMenuFooter,MobileMenuListItem,NavigationBtn,NavigationBarLg,NavBtn,MobileNavBtn,MobileMenu} from './navbar.component..styles'
import colors from '../../configrations/colors'
import navItemsInfo from "../../configrations/navItemsinfo"



class Navbar extends React.Component{
    state = {
        navitem :navItemsInfo,
        navNormalClass:"fade-in",
        navOnScrolClass:"slide-down",
        scrollNavVisibility:false,
        liAnimation:null,
        scrollBtnAnimation:null,
        visibility: "hidden",
        moble:false,
        mobileNav:window.innerWidth < 992 ? true :false
    }
    map = {}
    currentIndex = 0
    constructor(props){
        super(props)
        this.pagesColor = colors.pages
        this.navbarElemnt = createRef()
        this.body = document.querySelector('body')
        this.openTheMenu.bind(this);
        this.MobileLinksClick.bind(this);
        this.onScroll.bind(this)
        this.showScrollNav.bind(this)
        this.hideScrollNav.bind(this)
        this.navClick.bind(this)
        this.onResize.bind(this)
        navItemsInfo.forEach((nav,index)=>{
            this.map[nav.href] = index
        })
        this.currentIndex = this.map[window.location.pathname]
        this.props.updateSlider(this.currentIndex)
    }
    componentDidMount(){
        this.navbar = document.querySelector('#nav-normal ul')
        this.header = document.querySelector('header')
        this.onScroll()
        this.onResize()
    }
    //######################################################################### start functions section ########################################################################################
    openTheMenu = ()=>{
        if (this.body.classList.contains('transiting')){
            this.body.classList.remove('transiting')
        }else{
            this.body.classList.add('transiting')
        }
        this.setState({
            moble: !this.state.moble
        })
    }
    MobileLinksClick = ()=>{
        this.setState({
            moble: !this.state.moble
        })
        this.navClick()
    };
    showScrollNav = ()=>{
        this.setState({
            scrollNavVisibility:true,
            visibility:"visible",
        })
    }
    hideScrollNav = ()=>{
        this.setState({
            scrollNavVisibility:false,
            visibility: "hidden",
        })
        
    }
    onScroll = ()=>{
        window.addEventListener('scroll',()=>{
            const resrponsiv= setTimeout(()=>{
                if(window.pageYOffset>0){
                    //this.header.classList.add('fixed')
                    this.setState({
                        navNormalClass:"slide-up",
                        navOnScrolClass:"slide-down",
                        visibility:"visible",
                        liAnimation:this.showScrollNav,
                        scrollBtnAnimation:null,
                    })
                }else{
                    //this.header.classList.remove('fixed')
                    this.setState({
                        navNormalClass:"slide-down",
                        navOnScrolClass:"slide-up",
                        liAnimation:null,
                        visibility: "hidden",
                        scrollBtnAnimation:this.hideScrollNav,
                    })
                }
                
        },200)
            return()=>{
                clearTimeout(resrponsiv)
            }
            })
    }
    onResize = ()=>{
        window.addEventListener("resize",()=>{
            if (window.innerWidth > 992){
                this.setState({
                    mobileNav:false,
                })
            }else{
                this.setState({
                    mobileNav:true,
                })
            }
        })
    }
    findnNavBgColor = (path)=>{
        switch (path) {
            case "/":
                return this.pagesColor.intro
            case "/work":
                return this.pagesColor.work
            case "/who":
                return this.pagesColor.who
            case "/what":
                return this.pagesColor.what
            default:
                return "transparent";
        }
    }
    navClick = ()=>{
        document.body.classList.add("transiting")
        setTimeout(()=>{
            document.body.classList.remove("transiting")
        },2000)
    }
    scrollUp =()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    MobileLinks = this.state.navitem.map((l)=>{
        return(
            <MobileMenuListItem key ={l.id}><MobileNavLink to ={l.href} onClick={this.MobileLinksClick} >{l.name}</MobileNavLink></MobileMenuListItem>
        );
    })
     //######################################################################### end functions section ########################################################################################
    render(){
        const navLinks = this.state.navitem.map((l,i)=>{
            return(
                <li key ={l.id} className={`nav_item  ${this.state.navNormalClass}`} style={{animationDelay:  l.id * .3 + "s",visibility:this.state.visibility}} ref={this.navbarElemnt}
                onAnimationEnd={this.state.navitem.length-1 === i ?this.state.liAnimation:null}>
                    <NavigationBtn exact={l.exact} to={l.href} onClick={(e)=>{
                        this.navClick()
                        const index = e.target.getAttribute("data-index")
                        this.currentIndex = index
                        this.props.updateSlider(index)
                        
                    }} style={{transitionDelay : .1 * l.id + "s"}} data-index ={i} > {l.name} </NavigationBtn>
                </li>
            );
        })
        return(
            <HeaderSection className="header fixed" path={window.location.pathname}>
                <div className="container">
                    <nav>
                        <NavigationBarLg  className='test'>
                            <Link to="/"><img src='images/logo.png' alt= 'logo'/></Link>
                            {this.state.mobileNav?
                                <>
                                    <MobileNavBtn active ={this.state.moble} onClick={this.openTheMenu}/>
                                    <MobileMenu active ={this.state.moble}>
                                    <MobileMenuList>
                                        {this.MobileLinks}
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
                                </>
                                :
                                this.state.scrollNavVisibility ?
                                    <NavBtn className={this.state.navOnScrolClass} ref={this.navbarElemnt} onClick={this.scrollUp} onAnimationEnd ={this.state.scrollBtnAnimation} fontLgSize="3.5" bottom="0"> <FontAwesomeIcon icon={faAngleUp} size="1x" /> </NavBtn>
                                    :
                                        <>
                                        <ul className="navbar">
                                            {navLinks}
                                        </ul> 
                                        <NavBtn  className={this.state.navNormalClass} style={{ visibility:this.state.visibility} } fontLgSize ="1.2" bottom="-1"> contact </NavBtn>
                                        </>
                                
                            } 
                        </NavigationBarLg>
                    </nav>
                </div>
            </HeaderSection> 
        )
    }
}
export default Navbar