import styled from "styled-components";
import { NavLink } from "react-router-dom";


const HomeInfo = styled.div`
    flex: 0 0 60%;
    max-width: 60%;
    padding: 0 15px;
    @media (max-width: 991px) {
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 60px;
    }
`
const MyName = styled.h3`
    font-size: 28px;
    margin: 15px 0;

    span{
        font-family: 'Clicker Script', cursive;
        font-size: 30px;
        font-weight: 700;
        color: ${props => props.theme.primary};
        @media (max-width: 500px) {
            display: block;
        }
    }

    @media (max-width: 500px) {
        text-align: center;
    }
`
const MyProfession = styled.h3`
    font-size: 30px;
    margin: 15px 0;

    span{
        color: ${props => props.theme.primary};

        @media (max-width: 480px) {
            display: block;
            font-size: 30px;
            margin: 0;
            padding: 0;
            span{
                display: none;
            }
        }
    }

    @media (max-width: 480px) {
        text-align: center;
    }
`
const Description = styled.p`
    margin-bottom: 70px;
    font-size: 20px;
    color: ${props => props.theme.text['700']};
`
const ContactBtn = styled(NavLink)`
    font-size: 16px;
    font-weight: 500;
    padding: 12px 35px;
    color: white;
    background: ${props => props.theme.primary};
    border-radius: 40px;
    display: inline-block;
    white-space: nowrap;
    transition: all 0.3s ease;

    :hover{
        transform: scale(1.05);
    }

    @media (max-width: 991px) {
        margin-bottom: 60px;
    }
`

const HomeImgDiv = styled.div`
    flex: 0 0 40%;
    max-width: 40%;
    text-align: center;
    position: relative;
    padding: 0 15px;
    justify-content: center;

    ::after{
        content: '';
        position: absolute;
        height: 80px;
        width: 80px;
        border-top: 10px solid ${props => props.theme.primary};
        border-left: 10px solid ${props => props.theme.primary};
        left: 20px;
        top: -40px;
    }

    ::before{
        content: '';
        position: absolute;
        height: 80px;
        width: 80px;
        border-bottom: 10px solid ${props => props.theme.primary};
        border-right: 10px solid ${props => props.theme.primary};
        right: 20px;
        bottom: -40px;
    }

    @media (max-width: 991px) {
        flex: 0 0 100%;
        max-width: 40%;
        margin: 0 auto;
        margin-top: 60px;
    }
    @media (max-width: 790px) {
        max-width: 60%;
    }
    @media (max-width: 580px) {
        max-width: 80%;
    }
    @media (max-width: 500px) {
        flex: 0 0 100%;
        max-width: 100%;
        margin-top: 60px;
    }
`
const HomeImg = styled.img`
    height: 400px;
    border-radius: 5px;
    margin: auto;
    @media (max-width: 350px) {
        height: 300px;
    }
`
const Logo = styled.div`
    position: absolute;
    top: 30px;
    font-size: 30px;
    text-transform: capitalize;
    display: none;
    left: 50%;
    transform: translateX(-50%);
    height: 70px;

    @media (max-width: 1199px) {
        display: block;
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


export {HomeInfo, MyName,MyProfession, Description, ContactBtn, HomeImgDiv, HomeImg,Logo, LogoLink};