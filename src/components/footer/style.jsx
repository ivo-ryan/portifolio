import styled from "styled-components";

export const FooterSt = styled.footer`
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            padding: 2rem 9%;
            background-color: var(--second-bg-color);
            width: 100% ;
           
`;

export const FooterText = styled.div`
            
            
`;

export const FooterIconTop = styled.div`
        a{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: .8rem;
            border-radius: .8rem;
            background-color: var(--main-color);
            transition: .5s ease;
            animation: arrow-up 2s ease alternate infinite;

            @keyframes arrow-up {
                from{
                    transform: translateY(-5px); 
                }
                to{
                    transform: translateY( 2px); 
                }
            }

            
            &:hover{
                box-shadow: 0 0 1rem var(--main-color)
            }

            

        }


        svg{
            font-size: 2.4rem;
            color: var(--second-bg-color);
            animation: arrow-up 2s ease alternate infinite;

            @keyframes arrow-up {
                from{
                    transform: translateY(-5px); 
                }
                to{
                    transform: translateY( 3px); 
                }
            }

        }
        
`;

