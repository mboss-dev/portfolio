import styled from "styled-components";



const PortfolioHeading = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 40px;
    h2{
        color: ${props => props.theme.text['900']};
        font-weight: 500;
    }
`
const PortfolioItem = styled.div`
    flex: 0 0 33.33%;
    max-width: 33.33%;
    margin-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;

    @media (max-width: 991px) {
        flex: 0 0 50%;
        max-width: 50%;
    }

    @media (max-width: 767px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`
const PortfolioItemInner = styled.div`
    border: 6px solid ${props => props.theme.background['100']};
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
`
const PortfolioItemImg = styled.div`
`

const PortfolioImg = styled.img`
    width: 100%;
    display: block;
`

export {PortfolioHeading,PortfolioItem, PortfolioItemInner, PortfolioItemImg,PortfolioImg};