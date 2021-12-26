import React from 'react';
import { useState } from 'react';
import {ThemeProvider} from 'styled-components';
import SideBar from './components/SideBar';
import { GlobalStyle, lightTheme, darkTheme, red } from './theme';
import Main from './components/Main';
import ThemeSwitch from './components/ThemeSwitch';

//import Home from './Pages/home';
//import MyRoutes from './routes';





function App() {
  const [theme, setTheme] = useState("light")
  const [primary, setPrimary] = useState(red)

  return (
    <ThemeProvider theme={theme ==="light" ? {...lightTheme, ...primary} : {...darkTheme, ...primary}}>
      <GlobalStyle />
      <SideBar />
      <ThemeSwitch setTheme = {setTheme} theme = {theme} setColor = {setPrimary}/>
      <Main />
    </ThemeProvider>
  );
}

export default App;
