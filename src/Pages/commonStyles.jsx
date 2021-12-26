import styled from "styled-components";


const MainSection = styled.section`
    background: ${props => props.theme.background['900']};
    min-height: 100vh;
    display: block;
    padding: 0 30px;
    opacity: 1;
`
const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 70px;
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    position: relative;
`

const PageTitleDiv = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 60px;
`
const PageTitle = styled.h2`
    font-size: 40px;
    color: ${props => props.theme.text['900']};
    font-weight: 700;
    position: relative;

    ::before{
        content: '';
        height: 4px;
        width: 50px;
        background: ${props => props.theme.primary};
        position: absolute;
        top: 100%;
        left: 0;
    }
    ::after{
        content: '';
        height: 4px;
        width: 25px;
        background: ${props => props.theme.primary};
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 8px;
    }
`

const HomeSection = styled(MainSection)`
    min-height: 100vh;
    display: flex;
    color:  ${props => props.theme.text['900']};

`

const AboutSection = styled(MainSection)`
    min-height: 100vh;
    display: flex;
    color:  ${props => props.theme.text['900']};
`
const ServiceSection = styled(MainSection)`
    min-height: 100vh;
    display: flex;
    color:  ${props => props.theme.text['900']};

    ${Container}{
        padding-bottom: 40px;
    }
`
const PortfolioSection = styled(MainSection)`
    min-height: 100vh;
    display: flex;
    color:  ${props => props.theme.text['900']};
`

const ContactSection = styled(MainSection)`
    min-height: 100vh;
    display: flex;
    color:  ${props => props.theme.text['900']};
`

export {MainSection,HomeSection,AboutSection,ServiceSection,PortfolioSection,ContactSection,PageTitleDiv, PageTitle, Container, Row};