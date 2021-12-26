import React from 'react'
import { HomeSection, Container, Row } from '../commonStyles'
import { ContactBtn,MyName,MyProfession, Description, HomeImg, HomeImgDiv, HomeInfo, Logo, LogoLink } from './homeStyles'
import ReactTypingEffect from 'react-typing-effect';
import HeroImg from '../../images/hero.png';

function Home() {
    return (
            <>
                <Logo>
                    <LogoLink to='/'><span>M</span>boss</LogoLink>
                </Logo>
                <HomeSection>
                    <Container>
                        <Row>
                            <HomeInfo>
                                <MyName>Hello, my name is <span>Mohammed Abbas</span></MyName>
                                <MyProfession >
                                    I'm a 
                                    <ReactTypingEffect staticText=' ' text={["Web Designer", "Web Developer","Graphic Designer", "YouTuber"]} speed={100} typingDelay={1000} eraseSpeed={50} eraseDelay={2000} />
                                </MyProfession>
                                <Description>I'm a web Developer. My expertise is to create and website design, graphic design, web development, mobile app development, and many more...</Description>
                                <ContactBtn to='/contact'>Hire Me</ContactBtn>
                            </HomeInfo>
                            <HomeImgDiv>
                                <HomeImg src={HeroImg} />
                            </HomeImgDiv>
                        </Row>
                    </Container>
                </HomeSection>
            </>
    )
}

export default Home
