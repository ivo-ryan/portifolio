import {AiOutlineMenu} from 'react-icons/ai';
import { BiXCircle} from 'react-icons/bi';
import { Nav, Navbar } from "./style";
import { useState } from 'react';


export const Header = () => {

    const viewDisplay = {
        view: 'block',
        hidde: 'none'
    }

    const [ menu, setMenu ] = useState(true);
    const [ bx, setBx ] = useState(false);
    const [ display, setDisplay ] = useState(viewDisplay.hidde)
   
    const handleClickMenu = () => {
        if (menu === true) {
            setMenu(false);
            setBx(true);
            setDisplay(viewDisplay.view)
        }

        if (bx === true) {
            setBx(false);
            setMenu(true);
            setDisplay(viewDisplay.hidde)
        }
    }

    return (
        <Navbar  >

        <a href="#" className="logo" >Portfólio</a>

        {
            menu === true && (<AiOutlineMenu id='menu-icon'  onClick={() => handleClickMenu() } /> ) 
        }

        {        
            bx === true && (<BiXCircle className='bx-x'  onClick={() => handleClickMenu() }  /> )   
        }
       
 
                <Nav display={display} >
                    
                    <li><a href="#home" onClick={() => handleClickMenu() } >Home</a></li>
                    <li><a href="#about"  onClick={() => handleClickMenu() }>About</a></li>
                    <li><a href="#services"   onClick={() => handleClickMenu() }>Services</a></li>
                    <li><a href="#projects"  onClick={() => handleClickMenu() }>Projects</a></li>
                    <li><a href="#contact" onClick={() => handleClickMenu() } >Contact</a></li>
                </Nav>

        </Navbar>
    )
}