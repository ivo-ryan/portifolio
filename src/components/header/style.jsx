import styled from "styled-components";

export const Navbar = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 100%;
        height: 100px;
        background-color: var(--bg-color) ;
        background-size: 300% 300%;
        padding: 2rem 9%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        .logo{
            font-size: 2rem;
            text-decoration: none;
            color: var(--text-color);
            cursor: default;
        }

        #menu-icon{
            font-size: 3.6rem ;
            color: var(--text-color);
            display: none;
        }
   
        nav{
            max-width: 80%;
            padding-right: 20px;
        }
`;

export const Ul = styled.ul`
        display: flex;
        justify-content: space-between;
        list-style: none;

        li{
            cursor:pointer;
            filter: drop-shadow(0px 0px 3px   var(--second-bg-color));
            border-radius: 5px;
            padding: 5px 10px;
            animation: border 2s ease alternate infinite;

            @keyframes border {
                to{
                    filter: drop-shadow(0px  0px  6px   var(--second-bg-color));
                }
            }

            a{
                text-decoration: none;
                font-size: 1.7rem;
                margin-left: 4rem;
                color: var(--text-color);
                transition: .5s ease-in;
                
                &:hover,
                &.active{
                    color: var(--main-color);
                    filter: drop-shadow(0px  0px  11px   #ff4444);
                }

            }
        }
`;