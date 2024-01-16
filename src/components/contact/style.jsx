import { styled } from 'styled-components';


export const CardContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        height: 80vh;

        h2{
            color: var(--main-color);
        }

        a{
            color: var(--text-color);
            text-decoration: none;
        }

        ul{ 
            display: flex;
            gap: 3rem;
            list-style: none;
            

            li{
                buttom{
                    display: inline-flex; 
                    align-items: center;
                    justify-content: center;               
                    border: 0.2rem solid var(--main-color); 
                    border-radius: 50%;
                    color: var(--main-color);
                    width: 4.5rem;
                    height: 4.5rem;
                    cursor: pointer; 

                    &:hover{
                        background-color: var(--main-color);
                        color: var(--second-bg-color);
                        box-shadow: 0 0 1rem var(--main-color);
                    }
                    
                    svg{
                        font-size: 2.3rem ; 
                    }
            }
        }

        #telegram,#linkedin{
            background-color: #0A66C2 ;
        }

        #whatsapp{
            background: #32D670;
        }
        
`;


export const Card = styled.div`
        height: 50%;
        width: 70%;
        display: ${props => props.visible};
        border: 0.2rem solid var(--text-color);
        padding:  2rem ;
        border-radius: 2rem;
        
        
      

        .card-content{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 3rem;
            h2{
                font-size: 3rem;
            }
    
            p{
                font-size: 1.6rem;
            }
    
            svg{
                font-size: 5rem;
            }
        }

       

       
`;