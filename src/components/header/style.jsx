import styled from "styled-components";

export const Navbar = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 100%;
        min-height: 100px;
        background-color: var(--bg-color) ;
        padding: 2rem 9%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;

        svg{
            cursor: pointer;
           
        }

        #menu-icon{
            font-size: 3.6rem ;
            color: var(--text-color);
            display: none;
          }
          
          .bx-x{
            font-size: 3.6rem ;
            color: red;
            display: none;
          }

        @media (max-width: 991px) {
              padding: 2rem 3% ;
            }

        @media (max-width: 768px) {

            #menu-icon {
                display: block;              
            }

            .bx-x {
                display: block;       
            }
        
        }   

        .logo{
            font-size: 2rem;
            text-decoration: none;
            color: var(--text-color);
            cursor: default;
        }

`;

export const Nav = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        flex-wrap: wrap;

        @media (max-width: 768px) {
            display: ${props => props.display};
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 1rem 3%;
            background: var(--bg-color);
            border-top: .1rem solid rgba(0, 0, 0, .2);
            box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);

            a{
                display: block;
                font-size: 2rem;
                margin: 2rem 0;
            }
        }

        @media (max-width: 425px) {
            a{
                margin: 1.8rem 0;
            }
        }

        li{
            padding: 5px 10px;

            a{
                text-decoration: none;
                font-size: 1.7rem;
                margin-left: 4rem;
                color: var(--text-color);
                transition: .5s ease-in;
                
                
                &:hover,
                &.active{
                    color: var(--main-color);                  
                }


            }
        }
`;