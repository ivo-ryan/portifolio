import { FaArrowUp } from "react-icons/fa";
import { FooterText, FooterSt, FooterIconTop } from "./style";

export const Footer = () => {
    return (
        <FooterSt>
            <FooterText>
                <p>Copyright &copy; 2024 by Ivo Ryan | All Rights Reserved</p>
            </FooterText>
            <FooterIconTop>
                <a href="#home"><FaArrowUp/></a>
            </FooterIconTop>


            
        </FooterSt>
    )
}