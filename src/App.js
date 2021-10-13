import{Route , useLocation,} from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Footer from './components/footer/footer.component'
import Intro from './pages/intro/intro.page'
import Work from './pages/work/work.page'
import What from './pages/what/what.page'
import Who from './pages/who/who.page'
import React, {useState,} from 'react'
import './App.css';
import './app.scss';
import colors from './configrations/colors'
import SlideRoutes from 'react-slide-routes'



const App = ()=>{
  const pagesColor = colors.pages
  const location =  useLocation()
  const [translate, setTranslate] = useState(0);
  const updateSlider = (value)=>{
    setTranslate(value)
  }
  return(
    <div className="App">
      <Navbar updateSlider = {updateSlider} /*setLang={setLangue}*/ />
      <SlideRoutes location={location} duration={2000} timing="ease-out" pathList={["/","/who", "/work" , "/what"]}>
        <Route exact path="/" component={Intro} />
        <Route path="/who" component={Who}/>
        <Route path="/work" component={Work}/>
        <Route path="/what" component={What}/>
      </SlideRoutes>
      <div className="slider" >
        <div className="stage" style={{transform:`translateX(-${ 100 *  translate}vw)`}}>
          <div className="silder_item" style={{ backgroundColor:pagesColor.intro }}></div>
          <div className="silder_item" style={{ backgroundColor:pagesColor.who }}></div>
          <div className="silder_item" style={{ backgroundColor:pagesColor.work }}></div>
          <div className="silder_item" style={{ backgroundColor:pagesColor.what }}></div>
        </div>
      </div>
      <Footer /> 
    </div>
  )
}
export default App;
