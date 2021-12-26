import styled from "styled-components";


const ThemeSwitcherDiv = styled.div`
    position: fixed;
    right: 0;
    top: 60px;
    padding: 15px;
    width: 200px;
    border: 1px solid ${props => props.theme.background['50']};
    background: ${props => props.theme.background['100']};
    z-index: 101;
    border-radius: 5px;
    transition: all 0.3s ease;
    transform: ${props => props.show ? 'translateX(-25px)' : 'translateX(100%)' };

    h4{
        margin: 0 0 10px;
        color: ${props => props.theme.text['700']};
        font-size: 16px;
        font-weight: 600;
        text-transform: capitalize;
    }
`
const SiconDiv = styled.div`
    position: absolute;
    height: 40px;
    width: 40px;
    text-align: center;
    font-size: 20px;
    background: ${props => props.theme.background['100']};
    color: ${props => props.theme.text['900']};
    right: 100%;
    border: 1px solid ${props => props.theme.background['50']};
    margin-right: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ThemeSettingDiv = styled(SiconDiv)`
    top: 0;
`
const ThemeDayNightDiv = styled(SiconDiv)`
    top: 55px;
`
const ThemeColorsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const ThemeColorItem = styled.span`
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: ${props => props.color};
    cursor: pointer;
`


export {ThemeSwitcherDiv,ThemeSettingDiv,ThemeDayNightDiv, ThemeColorsDiv,ThemeColorItem};