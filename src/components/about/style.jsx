import styled from 'styled-components';


export const HomeSection = styled.section`
            display: flex;
            justify-content: center;
            align-items: center;          
            gap: 10%;


            .home-content{
    
                h1{
                    font-weight: 700;
                    font-size: 5.6rem;
                    line-height: 1.3;
                }

                .first-h3{
                    margin-bottom: 0;
                }
    
                h3 {
                    font-size: 3.2rem;
                    font-weight: 700;
                    margin-bottom: 2rem;
    
                    span{
                        color: var(--main-color);
                    }
                }
    
                p{
                    font-size: 1.6rem;
                }
    
                .bth{
                    display: inline-block;
                    padding: 1rem 2.8rem;
                    background-color: var(--main-color);
                    border-radius: 4rem;
                    box-shadow: 0 0 1rem var(--main-color);
                    text-decoration: none;
                    color: var(--second-bg-color);
                    letter-spacing: .1rem;
                    font-weight: 800;
                    font-size: 1.6rem ;
                    transition: .5s ease-in;
    
                    &:hover{
                        box-shadow: none;
                    }
    
                    
                }
            }

            .home-img{
                display: flex;
                align-items: center;
                justify-content: center; 
                background: var(--main-color) ; 
                width: 45rem;  
                height: 45rem;
                padding: 0 2rem;
                box-shadow: 0 0 1rem var(--main-color);
                border-radius: 60% 40% 31% 69% / 50% 40% 60% 50%  ;
                animation: border 5s ease alternate infinite ;

                @keyframes border {
                    0%{
                        border-radius: 71% 29% 41% 59% / 30% 40% 60% 70% ;
                    }

                    25%{
                        border-radius:60% 40% 60% 40% / 74% 86% 14% 26% ;
                    }
                    50%{
                        border-radius: 94% 6% 81% 19% / 29% 19% 81% 71%  ;
                    }
                    75%{
                        border-radius: 38% 62% 81% 19% / 91% 46% 54% 9% 
                    }

                    100%{
                        border-radius: 80% 20% 88% 12% / 54% 64% 36% 46%  ;
                    }
                }
                 
        
                   img{
                        width: 80%;
                        height: 70%;
                        border-radius: 71% 29% 41% 59% / 30% 40% 60% 70% ;

                        animation: up-dow 4s ease alternate infinite;
                        

                        @keyframes up-dow {
                            from{
                                transform: translateY(-30px); 
                            }
                            to{
                                transform: translateY(0);
                            }
                        }
                    }
            }

             
            @media (max-width: 768px) {
                flex-direction:column;

                 .home-img{
                    
                    margin-top: 4rem;
                 }

                 .home-content{
                    width: 80vw;


                     h3{
                        font-size: 2.6rem;
                    }
                
                     h1{
                        font-size: 5rem;
                    }
                 }
            }

            @media (max-width: 375px) {
                img{
                    
                }
            }
`;


export const SocialMedia = styled.div`
            

           a { 
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 4rem;
            height: 4rem;
            background: transparent;
            border: 2px solid var(--main-color);
            border-radius: 50%;
            margin: 3rem 1.5rem 3rem 0;
            color: var(--main-color);
            font-size: 2rem;
            transition: .5s ease-in ;

            &:hover{
                background-color: var(--main-color);
                color: var(--second-bg-color);
                box-shadow: 0 0 1rem var(--main-color);
            }


            
        }
`;


export const ContainerAbout = styled.section`
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            background-color: var(--second-bg-color);

            .about-img{
                display: flex;
                justify-content: center;
            }

            .about-img img{
                width: 45vw;
            }

            .about-content{
                max-width: 50vw;

                h2{
                   text-align: left;
                   line-height: 1.2;
                }   
       
                h3{
                   font-size: 2.6rem;
                }
       
                p{
                   font-size: 1.6rem;
                   margin: 2rem 0 3rem;
                }

                @media (max-width: 768px) {
                    max-width: 80vw;

                    .about-content img{
                        width: 70vw;
                        margin-top: 4rem;
                     }
    
                }

        
             }
       
                .bth{
                   display: inline-block;
                   padding: 1rem 2.8rem;
                   background-color: var(--main-color);
                   border-radius: 4rem;
                   box-shadow: 0 0 1rem var(--main-color);
                   text-decoration: none;
                   color: var(--second-bg-color);
                   letter-spacing: .1rem;
                   font-weight: 800;
                   font-size: 1.6rem ;
                   transition: .5s ease-in;
       
                   &:hover{
                       box-shadow: none;
                   }
               }
               

            @media (max-width: 768px){
                flex-direction: column-reverse;

                .about-content img{
                    width: 70vw;
                    margin-top: 4rem;
                }
            }

            @media (max-width: 375px) {
                .about-content img{
                    width: 90vw;
                }
            }

           
`;
