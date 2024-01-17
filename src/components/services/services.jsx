import { FaJs, FaVuejs, } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoRedux, BiLogoReact } from 'react-icons/bi';
import { ServicesBox , ServicesSt } from './style';

export const Services = () => {
    return (
        <ServicesSt id="services">
                <h2 className="heading">Technologies that <span> worked </span></h2>

                <div className='services-container'>
                    <ServicesBox>
                        <BiLogoReact/>

                        <h3>React </h3>
                        
                    </ServicesBox>

                    
                    <ServicesBox>
                        <FaJs/>

                        <h3>JavaScript</h3>
                        
                    </ServicesBox>
                    <ServicesBox>
                        <FaVuejs/>

                        <h3>Vue</h3>
                       
                    </ServicesBox>
                    <ServicesBox>
                        <BiLogoTypescript/>

                        <h3>TypeScript</h3>
                       
                    </ServicesBox>
                    
                    <ServicesBox>
                        <BiLogoRedux/>

                        <h3>Redux</h3>
                       
                    </ServicesBox>
                </div>
        </ServicesSt>
    )
}