import styled from "styled-components";



const ContactHeading = styled.h3`
    color: ${props => props.theme.primary};
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
`
const ContactSubHeading = styled.h4`
    color: ${props => props.theme.text['900']};
    text-align: center;
    font-size: 15px;
    margin-bottom: 60px;
`

const ContactInfoItem = styled.div`
    padding-left: 15px;
    padding-right: 15px;
    flex: 0 0 25%;
    max-width: 25%;
    text-align: center;
    margin-bottom: 60px;

    h4{
        font-size: 18px;
        font-weight: 700;
        color: ${props => props.theme.text['900']};
        text-transform: capitalize;
        margin: 10px 0 5px;
    }

    p{
        font-size: 16px;
        line-height: 25px;
        color: ${props => props.theme.text['700']};
        font-weight: 400;
    }

    @media (max-width: 991px) {
        flex: 0 0 50%;
        max-width: 50%;
    }

    @media (max-width: 767px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`
const ContactIconDiv = styled.div`
    display: inline-block;

    svg{
        color: ${props => props.theme.primary};
        font-size: 25px;
    }
`
const ContactFormDiv = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
`
const ContactForm = styled.form`
    flex: 0 0 100%;
    max-width: 100%;
`
const ContactFormItem = styled.div`
    flex: 0 0 ${props => props.col === '6' ? '50%' : '100%'};
    max-width: ${props => props.col === '6' ? '50%' : '100%'};
    margin-bottom: 30px;
    padding-left: 15px;
    padding-right: 15px;

    @media (max-width: 767px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`
const ContactFormGroup = styled.div`

    textarea{
        height: 140px;
        width: 100%;
        border-radius: 25px;
        background: ${props => props.theme.background['100']};
        border: 1px solid ${props => props.theme.background['50']};
        padding: 10px 25px;
        font-size: 16px;
        color: ${props => props.theme.text['700']};
        transition: all 0.3s ease;

        :focus{
            box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
        }
    }
`
const ContactFormInput= styled.input`
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: ${props => props.theme.background['100']};
    border: 1px solid ${props => props.theme.background['50']};
    padding: 10px 25px;
    font-size: 16px;
    color: ${props => props.theme.text['700']};
    transition: all 0.3s ease;

    :focus{
        box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
    }

`
const FormSubmitBtn= styled.button`
    font-size: 16px;
    font-weight: 500;
    padding: 0 50px;
    color: white;
    background: ${props => props.theme.primary};
    border-radius: 40px;
    display: inline-block;
    white-space: nowrap;
    transition: all 0.3s ease;
    height: 50px;
    border: none;
    cursor: pointer;
    :hover{
        transform: scale(1.05);
    }
`

const ContactFormErrorDiv = styled.div`
    color: red;
    margin-bottom: 30px;
    display: ${props => props.show ? 'block' : 'none'};
    margin-left: 30px;
`

export {ContactHeading,ContactSubHeading,ContactInfoItem,ContactIconDiv,ContactFormDiv,ContactForm,ContactFormItem,ContactFormGroup,ContactFormInput,FormSubmitBtn, ContactFormErrorDiv};