import styled from "styled-components";

export const ServicesSt = styled.section`
            margin: 2rem 0;

        h2 {
            margin-bottom: 5rem;

        }

        @media (max-width: 991px){
            margin-bottom: 7rem;
        }

        @media (max-width: 768px){
            margin-bottom: 3rem;
        }

`;

export const ServicesContainer = styled.div`
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
`;

export const ServicesBox = styled.div`
            flex: 1 1 30rem;
            background: var(--second-bg-color);
            padding: 3rem 2rem 4rem;
            border-radius: 2rem;
            text-align: center;
            border: .2rem solid var(--bg-color);
            max-width: 300px;
            transition: .5s ease;

            &:hover{
                border-color: var(--main-color);
                transform: scale(1.1);
            }

            svg{
                font-size: 7rem;
                color: var(--main-color)
                
            }

            h3{
                font-size: 2.6rem;
            }
`;