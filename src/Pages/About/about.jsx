import React from 'react'
import { AboutDescriptionDiv, ButtonsDiv, Description, DescriptionDiv, DescriptionTitle, DownloadLink, InfoItemDiv, InteractiveLink, PersonalDiv, ProgressDiv, ProgressIn, ProgressPercent, SkillItemDiv, SkillsDiv, WebDiv, ToolsDiv, EducationDiv, EduExpDiv, ExperienceDiv, EduExpTitle, TimelineBoxDiv, TimelineDiv, TimelineItemDiv, CircleDiv, TimelineDate, TimelineTitle, TimelineText } from './aboutStyles'
import { Container, Row, AboutSection, PageTitleDiv, PageTitle } from '../commonStyles'
import MyCV from '../../Files/mycv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


function About() {

    let today = new Date()
    const birth = new Date('07/13/1997')
    const days = 1000 * 60 * 60 * 24;
    return (
        <AboutSection>
            <Container>
                <Row>
                    <PageTitleDiv>
                        <PageTitle>About Me</PageTitle>
                    </PageTitleDiv>
                </Row>
                <Row>
                    <AboutDescriptionDiv>
                        <Row>
                            <DescriptionDiv>
                                <DescriptionTitle>I'm Mohammed Abbas and <span>Web Developer</span></DescriptionTitle>
                                <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur praesentium voluptas eligendi voluptatum sequi illo dolorem. Modi laudantium provident repellat obcaecati quo fugiat, voluptate officiis vel beatae, deserunt quasi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ratione temporibus voluptates beatae explicabo nostrum est facere ducimus praesentium aspernatur impedit atque amet deleniti eveniet magnam magni ab nihil autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptas non, ipsam sed labore corrupti nostrum? Explicabo blanditiis autem eum mollitia voluptatibus inventore doloremque placeat in repellendus, recusandae saepe perferendis.</Description>
                            </DescriptionDiv>
                            <PersonalDiv>
                                <Row>
                                    <InfoItemDiv>
                                        <p>Birthday : <span>13 July 1997</span></p>
                                    </InfoItemDiv>
                                    <InfoItemDiv>
                                        <p>Age : <span>{Math.floor(((today - birth)/ days) / 365 )}</span></p>
                                    </InfoItemDiv>
                                    <InfoItemDiv>
                                        <p>Website : <span>wwww.mezzobuzz.com</span></p>
                                    </InfoItemDiv>
                                    <InfoItemDiv>
                                        <p>Email : <span>shaik.mohammedabbas@gmail.com</span></p>
                                    </InfoItemDiv>
                                    <InfoItemDiv>
                                        <p>Degree : <span>B.Sc Visual Communication</span></p>
                                    </InfoItemDiv>
                                    <InfoItemDiv>
                                        <p>Phone : <span>+91 90525 89818</span></p>
                                    </InfoItemDiv>
                                    <InfoItemDiv>
                                        <p>City : <span>Sattenapalli</span></p>
                                    </InfoItemDiv>
                                    <InfoItemDiv>
                                        <p>Freelance : <span>Available</span></p>
                                    </InfoItemDiv>
                                </Row>
                                <Row>
                                    <ButtonsDiv>
                                        <DownloadLink href={MyCV}>Download CV</DownloadLink>
                                    </ButtonsDiv>
                                    <ButtonsDiv>
                                        <InteractiveLink to='/contact'>Hire Me</InteractiveLink>
                                    </ButtonsDiv>
                                </Row>
                            </PersonalDiv>
                            <SkillsDiv>
                                <Row>
                                    <WebDiv>
                                        <Row>
                                            <SkillItemDiv>
                                                <h5>REACT</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="80"></ProgressIn>
                                                    <ProgressPercent>80%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>JAVASCRIPT</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="85"></ProgressIn>
                                                    <ProgressPercent>85%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>PYTHON</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="76"></ProgressIn>
                                                    <ProgressPercent>76%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>BOOTSTRAP</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="80"></ProgressIn>
                                                    <ProgressPercent>80%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>PHP</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="60"></ProgressIn>
                                                    <ProgressPercent>60%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>CSS</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="90"></ProgressIn>
                                                    <ProgressPercent>90%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>FLUTTER</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="70"></ProgressIn>
                                                    <ProgressPercent>70%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>HTML</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="95"></ProgressIn>
                                                    <ProgressPercent>95%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>                                            
                                        </Row>
                                    </WebDiv>
                                    <ToolsDiv>
                                        <Row>
                                            <SkillItemDiv>
                                                <h5>FIGMA</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="85"></ProgressIn>
                                                    <ProgressPercent>80%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>ADOBE PHOTOSHOP</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="74"></ProgressIn>
                                                    <ProgressPercent>74%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>ADOBE XD</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="80"></ProgressIn>
                                                    <ProgressPercent>80%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>                                            
                                            <SkillItemDiv>
                                                <h5>ADOBE ILLUSTRATOR</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="60"></ProgressIn>
                                                    <ProgressPercent>60%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>SEM</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="74"></ProgressIn>
                                                    <ProgressPercent>74%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>SMM</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="85"></ProgressIn>
                                                    <ProgressPercent>85%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>GOOGLE ANALYTICS</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="80"></ProgressIn>
                                                    <ProgressPercent>80%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                            <SkillItemDiv>
                                                <h5>KEYWORD RESEARCH</h5>
                                                <ProgressDiv>
                                                    <ProgressIn percent="84"></ProgressIn>
                                                    <ProgressPercent>84%</ProgressPercent>
                                                </ProgressDiv>
                                            </SkillItemDiv>
                                        </Row>
                                    </ToolsDiv>
                                </Row>
                            </SkillsDiv>
                            <EduExpDiv>
                                <Row>
                                    <EducationDiv>
                                        <EduExpTitle>Education</EduExpTitle>
                                        <Row>
                                            <TimelineBoxDiv>
                                                <TimelineDiv>
                                                    <TimelineItemDiv>
                                                        <CircleDiv></CircleDiv>
                                                        <TimelineDate>
                                                            <FontAwesomeIcon icon={faCalendar} /> 2014 - 2017
                                                        </TimelineDate>
                                                        <TimelineTitle>B.Sc. Visual Communication</TimelineTitle>
                                                        <TimelineText>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro perferendis ipsam quas omnis illum odit nesciunt ea ut! Quas dicta corrupti dolore qui cum, ipsa provident ullam quam voluptatibus.
                                                        </TimelineText>
                                                    </TimelineItemDiv>
                                                    <TimelineItemDiv>
                                                        <CircleDiv></CircleDiv>
                                                        <TimelineDate>
                                                            <FontAwesomeIcon icon={faCalendar} /> 2012 - 2014
                                                        </TimelineDate>
                                                        <TimelineTitle>Intermediate, MPC</TimelineTitle>
                                                        <TimelineText>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro perferendis ipsam quas omnis illum odit nesciunt ea ut! Quas dicta corrupti dolore qui cum, ipsa provident ullam quam voluptatibus.
                                                        </TimelineText>
                                                    </TimelineItemDiv>
                                                    <TimelineItemDiv>
                                                        <CircleDiv></CircleDiv>
                                                        <TimelineDate>
                                                            <FontAwesomeIcon icon={faCalendar} /> 2011 - 2012
                                                        </TimelineDate>
                                                        <TimelineTitle>SSC</TimelineTitle>
                                                        <TimelineText>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro perferendis ipsam quas omnis illum odit nesciunt ea ut! Quas dicta corrupti dolore qui cum, ipsa provident ullam quam voluptatibus.
                                                        </TimelineText>
                                                    </TimelineItemDiv>
                                                </TimelineDiv>
                                            </TimelineBoxDiv>
                                        </Row>                                       
                                    </EducationDiv>
                                    <ExperienceDiv>
                                        <EduExpTitle>Experience</EduExpTitle>
                                        <Row>
                                            <TimelineBoxDiv>
                                                <TimelineDiv>                                                    
                                                    <TimelineItemDiv>
                                                        <CircleDiv></CircleDiv>
                                                        <TimelineDate>
                                                            <FontAwesomeIcon icon={faCalendar} /> 2020-2021
                                                        </TimelineDate>
                                                        <TimelineTitle>Service Website using Django, Bootstrap and PostgreSQL</TimelineTitle>
                                                        <TimelineText>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro perferendis ipsam quas omnis illum odit nesciunt ea ut! Quas dicta corrupti dolore qui cum, ipsa provident ullam quam voluptatibus.
                                                        </TimelineText>
                                                    </TimelineItemDiv>
                                                    <TimelineItemDiv>
                                                        <CircleDiv></CircleDiv>
                                                        <TimelineDate>
                                                            <FontAwesomeIcon icon={faCalendar} /> 2018
                                                        </TimelineDate>
                                                        <TimelineTitle>Basic WordPress Blog Theme using Php</TimelineTitle>
                                                        <TimelineText>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro perferendis ipsam quas omnis illum odit nesciunt ea ut! Quas dicta corrupti dolore qui cum, ipsa provident ullam quam voluptatibus.
                                                        </TimelineText>
                                                    </TimelineItemDiv>
                                                    <TimelineItemDiv>
                                                        <CircleDiv></CircleDiv>
                                                        <TimelineDate>
                                                            <FontAwesomeIcon icon={faCalendar} /> 2016 - ongoing
                                                        </TimelineDate>
                                                        <TimelineTitle>YouTube Tech Content Creator</TimelineTitle>
                                                        <TimelineText>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero porro perferendis ipsam quas omnis illum odit nesciunt ea ut! Quas dicta corrupti dolore qui cum, ipsa provident ullam quam voluptatibus.
                                                        </TimelineText>
                                                    </TimelineItemDiv>
                                                </TimelineDiv>
                                            </TimelineBoxDiv>
                                        </Row>           
                                    </ExperienceDiv>
                                </Row>
                            </EduExpDiv>
                        </Row>
                    </AboutDescriptionDiv>
                </Row>
            </Container>
        </AboutSection>
        
    )
}

export default About
