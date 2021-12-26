 import React, { useState } from 'react'
 import {Aside, CloseToggle, Li, Logo, LogoLink, NavToggle, PageLink, Ul} from './SideBarStyles';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faBriefcase, faComment, faHome, faList, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
 
 function SideBar() {

    const [mob, setMob] = useState(false)

     return (
         <>
            <Aside show={mob}>
                <Logo>
                    <LogoLink onClick={() => setMob(false)} to='/'><span>M</span>boss</LogoLink>
                </Logo>
                <NavToggle onClick={() => {setMob(true)}} show={mob}>
                    <span></span>
                </NavToggle>
                <CloseToggle show={mob} onClick={() => setMob(false)}><FontAwesomeIcon icon={faTimes} /></CloseToggle>
                <Ul>
                    <Li><PageLink onClick={() => setMob(false)} to='/' ><FontAwesomeIcon icon={faHome} /> Home</PageLink></Li>
                    <Li><PageLink onClick={() => setMob(false)} to='/about'><FontAwesomeIcon icon={faUser} /> About</PageLink></Li>
                    <Li><PageLink onClick={() => setMob(false)} to='/service'><FontAwesomeIcon icon={faList} /> Service</PageLink></Li>
                    <Li><PageLink onClick={() => setMob(false)} to='/portfolio'><FontAwesomeIcon icon={faBriefcase} /> Portfolio</PageLink></Li>
                    <Li><PageLink onClick={() => setMob(false)} to='/contact'><FontAwesomeIcon icon={faComment} /> Contact</PageLink></Li>
                </Ul>
            </Aside>
         </>
     )
 }
 
 export default SideBar
 