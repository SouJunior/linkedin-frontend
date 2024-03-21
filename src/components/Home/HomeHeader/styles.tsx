import styled, { css } from 'styled-components';

interface HeaderProps {
    isActive: boolean;
    isMobileOpen: boolean;
}

interface ButtonsProps {
    isActive: boolean;
}

export const Header = styled.header<HeaderProps>`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.05);
    filter: ${({ isMobileOpen }) =>
        isMobileOpen ? 'none' : 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))'};
    gap: 12px;
    align-items: center;
    top: 0;
    background-color: #fff;
    justify-content: space-between;
    width: 100vw;
    padding: 20px;
    height: 132px;
    position: fixed;
    transition: height 0.3s ease-in-out;
    z-index: 998;

    @media (max-width: 1023px) {
        justify-content: flex-start;
    }

    @media (max-width: 320px) {
        width: 320px;
        height: 72px;
        border: 1px;
        
        
    }

    ${({ isMobileOpen }) =>
        isMobileOpen &&
        css`
            height: 80px;
        `}

    ${({ isActive }) =>
        isActive &&
        css`
            background-color: #fff;
            height: 80px;
            padding: 20px;
            transition: height 0.3s ease-in-out;
        `}
`;

export const NavTitle = styled.div`
    color: white;
    display: flex;
    font-size: 44px;
    gap: 20px;
    font-weight: bold;
    place-self: center;
    transition: all 200ms ease-out;
    margin-right: 20px;

    img {
        margin-left: 38px;
    }

    @media (max-width: 568px) {
       margin-left: 60px;
    }

    @media (max-width: 375px) {
        position: relative;
        left: -70px;
     }

    @media (max-width: 320px) {
        width: 124px;
        height: 18.61px;
        border: 0.48px;
        position: relative;
        left: -70px;
    }

    @media (max-width: 415px) {
        position: relative;
        left: -60px;   
    }
        
`;

export const HeaderBtns = styled.div`
    display: flex;
    gap: 16 px;

    @media (max-width: 835px) {
        display: none;
    }
`;

export const RegisterButton = styled.button<ButtonsProps>`
    // background-color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
    font-weight: 500;
    width: 262px;
    height: 52px;
    // color: #fff;
    // border-radius: 4px;
    color: ${({ theme }) => theme.colors.primary};;
    padding: 8px, 16px;

    :hover {
        // opacity: 0.8;
        border: 1px solid #046AD0;
        border-radius: 4px;
    }

    ${({ isActive }) =>
        isActive
            ? css`
                  width: 110px;
                  height: 42px;
                  transition: all 300ms ease-in-out;
                  font-size: 16px;
              `
            : css`
                  width: 122px;
                  height: 35px;
                  transition: all 300ms ease-in-out;
              `}
`;

export const LoginButton = styled(RegisterButton)<ButtonsProps>`
    // background-color: transparent;
    // color: ${({ theme }) => theme.colors.primary};
    // font-size: 18px;
    // font-weight: 600;
    // border-radius: 4px;
    // border: 1px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;    

    :hover {
        // background-color: ${({ theme }) => theme.colors.primary};
        // color: #fff;
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        display: flex;
    }

    img {
        width: 16px;
        margin-right:10px;
    }
`;

export const MobileHeader = styled.nav`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 998;

    .background {
        width: 100vw;
        height: 100vh;
        position: absolute;
        backdrop-filter: blur(8px);
        z-index: -1;
    }

    @media (min-width: 835px) {
        .background {
            display: none;
        }
    }

    @media (max-width: 320px) {
        width: 40px;
        height: 40px;
        
    }

    .wrapper {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        align-items: center;
        width: 350px;
        height: 100vh;
        background-color: rgba(255, 255, 255);
        position: fixed;
        left: 0;
        top: 0;
        opacity: 0;
        animation: fadeIn 0.5s;
        animation-play-state: running;
        animation-fill-mode: both;
        transition: all 0.2s;

        @media (max-width: 700px) {
            width: 80vw;
        }

        @media (max-width: 500px) {
            width: 90vw !important;
        }

        @media (max-width: 330px) {
            width: 100vw !important;
        }

        @keyframes fadeIn {
        from {
            opacity: 0;
            height: 0px;
            transform: translateX(
                -100%
            ); /* Adicione esta linha para animar o translateY */
        }
        to {
            opacity: 1;
            height: 100vh;
            transform: translateX(
                0%
            ); /* Adicione esta linha para animar o translateY */
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 30px;
        gap: 20px;
        width: 80%;

        li {
            text-transform: capitalize;
            font-size: 22pt;
            font-weight: 600;
            cursor: pointer;
            padding: 5px 15px;
            color: ${({ theme }) => theme.colors.primary};
            display: flex;
            align-items: center;
            gap: 8px;
            background-image: linear-gradient(
                ${({ theme }) => theme.colors.primary},
                ${({ theme }) => theme.colors.primary}
            );
            background-size: 0% 3px;
            background-repeat: no-repeat;
            transition: background-size 0.3s;
            margin: 5px 0;
            background-position: 50% calc(100% - 0px);
            :hover {
                background-size: 100% 3px;
            }
        }
    }

    @media (min-width: 835px) {
        display: none;
    }
    }

  
`;

export const Menu = styled.div`
    display: none;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 835px) {
        display: flex;
        /* margin-left: 2rem; */
    }
`;
