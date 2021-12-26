import styled from "styled-components";


const ServiceItemDiv = styled.div`
    margin-bottom: 30px;
    flex: 0 0 33.33%;
    max-width: 33.33%;
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

const ServiceItemIcon= styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    text-align: center;

    svg{
        font-size: 40px;
        line-height: 60px;
        color: ${props => props.theme.primary};
        text-align: center;
        margin: 0 auto;
        transition: all 0.3s ease;
    }
`
const ServiceItemInnerDiv = styled.div`
    background: ${props => props.theme.background['100']};
    border: 1px solid ${props => props.theme.background['50']};
    border-radius: 10px;
    padding: 30px 15px;
    text-align: center;
    transition: all 0.3s ease;

    :hover{
        box-shadow: 0 0 24px rgba(48,46,77,0.15);
    }

    :hover ${ServiceItemIcon}{
        background: ${props => props.theme.primary};

        svg{
            font-size: 25px;
            color: #ffffff;
        }
    }

    h4{
        font-size: 18px;
        margin-bottom: 15px;
        color: ${props => props.theme.text['900']};
        font-weight: 700;
        text-transform: capitalize; 
    }
    
    p{
        font-size: 16px;
        color: ${props => props.theme.text['700']};
        line-height: 25px;
    }
`

export {ServiceItemDiv, ServiceItemInnerDiv, ServiceItemIcon};