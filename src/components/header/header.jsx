import {AiOutlineMenu} from 'react-icons/ai'
import { Navbar, Ul } from "./style";


export const Header = () => {

    //const active = document.querySelectorAll(' #nav a ');
    //console.log(active);


    return (
        <Navbar>

        <a href="#" className="logo" >Portifólio</a>

        <AiOutlineMenu id='menu-icon'/>

            <nav >  
                <Ul id='nav'>
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contato">Contact</a></li>
                </Ul>
            </nav>
        </Navbar>
    )
}