import React, {useState, useRef } from 'react'
import { ContactSection, Container, PageTitle, PageTitleDiv, Row } from '../commonStyles'
import { ContactFormDiv,ContactForm, ContactFormGroup, ContactFormInput, ContactFormItem, ContactHeading, ContactIconDiv, ContactInfoItem, ContactSubHeading, FormSubmitBtn, ContactFormErrorDiv } from './contactStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGlobeEurope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';

function Contact() {

    

    return (
        <ContactSection>
            <Container>
                <Row>
                    <PageTitleDiv>
                        <PageTitle>Contact</PageTitle>
                    </PageTitleDiv>
                </Row>
                <ContactHeading>Have Any Question ?</ContactHeading>
                <ContactSubHeading>I'm At Your Service</ContactSubHeading>
                <Row>
                    <ContactInfoItem>
                        <ContactIconDiv><FontAwesomeIcon icon={faPhone} /></ContactIconDiv>
                        <h4>Call Us On</h4>
                        <p>+91 9052589818</p>
                    </ContactInfoItem>
                    <ContactInfoItem>
                        <ContactIconDiv><FontAwesomeIcon icon={faMapMarkedAlt} /></ContactIconDiv>
                        <h4>Address</h4>
                        <p>Sattenapalli</p>
                    </ContactInfoItem>
                    <ContactInfoItem>
                        <ContactIconDiv><FontAwesomeIcon icon={faEnvelope} /></ContactIconDiv>
                        <h4>Email</h4>
                        <p>shaik.mohammedabbas@gmail.com</p>
                    </ContactInfoItem>
                    <ContactInfoItem>
                        <ContactIconDiv><FontAwesomeIcon icon={faGlobeEurope} /></ContactIconDiv>
                        <h4>Website</h4>
                        <p>www.mezzobuzz.com</p>
                    </ContactInfoItem>
                </Row>
                <ContactHeading>SEND ME AN EMAIL</ContactHeading>
                <ContactSubHeading>I'M VERY RESPOSIVE TO MESSAGES</ContactSubHeading>
                <Row>
                    <ContactFormReact />
                </Row>
            </Container>
        </ContactSection>
    )
}

export default Contact


const ContactFormReact  = () =>{

    const form = useRef();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();
        if(name.length <= 0 || email.length <= 0  || subject <= 0 || message <= 0){
            setError(true)
        }else{
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
            }, (error) => {
                console.log(error.text);
            });

            console.log(process.env.REACT_APP_SERVICE_ID);
            console.log(process.env.REACT_APP_TEMPLATE_ID);
        }
    }
    return(
        <ContactFormDiv >
                        <ContactForm ref={form} onSubmit={onSubmit}>
                            <Row>                            
                                <ContactFormItem col='6'>
                                    <ContactFormGroup>
                                        <ContactFormInput type='text' name='name' placeholder='Name' value={name} onChange={(e) =>{setName(e.target.value)}} />
                                    </ContactFormGroup>
                                </ContactFormItem>
                                <ContactFormItem col='6'>
                                    <ContactFormGroup>
                                        <ContactFormInput type='email' name='email' placeholder='Email' value={email} onChange={(e) =>{setEmail(e.target.value)}} />
                                    </ContactFormGroup>
                                </ContactFormItem>
                                <ContactFormItem>
                                    <ContactFormGroup>
                                        <ContactFormInput type='text' name='subject' placeholder='Subject' value={subject} onChange={(e) =>{setSubject(e.target.value)}} />
                                    </ContactFormGroup>
                                </ContactFormItem>
                                <ContactFormItem>
                                    <ContactFormGroup>
                                        <textarea name='message' placeholder='Message' value={message} onChange={(e) =>{setMessage(e.target.value)}}></textarea>
                                    </ContactFormGroup>
                                </ContactFormItem>
                                <ContactFormErrorDiv show={error}>Please Fill All the Fields</ContactFormErrorDiv>
                                <ContactFormItem>
                                    <ContactFormGroup>
                                        <FormSubmitBtn type='submit' >Send Message</FormSubmitBtn>
                                    </ContactFormGroup>
                                </ContactFormItem>
                            </Row>
                        </ContactForm>
                    </ContactFormDiv>
    )
}