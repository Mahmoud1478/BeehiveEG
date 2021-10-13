import React,{useState} from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,  } from '@fortawesome/free-solid-svg-icons'

import {} from './langBall.styles'
import './langBall.styles.scss'

const LangBall = ()=>{
    const [menu, setMenu] = useState({opened:false});
    const openMenue = ()=>{
        setMenu({opened:!menu.opened})
    }
    const saveLang = (e)=>{
        localStorage.setItem("lang", e.target.getAttribute("data-lang").toString())
    }
    return(
        <div className="lang">
            <button className="lag_btn"  onClick={openMenue}>
            <FontAwesomeIcon icon={faGlobe}/></button>
            <ul className={`lang_list ${menu.opened&&"active"}`}>
                <li><button data-lang ="en" onClick={saveLang}>English</button></li>
                <li><button data-lang ="ar" onClick={saveLang} >Arabic</button></li>
            </ul>
        
        </div>
        
    )
}
export default LangBall
