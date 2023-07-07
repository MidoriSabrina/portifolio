import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`

export const Navbar = styled.nav`
    display: flex;
    justify-self: left;
    padding-left: 3rem;
    align-items: center;
    height: 100vh;
    width: 10rem;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
`

export const MenuItem = styled.div`
    list-style-type: none;
    font-family: 'Jura', sans-serif;
    color: #fff;
    opacity: 0.2;
    cursor: pointer;
    transition: 1s;
    line-height: 2rem;

    &:hover {
        opacity: 1;
        font-size: 1.5rem;
        text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6,
            0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6,
            0 0 35px #0073e6;
    }
`

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
`

export const Perfil = styled.div`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    background-color: #fff;
`

export const PerfilCard = styled.div`
    padding: 3rem;
    text-align: center;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-family: 'Jura';

        > h3 {
            font-size: 2rem;
        }

        > p {
            font-size: 1.5rem;
        }
    }
`

export const RightNav = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    justify-content: center;
    position: relative;
`

export const Bullets = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;

    &::before {
        content: '';
        height: 20rem;
        position: absolute;
        width: 1px;
        background-color: #fff;
        opacity: 50%;
        left: 50%;
        top: -40%;
    }
`

export const Bullet = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    border: 1px solid #fff;
`
