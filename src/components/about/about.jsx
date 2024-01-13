
import { AboutContent, AboutImg, ContainerAbout, HomeImg, HomeSection, SocialMedia} from "./style";
import { FaLinkedin , FaGithub , FaTelegram } from 'react-icons/fa';
import home  from '../../assets/home.png';
import { useRef, useEffect } from "react";
import { useAnimation, motion, useInView } from "framer-motion";

export const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation()
  
    useEffect(() => {
      if (isInView) {
        mainControls.start("visible")
      }
    } ,[isInView]);

    return (
        <>

        <HomeSection id="home">

            <motion.div className="home-content"
                variants={{
                hidden: {opacity: 0, x: -85},
                visible: {opacity:1, x: 0}
              }}
    
              initial= "hidden"
              animate={mainControls}
              transition={{duration: 0.8, delay: 0.25}}
              ref={ref}
            >

            <h2>Olá , eu me chamo </h2>
            <h1>Ivo Ryan</h1>

            <h3>E sou um <span>Desenvolvedor Front-end</span> </h3>

            <p>
                Olá! sou um desenvolvedor front end em formação! Me apaixonei pela área , hoje em dia me sinto capacitado para agregar em qualquer time , contribuindo com minhas habilidades . Sigo sempre buscando o aprimoramento com novos desafios , atualmente conclui o Curso do DevQuest com mentorias em grupo . O curso é focado em front-end e têm uma comunidade bem grande , que contribui muito com quem está iniciando.
            </p>

            <SocialMedia>
                <a href="#"><FaGithub/></a>
                <a href="#"><FaLinkedin/></a>
                <a href="#"><FaTelegram/></a>
            </SocialMedia>

            <a href="#" className="bth">Dowload CV</a>

            </motion.div>

            <HomeImg>
                <img src={home} alt="imagem" />
            </HomeImg>
           
        </HomeSection>

        <ContainerAbout id="about">

          <AboutImg>
                    <img src={home} alt="" />
            </AboutImg>  

       
        <AboutContent>

            <h2 className="heading">About <span>Me</span></h2>

            <h3>Desenvolvedor Front-end!</h3>

             <p>
                Ah , gosto bastante de jogos , a minha preferência são pelos jogos de tiro e ação , já as séries somente algumas acabram me cativando como , Sobrenatural e One Piece , sou muito otaku já maratonei diversos animes , e tenho como preferência One Piece e Jujutsu Kaisen além de outras nerdices😁 . Também gosto muito de esportes , atualmente jogo futebol de salão duas vezes por semana.
            </p>

            <p>
                Ah , gosto de quase todos os tipos de filmes  de ação/ficção , principalmente se forem relacionados a tecnologia e animes, não curto filmes de terror principalmente aqueles baseados em fatos reais.
            </p>

            <a href="#" className="bth">Read More</a>
        </AboutContent>

        </ContainerAbout>
        </>
    )
}