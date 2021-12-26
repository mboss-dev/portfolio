import React from 'react'
import { Container, PortfolioSection, Row,PageTitleDiv, PageTitle } from '../commonStyles'
import { PortfolioHeading, PortfolioImg, PortfolioItem, PortfolioItemImg, PortfolioItemInner } from './portfolioStyles'
import Portfolio1 from '../../images/portfolio/portfolio-1.jpg';
import Portfolio2 from '../../images/portfolio/portfolio-2.jpg';
import Portfolio3 from '../../images/portfolio/portfolio-3.jpg';
import Portfolio4 from '../../images/portfolio/portfolio-4.jpg';
import Portfolio5 from '../../images/portfolio/portfolio-5.jpg';
import Portfolio6 from '../../images/portfolio/portfolio-6.jpg';
//import HeroImg from '../../images/hero.png'

function Protfolio() {
    const portfolioImg = [Portfolio1, Portfolio2,Portfolio3,Portfolio4,Portfolio5,Portfolio6]
    return (
        <PortfolioSection>
            <Container>
                <Row>
                    <PageTitleDiv>
                        <PageTitle>Portfolio</PageTitle>
                    </PageTitleDiv>
                </Row>
                <Row>
                    <PortfolioHeading>
                        <h2>My Last Projects :</h2>
                    </PortfolioHeading>
                </Row>
                <Row>
                    {portfolioImg.map((img) =>{
                        return(
                            <PortfolioItem key={img}>
                                <PortfolioItemInner>
                                    <PortfolioItemImg>
                                        <PortfolioImg src={img.toString()} />
                                    </PortfolioItemImg>
                                </PortfolioItemInner>
                            </PortfolioItem>
                        )
                    })}
                </Row>
            </Container>
        </PortfolioSection>
    )
}



export default Protfolio
