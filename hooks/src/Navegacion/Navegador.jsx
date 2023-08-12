import React, { useState } from 'react'
import * as Icons from 'react-icons/fa'
import {navItems} from './NavItems'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'
import Button from './Button'

function Navegador() {
     const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className='navbar'>
        <Link to="/" className='navbar-logo'>GALERIA 
        <Icons.FaTree/>
        </Link>
        <ul className='nav-items'>
            {navItems.map(item => {
                 if(item.titulo === 'Services'){
                    return(
                   
                        <li key={item.id} className={item.cName} onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                        <Link to={item.path} >{item.titulo}</Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    )
                    
                }
                return(
                    <li key={item.id} className={item.cName}>
                    <Link to={item.path}>{item.titulo}</Link>
                </li>
                )
               
            })}
        </ul>
        <Button/>
        </nav>  
       
    </>
  )
}

export default Navegador