import{Route} from 'react-router-dom'
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
import 'bootstrap/dist/css/bootstrap.min.css';
// import {AnimatePresence , } from "framer-motion";
import { useLocation  } from 'react-router-dom'  
import { Project } from './pages/project/Project'
// import { useContext } from 'react'
// import { RootContext } from './ContextApi/RootContext'
// import Animated from './pages/animated'

const App = ()=>{
    const location = useLocation()
    return(
        <div className="App">
            <Navbar/>
            <SlideRoutes location={location} duration={500} timing="ease-out" pathList={["/","/who", "/work" , "/what"]}>
                <Route exact path="/" component={Intro} />
                <Route path="/who" component={Who}/>
                <Route exact path="/work" component={Work}/>
                <Route path="/what" component={What}/>
                <Route path="/work/:id" component={Project}/>
            </SlideRoutes>
            <Footer/>
        </div>
    )
}
export default App;
