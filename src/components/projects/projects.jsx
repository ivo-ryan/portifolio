import { BiLinkExternal } from "react-icons/bi";
import { Portifolio, PortifolioBox, PortifolioLayer } from "./style";
import Code from '../../assets/code.webp';
import Pokedex from '../../assets/pokedex.gif';


export const Projects = () => {

    ScrollReveal({
        duration: 1500,
        delay: 200,
        distance: "50px"
    });

        ScrollReveal().reveal(".portifolio-container",{origin: 'left'})

    return (
        <Portifolio id="projects">
            <h2 className="heading">Latest <span>project</span></h2>

            <div  
       
           className="portifolio-container">
                <PortifolioBox >
                    <img src={Pokedex} alt="" />

                    <PortifolioLayer className="portifolio-layer" >
                    <h4>web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem minima assumenda </p>

                <a href="#"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>


                <PortifolioBox >
                    <img src={Code} alt="" />

                    <PortifolioLayer className="portifolio-layer" >
                    <h4>web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem minima assumenda </p>

                <a href="#"><BiLinkExternal/></a>
                    </PortifolioLayer>            
                </PortifolioBox>

   
                <PortifolioBox >
                <img src={Code} alt="" />
                
                <PortifolioLayer className="portifolio-layer">
                    <h4>web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem minima assumenda blanditiis veniam. Quos eaque unde, </p>

                <a href="#"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>



                <PortifolioBox >
                <img src={Code} alt="" />
                  
                <PortifolioLayer className="portifolio-layer" >
                    <h4>web Design</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolorem minima assumenda blanditiis veniam. Quos eaque unde, </p>

                <a href="#"><BiLinkExternal/></a>
                    </PortifolioLayer>
                </PortifolioBox>
                

            </div>

        </Portifolio>
    )
}