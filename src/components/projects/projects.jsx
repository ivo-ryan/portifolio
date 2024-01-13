import { BiLinkExternal } from "react-icons/bi";
import { Portifolio, PortifolioBox, PortifolioContainer, PortifolioLayer } from "./style";
import Code from '../../assets/code.webp';

export const Projects = () => {


    return (
        <Portifolio id="projects">
            <h2 className="heading">Latest <span>project</span></h2>

            <PortifolioContainer >
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
                

            </PortifolioContainer>

        </Portifolio>
    )
}