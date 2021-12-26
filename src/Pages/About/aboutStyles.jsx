import { NavLink } from "react-router-dom";
import styled from "styled-components";



const AboutDescriptionDiv = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
`
const DescriptionDiv = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
`

const DescriptionTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 15px;
    font-weight: 700;
    color: ${props => props.theme.text['900']};

    span{
        color: ${props => props.theme.primary};
    }
`

const Description = styled.p`
    font-size: 16px;
    line-height: 25px;
    color: ${props => props.theme.text['700']};
`

const PersonalDiv = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
`

const InfoItemDiv = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 15px;
    padding-right: 15px;

    p{
        font-weight: 600;
        padding: 10px 0;
        font-size: 16px;
        color: ${props => props.theme.text['900']};
        border-bottom: 1px solid ${props => props.theme.background['50']};

        span{
            font-weight: 400;
            color: ${props => props.theme.text['700']};
            margin-left: 4px;
            display: inline-block;
        }
    }

    @media (max-width: 767px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`
const ButtonsDiv = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    margin-top: 30px;
`
const DownloadLink = styled.a`
    font-size: 16px;
    font-weight: 500;
    padding: 12px 35px;
    color: white;
    background: ${props => props.theme.primary};
    border-radius: 40px;
    display: inline-flex;
    white-space: nowrap;
    transition: all 0.3s ease;
    margin-top: 10px;
    position: absolute;
    right: 15px;
    :hover{
        transform: scale(1.05);
    }
`
const InteractiveLink = styled(NavLink)`
    font-size: 16px;
    font-weight: 500;
    padding: 12px 35px;
    color: white;
    background: ${props => props.theme.primary};
    border-radius: 40px;
    display: inline-block;
    white-space: nowrap;
    transition: all 0.3s ease;
    margin-top: 10px;

    :hover{
        transform: scale(1.05);
    }
`
const SkillsDiv = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
`

const WebDiv = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 15px;
    padding-right: 45px;
    @media (max-width: 1199px) {
        padding-right: 15px;
    }
`
const ToolsDiv = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 45px;
    padding-right: 15px;
    @media (max-width: 1199px) {
        padding-left: 15px;
    }
`
const SkillItemDiv = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 30px;

    h5{
        line-height: 40px;
        font-weight: 600;
        font-size: 16px;
        color: ${props => props.theme.text['900']};
        text-transform: capitalize;
    }

    @media (max-width: 1199px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`
const ProgressDiv = styled.div`
    background: ${props => props.theme.background['50']};
    height: 7px;
    border-radius: 4px;
    width: 100%;
    position: relative;
`
const ProgressIn = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: 4px;
    background: ${props => props.theme.primary};
    width: ${props => props.percent}%;
`
const ProgressPercent = styled.div`
    position: absolute;
    right: 0;
    color: ${props => props.theme.text['900']};
    top: -40px;
    font-weight: 400;
    line-height: 40px;
`

const EduExpDiv = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
`
const EducationDiv = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 30px;
    padding-left: 15px;
    padding-right: 15px;

    @media (max-width: 767px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`
const ExperienceDiv = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    margin-top: 30px;
    padding-left: 15px;
    padding-right: 15px;

    @media (max-width: 767px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`
const EduExpTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: 700;
    color:  ${props => props.theme.text['900']};
`

const TimelineBoxDiv = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 30px;
    padding-left: 15px;
    padding-right: 15px;
`
const TimelineDiv = styled.div`
    background:  ${props => props.theme.background['100']};
    padding: 30px 15px;
    border: 1px solid  ${props => props.theme.background['50']};
    border-radius: 10px;
    width: 100%;
    position: relative;
    box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
`
const TimelineItemDiv = styled.div`
    position: relative;
    padding-left: 37px;
    padding-bottom: 50px;

    &:last-child{
        padding-bottom: 0;
    }

    ::before{
        content: '';
        width: 1px;
        position: absolute;
        height: 100%;
        left: 7px;
        top: 0;
        background: ${props => props.theme.primary};
    }
`
const CircleDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${props => props.theme.primary};
`
const TimelineDate = styled.h3`
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 12px;
    color: ${props => props.theme.text['700']};
    svg{
        margin-right: 5px;
    }
`
const TimelineTitle = styled.h4`
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 15px;
    text-transform: capitalize;
    color: ${props => props.theme.text['900']};    
`
const TimelineText = styled.p`
    line-height: 25px;
    font-size: 16px;
    text-align: justify;
    color: ${props => props.theme.text['700']};
`

export {AboutDescriptionDiv, DescriptionDiv, DescriptionTitle, Description, PersonalDiv,InfoItemDiv,ButtonsDiv,DownloadLink, InteractiveLink, SkillsDiv, WebDiv,ToolsDiv,SkillItemDiv, ProgressDiv, ProgressIn, ProgressPercent,EduExpDiv, EducationDiv, ExperienceDiv, EduExpTitle, TimelineBoxDiv, TimelineDiv, TimelineItemDiv, CircleDiv, TimelineDate, TimelineTitle, TimelineText};