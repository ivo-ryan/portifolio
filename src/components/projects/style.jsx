import styled from "styled-components";

export const Portifolio = styled.section`
        background-color: var(--second-bg-color);    

        h2{
            margin-bottom: 4rem;
        }

        @media (max-width: 991px) {
            padding-bottom: 7rem;
        }

        @media (max-width: 768px) {
            h2{
                margin-bottom: 3rem;
            }
        }

        .portifolio-container{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            gap: 2.5rem;

            @media (max-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
            }

            @media (max-width: 600px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
`;


export const PortifolioBox  = styled.div`
            position: relative;
            border-radius: 2rem;
            box-shadow: 0 0 1rem var(--bg-color);
            overflow: hidden;
            display: flex;
            max-width: 600px;
            max-height: 600px;

            img{
                width: 100%;
                transition: .5s ease;

                &:hover{
                    transform: scale(1.1)
                }
            }

            

            &:hover{
                .portifolio-layer{
                    transform: translateY(0);
                }
                
            }
`;

export const PortifolioLayer = styled.div`

            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient( rgba(0, 0, 0, .1), var(--main-color));
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            padding: 0 4rem;
            transform: translateY(100%);
            transition: .5s ease;

        

            h4{
                font-size: 3rem;
            }

            p{
                font-size: 1.6rem;
                margin: .3rem 0 1rem ;
            }

            a{
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: 5rem;
                height: 5rem;
                background-color: var(--text-color);
                border-radius: 50%;
            }

            svg{
                font-size: 2rem;
                color: var(--second-bg-color);
            }
        
`;