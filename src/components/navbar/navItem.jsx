import React from 'react'
import{NavLink} from 'react-router-dom'

const NavItem = (props) => {
    return(
        <NavLink id ={props.id}  exact to={props.href}>{props.name}</NavLink>
    )
}
export default NavItem