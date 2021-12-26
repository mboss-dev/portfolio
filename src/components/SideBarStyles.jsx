import { NavLink } from "react-router-dom";
import styled from "styled-components";



const Aside = styled.div`
    width: 270px;
    background: ${props => props.theme.background['100']};
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 10;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    @media (max-width: 1199px) {
        left: ${props => props.show ? '0' : '-270px'};
    }

`

const Logo = styled.div`
    position: absolute;
    top: 50px;
    font-size: 30px;
    text-transform: capitalize;
    @media (max-width: 1199px) {
        top: 120px;
    }
`

const LogoLink = styled(NavLink)`
    color: ${props => props.theme.text['900']};
    font-weight: 700;
    padding: 15px 20px;
    font-size: 30px;
    letter-spacing: 5px;
    span {
        font-family: 'Clicker Script', cursive;
        font-size: 40px;
    }
    ::before{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-bottom: 5px solid ${props => props.theme.primary};
        border-left: 5px solid ${props => props.theme.primary};
        bottom: 0;
        left: 0;
    }
    ::after{
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-top: 5px solid ${props => props.theme.primary};
        border-right: 5px solid ${props => props.theme.primary};
        top: 0;
        right: 0;
    }
`

const NavToggle = styled.div`
    height: 40px;
    width: 45px;
    border: 1px solid ${props => props.theme.background['50']};
    cursor: pointer;
    position: fixed;
    left: 30px;
    top: 30px;
    border-radius: 5px;
    background: ${props => props.theme.background['100']};
    display: none;
    align-items: center;
    justify-content: center;

    span{
        height: 2px;
        width: 18px;
        background: ${props => props.theme.primary};
        display: inline-block;
        position: relative;

        ::before{
            content: '';
            height: 2px;
            width: 18px;
            background: ${props => props.theme.primary};
            position: absolute;
            top: -6px;
            left: 0;
        }
        ::after{
            content: '';
            height: 2px;
            width: 18px;
            background: ${props => props.theme.primary};
            position: absolute;
            top: 6px;
            left: 0;
        }
    }


    @media (max-width: 1199px) {
        display: ${props => props.show ? 'none': 'flex'};
    }
`

const CloseToggle = styled.button`
    position: absolute;
    left: 210px ;
    top: 30px;
    height: 40px;
    width: 40px;
    display: none;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.background['50']};
    border-radius: 5px;
    background: ${props => props.theme.background['100']};
    color: ${props => props.theme.primary};
    
    @media (max-width: 1199px) {
        display: ${props => props.show ? 'flex': 'none'};
    }

    svg{
        font-size: 30px;
    }
`

const Ul = styled.ul`
    margin-top: 50px;
`

const Li = styled.li`
    margin-bottom: 20px;
    display: block;
    .active{
        color: ${props => props.theme.primary};
    }
`

const PageLink = styled(NavLink)`
    font-size: 16px;
    font-weight: 600;
    display: block;
    border-bottom: 1px solid ${props => props.theme.background['50']};
    color: ${props => props.theme.text['900']};
    padding: 5px 15px;
        
    svg{
        margin-right: 15px;
    }
`

export {Aside, Logo, LogoLink, NavToggle,CloseToggle, Ul, Li, PageLink};