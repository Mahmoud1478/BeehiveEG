import React from 'react'
import{NavLink} from 'react-router-dom'

const NavItem = (props) => {
    return(
        <NavLink id ={props.id}  exact to={props.href} onClick = {()=>{
            document.querySelector('body').style.overflow="hidden"
            document.querySelector('body').style.backgroundColor = props.function(props.href)
        }} style={props.elementstyle}>{props.name}</NavLink>
    )
}
export default NavItem