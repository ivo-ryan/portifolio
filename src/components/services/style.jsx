import styled from "styled-components";

export const ServicesSt = styled.section`
            display: flex;
            flex-direction: column;
            align-items: center;

        h2 {
            margin-bottom: 5rem;

        }

        @media (max-width: 991px){
            margin-bottom: 7rem;
        }

        @media (max-width: 768px){
            margin-bottom: 3rem;
        }

        .services-container{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
            width: 100vw;
        }
`;

export const ServicesBox = styled.div`
            flex: 1 1 30rem;
            background: var(--second-bg-color);
            padding: 3rem 2rem 4rem;
            border-radius: 2rem;
            text-align: center;
            border: .2rem solid var(--bg-color);
            max-width: 300px;
            max-height: 300px;
            transition: .5s ease;

            &:hover{
                border-color: var(--main-color);
                transform: scale(1.1);
            }

            svg{
                font-size: 7rem;
                color: var(--main-color);
                animation: rota 4s ease alternate infinite ;

                @keyframes rota {
                    from{
                      transform: scale(1.0);
                     
                    }
                    to{
                      transform: scale(1.1);
                    }
                    
                  }
            }

            h3{
                font-size: 2.6rem;
            }
`;