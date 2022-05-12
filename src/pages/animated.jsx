import React,{useContext} from 'react'
import {motion} from "framer-motion";
import { RootContext } from '../ContextApi/RootContext';

const Animated = (props) => {
    const {currentRouteIndex , previousRouteIndex ,routes} = useContext(RootContext)
    return (
        <motion.div className='page-container' initial = 'enter' animate = 'in' exit= ' exit' custom={currentRouteIndex}
            transition={{duration:5}}
            variants = {{ 
                enter:{x:routes.indexOf(currentRouteIndex) < routes.indexOf( previousRouteIndex) ?'100vw' :'-100vw', },
                in:{x:0 ,},
                // exit:(_currentRouteIndex)=>({x:routes.indexOf(_currentRouteIndex )> routes.indexOf(currentRouteIndex) ?'100vw' :'-100vw',}),
                exit: {opacity:0}
            
            }}
        >
            {props.children}
        </motion.div>
    )
}

export default Animated