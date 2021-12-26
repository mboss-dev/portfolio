import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        line-height: 1.5;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }
    *{
        margin: 0;
        padding: 0;
        outline: none;
        text-decoration: none;
        box-sizing: border-box;
    }
    ::before,::after{
        box-sizing: border-box;
    }
`
const lightTheme = {
        background: {
            900: "#f2f2fc",
            100: "#fdf9ff",
            50: "#e8dfec",
        },
        text: {
            900: "#302e4d",
            700: "#504e70",
        }
}
const darkTheme = {
    background: {
        900: "#151515",
        100: "#222222",
        50: "#393939",
    },
    text: {
        900: "#ffffff",
        700: "#e9e9e9",
    }
}

const red = {
    primary: '#ec1839'
}
const orange = {
    primary: '#fa5b0f'
}
const green = {
    primary: '#37b182'
}
const blue = {
    primary: '#1854b4'
}
const pink = {
    primary: '#f021b2'
}

export {GlobalStyle, lightTheme, darkTheme, red, orange, green, blue, pink};