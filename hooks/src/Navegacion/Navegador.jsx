import React, { useState } from 'react'
import * as Icons from 'react-icons/fa'
import {navItems} from './NavItems'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'


function Navegador() {
    const [dropdown, setDropdown] = useState(false);

  return (
    <>
        <nav className='navbar'>
            <Link to="/" className='navbar-logo'>HOME
            <Icons.FaTree/>
            </Link>
            <ul className='nav-items'>
                {
                    navItems.map(item =>{
                        if(item.titulo === "Services"){
                            return(
                                <li key={item.id} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                                <Link to={item.path} className={item.cName}>
                                 {item.titulo}
                                 </Link>
                                {dropdown && <Dropdown/>}  
                             </li>
                            )
                        }

                        return(
                            <li key={item.id} >
                            <Link to={item.path} className={item.cName}>
                             {item.titulo}
                             </Link> 
                         </li>
                        )
                       
                    })
                }
            </ul>
           

        </nav>
    </>
  )
}

export default Navegador