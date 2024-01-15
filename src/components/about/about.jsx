
import { ContainerAbout, HomeSection, SocialMedia} from "./style";
import { FaLinkedin , FaGithub , FaTelegram } from 'react-icons/fa';
import home  from '../../assets/home.jpg';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const About = () => {

      const ref =useRef(null);

      useEffect(() => {
        const typed = new Typed(ref.current, {
          strings: ['Frontend Developer', 'Desenvolvedor Front-end'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
         
        })

        return () => {typed.destroy()}
      } )


    return (
        <>

        <HomeSection id="home">

            <div className="home-content">

            <h3 className="first-h3">Olá , eu me chamo </h3>

            <h1>Ivo Ryan</h1>

            <h3>E sou um <span ref={ref}></span> </h3>

            <p>
                Olá! sou um desenvolvedor front end em formação! Me apaixonei pela área , hoje em dia me sinto capacitado para agregar em qualquer time , contribuindo com minhas habilidades . Sigo sempre buscando o aprimoramento com novos desafios , atualmente conclui o Curso do DevQuest com mentorias em grupo . O curso é focado em front-end e têm uma comunidade bem grande , que contribui muito com quem está iniciando.
            </p>

            <SocialMedia>
                <a href="#"><FaGithub/></a>
                <a href="#"><FaLinkedin/></a>
                <a href="#"><FaTelegram/></a>
            </SocialMedia>

            <a href="#" className="bth">Dowload CV</a>

            </div>

            <div className="home-img">
                <img src={home} alt="imagem" />
            </div>
           
        </HomeSection>




        <ContainerAbout id="about">

          <div className="about-img">
                    <img src={home} alt="" />
            </div>  



            <div className="about-content"
               
            >

            <h2 className="heading">About <span>Me</span></h2>

            <h3>Desenvolvedor Front-end!</h3>

             <p>
                Ah , gosto bastante de jogos , a minha preferência são pelos jogos de tiro e ação , já as séries somente algumas acabram me cativando como , Sobrenatural e One Piece , sou muito otaku já maratonei diversos animes , e tenho como preferência One Piece e Jujutsu Kaisen além de outras nerdices😁 . Também gosto muito de esportes , atualmente jogo futebol de salão duas vezes por semana.
            </p>

            <p>
                Ah , gosto de quase todos os tipos de filmes  de ação/ficção , principalmente se forem relacionados a tecnologia e animes, não curto filmes de terror principalmente aqueles baseados em fatos reais.
            </p>

            <a href="#" className="bth">Read More</a>
            </div>

        </ContainerAbout>
        </>
    )
}