import React from 'react'
import{Link} from 'react-router-dom'
const NavItemN = (props) => {
    
    return(
        <Link id ={props.id} to={props.href} onClick = {props.func}>{props.name}</Link>
    )
}
export default NavItemN