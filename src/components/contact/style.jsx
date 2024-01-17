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

        .select{ 
            display: flex;
            gap: 3rem;
            list-style: none;
            margin-top: 7% ;
            

            li{
                button{
                    display: inline-flex; 
                    align-items: center;
                    justify-content: center;               
                    border: 0.2rem solid var(--main-color); 
                    border-radius: 50%;
                    color: var(--main-color);
                    width: 4.5rem;
                    height: 4.5rem;
                    cursor: pointer; 
                    background-color: transparent;
                    transition: all .5s ease-in;

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

        
`;


export const Card = styled.div`
        height: 50%;
        width: 60%;
        display: ${props => props.visible};  
       
        

        .card-content{
            display: flex;
            align-items: center;
            flex-direction: column;          
            gap: 2rem;
            border: 0.2rem solid var(--text-color);
            border-radius: 2rem;
            padding:  2rem ;
            background: ${props => props.background } ;

            h2{
                font-size: 3rem;
                color: var(--bg-color) ;
            }
    
            p{
                font-size: 1.6rem;
            }
    
            svg{
                font-size: 8rem;
                animation: up 3s ease-in alternate infinite;

                @keyframes up {
                    to{
                        transform: translateY(15px);
                    }
                }
            }

            a{  
                display: inline-block;
                    padding: 1rem 2.8rem;
                    background-color: var(--main-color);
                    border-radius: 4rem;
                    box-shadow: 0 0 1rem var(--second-bg-color);
                    text-decoration: none;
                    color: var(--second-bg-color);
                    letter-spacing: .1rem;
                    font-weight: 800;
                    font-size: 1.6rem ;
                    transition: .5s ease-in;
    

                &:hover{
                    color: var(--bg-color);
                    box-shadow: none;
                    
                }
            }

        }

        @media (max-width: 425px) {

            width: 80%;

            .card-content{

             h2{
                 font-size: 2rem ;
             }

             svg{
                 font-size: 6rem;
             }

             p{
                 text-align: center;
             }
             
            } 
             
         }

       

       
`;