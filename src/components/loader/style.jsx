import styled from "styled-components";

export const Load = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
            svg{
                font-size: 60px;
                color: #FCBA03;
                animation: rotate 1s linear infinite;

                @keyframes rotate{
                    to{
                        transform: rotate(360deg)
                    }
                }
            }
`;