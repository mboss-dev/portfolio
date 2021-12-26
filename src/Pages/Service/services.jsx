import React from 'react'
import { Container, Row, ServiceSection, PageTitleDiv, PageTitle } from '../commonStyles'
import { ServiceItemDiv, ServiceItemIcon, ServiceItemInnerDiv } from './serviceStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDesktop, faLaptopCode, faMobileAlt, faPaintBrush } from '@fortawesome/free-solid-svg-icons'

function Services() {
    return (
        <ServiceSection>
            <Container>
                <Row>
                    <PageTitleDiv>
                        <PageTitle>Services</PageTitle>
                    </PageTitleDiv>
                </Row>
                <Row>
                    <ServiceItemDiv>
                        <ServiceItemInnerDiv>
                            <ServiceItemIcon>
                                <FontAwesomeIcon icon={faDesktop} />
                            </ServiceItemIcon>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est labore quasi rerum amet? Eos exercitationem molestiae in veniam deserunt beatae, dicta placeat, illo laborum perferendis iste ratione porro eaque.</p>
                        </ServiceItemInnerDiv>
                    </ServiceItemDiv>
                    <ServiceItemDiv>
                        <ServiceItemInnerDiv>
                            <ServiceItemIcon>
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </ServiceItemIcon>
                            <h4>Mobile Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est labore quasi rerum amet? Eos exercitationem molestiae in veniam deserunt beatae, dicta placeat, illo laborum perferendis iste ratione porro eaque.</p>
                        </ServiceItemInnerDiv>
                    </ServiceItemDiv>
                    <ServiceItemDiv>
                        <ServiceItemInnerDiv>
                            <ServiceItemIcon>
                                <FontAwesomeIcon icon={faPaintBrush} />
                            </ServiceItemIcon>
                            <h4>Graphic Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est labore quasi rerum amet? Eos exercitationem molestiae in veniam deserunt beatae, dicta placeat, illo laborum perferendis iste ratione porro eaque.</p>
                        </ServiceItemInnerDiv>
                    </ServiceItemDiv>
                    <ServiceItemDiv>
                        <ServiceItemInnerDiv>
                            <ServiceItemIcon>
                                <FontAwesomeIcon icon={faLaptopCode} />
                            </ServiceItemIcon>
                            <h4>Web Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est labore quasi rerum amet? Eos exercitationem molestiae in veniam deserunt beatae, dicta placeat, illo laborum perferendis iste ratione porro eaque.</p>
                        </ServiceItemInnerDiv>
                    </ServiceItemDiv>
                    <ServiceItemDiv>
                        <ServiceItemInnerDiv>
                            <ServiceItemIcon>
                                <FontAwesomeIcon icon={faCode} />
                            </ServiceItemIcon>
                            <h4>Mobile Developer</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est labore quasi rerum amet? Eos exercitationem molestiae in veniam deserunt beatae, dicta placeat, illo laborum perferendis iste ratione porro eaque.</p>
                        </ServiceItemInnerDiv>
                    </ServiceItemDiv>
                    <ServiceItemDiv>
                        <ServiceItemInnerDiv>
                            <ServiceItemIcon>
                                <FontAwesomeIcon icon={faSearchengin} />
                            </ServiceItemIcon>
                            <h4>SEO</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem est labore quasi rerum amet? Eos exercitationem molestiae in veniam deserunt beatae, dicta placeat, illo laborum perferendis iste ratione porro eaque.</p>
                        </ServiceItemInnerDiv>
                    </ServiceItemDiv>
                </Row>
            </Container>
        </ServiceSection>
    )
}

export default Services
