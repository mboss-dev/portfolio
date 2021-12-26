import React, { useState } from 'react'
import { ThemeSettingDiv, ThemeDayNightDiv, ThemeSwitcherDiv,ThemeColorsDiv, ThemeColorItem } from './ThemeSwitchStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog,faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { red, orange, green, blue, pink } from '../theme'

function ThemeSwitch(props) {

    const [show, setShow] = useState(false)

    return (
        <ThemeSwitcherDiv show={show}>
            <ThemeSettingDiv onClick={() => setShow(show ? false : true)}>
                <FontAwesomeIcon icon={faCog} />
            </ThemeSettingDiv>
            <ThemeDayNightDiv>
                <FontAwesomeIcon icon={props.theme === 'light' ? faMoon : faSun} onClick={() => props.setTheme(props.theme === 'light' ? 'dark'  : 'light')} />
            </ThemeDayNightDiv>
            <h4>Theme Colors</h4>
            <ThemeColorsDiv>
                <ThemeColorItem color='#ec1839' onClick={() => props.setColor(red)}></ThemeColorItem>
                <ThemeColorItem color='#fa5b0f' onClick={() => props.setColor(orange)}></ThemeColorItem>
                <ThemeColorItem color='#37b182' onClick={() => props.setColor(green)}></ThemeColorItem>
                <ThemeColorItem color='#1854b4' onClick={() => props.setColor(blue)}></ThemeColorItem>
                <ThemeColorItem color='#f021b2' onClick={() => props.setColor(pink)}></ThemeColorItem>
            </ThemeColorsDiv>
        </ThemeSwitcherDiv>
    )
}

export default ThemeSwitch
