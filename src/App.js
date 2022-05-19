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
import LatestWork from './pages/latestWork/LatestWork'
import { Project } from './pages/project/Project'
// import { useContext } from 'react'
// import { RootContext } from './ContextApi/RootContext'
// import Animated from './pages/animated'

const App = ()=>{
    const location = useLocation()
    return(
        <div className="App">
            <Navbar/>
            <SlideRoutes location={location} duration={500} timing="ease-out" pathList={["/","/who", "/work" , "/what",'/work/latest']}>
                <Route exact path="/" component={Intro} />
                <Route exact path="/who" component={Who}/>
                <Route exact path="/work" component={Work}/>
                <Route exact path="/what" component={What}/>
                <Route exact path="/work/latest" component={LatestWork}/>
                <Route  path="/work/:id" component={Project}/>
            </SlideRoutes>
            <Footer/>
        </div>
    )
}
export default App;
