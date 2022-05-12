import{Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import Intro from './pages/intro/intro.page'
import Work from './pages/work/work.page'
import What from './pages/what/what.page'
import Who from './pages/who/who.page'
import React from 'react'
import './App.css';
import './app.scss';
// import colors from './configrations/colors'
import SlideRoutes from 'react-slide-routes'

// import {AnimatePresence , } from "framer-motion";
import { useLocation  } from 'react-router-dom'  
// import { useContext } from 'react'
// import { RootContext } from './ContextApi/RootContext'
// import Animated from './pages/animated'

const App = ()=>{
    // const pagesColor = colors.pages
    const location = useLocation()
    // const {currentRouteIndex} = useContext(RootContext)
    return(
        <div className="App">
            <Navbar/>
            <SlideRoutes location={location} duration={500} timing="ease-out" pathList={["/","/who", "/work" , "/what"]}>
                <Route exact path="/" component={Intro} />
                <Route path="/who" component={Who}/>
                <Route path="/work" component={Work}/>
                <Route path="/what" component={What}/>
            </SlideRoutes>
            {/* <AnimatePresence  exitBeforeEnter= {true}  initial={false} >
                <Routes location={location} key = {location.pathname}>
                    <Route exact path="/" component={Intro} />
                    <Route path="/who" component={Who}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/what" component={What}/>
                </Routes>
                
            </AnimatePresence> */}
            {/* <div className="slider" style={{ display:'flex' }}>
                <div className="stage">
                    <div className="silder_item" style={{backgroundColor: pagesColor.intro}}></div>
                    <div className="silder_item" style={{backgroundColor: pagesColor.who}}></div>
                    <div className="silder_item" style={{backgroundColor: pagesColor.work}}></div>
                    <div className="silder_item" style={{backgroundColor: pagesColor.what}}></div>
                </div>
            </div> */}
            <Footer/>
        </div>
    )
}
export default App;
