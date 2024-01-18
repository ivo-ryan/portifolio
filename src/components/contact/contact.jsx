import { useState } from "react";
import { Card, CardContainer } from "./style";
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';

export const Contact = () => {

    const display = {
        hidde: 'none',
        view: 'block',
    }

    const background = {
        linkedin: '#0A66C2',
        whatsapp: '#32D670'
    }

    const [ linkedin, setLinkedin ] = useState(display.view);
    const [ telegram, setTelegram ] = useState(display.hidde);
    const [ whatsapp, setWhatsapp ] = useState(display.hidde);
    const [ backColor, setBackColor ] = useState(background.linkedin)

    const handleClickLinkedin = () => {
            if (linkedin === display.hidde) {
                setLinkedin(display.view);
                setWhatsapp(display.hidde);
                setTelegram(display.hidde);
                setBackColor(background.linkedin)
            }
    }

    const handleClickTelegram = () => {
        if (telegram === display.hidde) {
            setTelegram(display.view);
            setWhatsapp(display.hidde);
            setLinkedin(display.hidde);
            setBackColor(background.linkedin)
        }
}

const handleClickWhatsapp = () => {
    if (whatsapp === display.hidde) {
        setWhatsapp(display.view),
        setLinkedin(display.hidde)
        setTelegram(display.hidde)
        setBackColor(background.whatsapp)
    }
}



    return (

        <section id="contact">

            <h2 className="heading">Contact <span>Me!</span></h2>

         <CardContainer className="card" >
            

            <Card visible={linkedin}  background={backColor}>

            <div className="card-content">

               <FaLinkedin/>
                <h2>Linkedin</h2>
                <p>
                    Para entrar em contato basta clicar no botão abaixo
                </p>

                <a href="https://www.linkedin.com/in/ryan-bastos-a0a8262a7/" target="_blank" >Ver perfil!</a>
            </div>
            </Card>

            <Card  visible={telegram}  background={backColor}>

            <div className="card-content">
                <FaTelegram/>
                <h2>Telegram</h2>
                <p>
                    Para entrar em contato basta clicar no botão abaixo
                </p>

                <a href="https://t.me/ivo_ryan" target="_blank" >Iniciar conversa!</a>
            </div>
            </Card>

            <Card  visible={whatsapp} background={backColor} >

                <div className="card-content">

            <FaWhatsapp/>

                <h2>Whatsapp</h2>

                <p>
                    Para entrar em contato basta clicar no botão abaixo
                </p>

                <a href="https://wa.me/5563992644269?text=OI%C3%A1%20Ryan%20,%20acabei%20de%20%20ver%20seu%20portifólio%20e%20queria%20conversar!" target="_blank">Iniciar conversa!</a>

                </div>
            </Card>

            <ul className="select">
                <li>
                    <button
                 onClick={() => handleClickLinkedin()}
                ><FaLinkedin/></button>
                </li>
                <li>
                    <button  onClick={() => handleClickTelegram()}><FaTelegram/></button>
                    </li>
                <li>
                    <button  onClick={() => handleClickWhatsapp()}><FaWhatsapp/></button>
                </li>
            </ul>
            
         </CardContainer>   
        </section>
    )
}