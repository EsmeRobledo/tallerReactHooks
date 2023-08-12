import React from 'react'
import {serviceDropdown} from "./NavItems"
import { Link } from 'react-router-dom'
function Dropdown() {
  return (
    <>
       <ul className="services-submenu">
        {
            serviceDropdown.map(item => {
                return(
                    <li key={item.id}>
                        <Link to={item.path}>{item.titulo}</Link>
                    </li>
                )
            })
        }
        </ul> 
    </>
  )
}

export default Dropdown