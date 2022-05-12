import React ,{createContext , useState ,useEffect,useRef } from "react";
// import NavContext from "./Navigation/NavContext";
import {useLocation} from "react-router-dom";





const RootContext = createContext();

const RootReducer = (prop) => {
    
    const location = useLocation()
    const routes = ["/","/who", "/work" , "/what" ,'/{id}']
    const [currentRouteIndex , setCurrentRouteIndex] = useState(location.pathname)
    const previousRouteIndex =usePrevious(currentRouteIndex)

    return(
        <RootContext.Provider value={{
            currentRouteIndex: currentRouteIndex ,
            setCurrentRouteIndex:setCurrentRouteIndex,
            previousRouteIndex:previousRouteIndex,
            routes :routes

        }}>
            {prop.children}
        </RootContext.Provider>
    )
}


const usePrevious = (state)=>{
    const ref = useRef()
    useEffect(()=>{
        ref.current = state
    })
    return ref.current
}


export default  RootReducer  
export {RootContext}