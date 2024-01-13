import {AiOutlineMenu} from 'react-icons/ai';
import { BiXCircle} from 'react-icons/bi';
import { Nav, Navbar } from "./style";
import { useState } from 'react';


export const Header = () => {


    const [ menu, setMenu ] = useState(true);
    const [ bx, setBx ] = useState(false);

    const [ id, setId ] = useState('')


    return (
        <Navbar  >

        <a href="#" className="logo" >Portifólio</a>

        {
            menu === true && (<AiOutlineMenu id='menu-icon'  onClick={() => setMenu(!menu) & setBx(!bx) } /> ) 
        }

        {        
            bx === true && (<BiXCircle className='bx-x'  onClick={() => setBx(!bx) & setMenu(!menu) }  /> )   
        }
       
 
                <Nav bx={bx} >
                    <li><a href="#home" onClick={() => setBx(!bx) & setMenu(!menu) } >Home</a></li>
                    <li><a href="#about"  onClick={() => setBx(!bx) & setMenu(!menu) }>About</a></li>
                    <li><a href="#services"   onClick={() => setBx(!bx) & setMenu(!menu) }>Services</a></li>
                    <li><a href="#projects"  onClick={() => setBx(!bx) & setMenu(!menu) }>Projects</a></li>
                    <li><a href="#contato" onClick={() => setBx(!bx) & setMenu(!menu) } >Contact</a></li>
                </Nav>

        </Navbar>
    )
}