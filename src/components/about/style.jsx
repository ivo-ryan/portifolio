import styled from 'styled-components';


export const HomeSection = styled.section`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;
            gap: 10%;

            
            @media (max-width: 768px) {
                flex-direction:column;

                 img{
                    width: 70vw;
                    margin-top: 4rem;
                 }
            }

            @media (max-width: 375px) {
                img{
                    width: 90vw;
                }
            }

            .home-content{
                width: 50vw;
                heigth: 50%;
               
    
                h1{
                    font-weight: 700;
                    font-size: 5.6rem;
                    line-height: 1.3;
                }
    
                h3{
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
    
                @media (max-width: 768px) {
                    width: 80vw;
                }
    
                @media (max-width: 375px) {
                    width: 80vw;
                }

            }
`;

export const HomeImg = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;          

            img{
                height: 600px;
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
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            background-color: var(--second-bg-color);

            @media (max-width: 768px){
                flex-direction: column-reverse;

                img{
                    width: 70vw;
                    margin-top: 0;
                }
            }

            @media (max-width: 375px) {
                img{
                    width: 90vw;
                }
            }
           
`;

export const AboutImg = styled.div`
        display: flex;
        justify-content: center;
        width: 35vw;
`;

export const AboutContent = styled.div`
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

        @media (max-width: 768px) {
            width: 80vw;
        }

        @media (max-width: 375px) {
            width: 80vw;
        }
`;