import { useState } from "react";
import { Card, CardContainer } from "./style";
import { FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa';

export const Contact = () => {

    const display = {
        hidde: 'none',
        view: 'block'
    }

    const [ linkedin, setLinkedin ] = useState(display.hidde);
    const [ telegram, setTelegram ] = useState(display.hidde);
    const [ whatsapp, setWhatsapp ] = useState(display.hidde);

    const handleClickLinkedin = () => {
            if (linkedin === display.hidde) {
                setLinkedin(display.view)
                setWhatsapp(display.hidde),
                setTelegram(display.hidde)
            }
    }

    const handleClickTelegram = () => {
        if (telegram === display.hidde) {
            setTelegram(display.view)
            setWhatsapp(display.hidde),
            setLinkedin(display.hidde)
        }
}

const handleClickWhatsapp = () => {
    if (whatsapp === display.hidde) {
        setWhatsapp(display.view),
        setLinkedin(display.hidde)
        setTelegram(display.hidde)
    }
}

    return (

        <section id="contact">

            <h2 className="heading">Contact <span>Me!</span></h2>

         <CardContainer >
            

            <Card visible={linkedin} id="linkedin">

            <div className="card-content">

               <FaLinkedin/>
                <h2>Linkedin</h2>
                <p>
                    Para entrar em contato basta clicar no botão abaixo
                </p>

                <a href="#">Mande uma mensagem</a>
            </div>
            </Card>

            <Card  visible={telegram}  id="telegram">

            <div className="card-content">
                <FaTelegram/>
                <h2>Telegram</h2>
                <p>
                    Para entrar em contato basta clicar no botão abaixo
                </p>

                <a href="#">Mande uma mensagem</a>
            </div>
            </Card>

            <Card  visible={whatsapp} id="whatsapp">

                <div className="card-content">

            <FaWhatsapp/>

                <h2>Whatsapp</h2>

                <p>
                    Para entrar em contato basta clicar no botão abaixo
                </p>

                <a href="#">Mande uma mensagem</a>

                </div>
            </Card>

            <ul>
                <li><buttom
                 onClick={() => handleClickLinkedin()}
                ><FaLinkedin/></buttom></li>
                <li><buttom  onClick={() => handleClickTelegram()}><FaTelegram/></buttom></li>
                <li><buttom  onClick={() => handleClickWhatsapp()}><FaWhatsapp/></buttom></li>
            </ul>
            
         </CardContainer>   
        </section>
    )
}