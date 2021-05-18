import { useState } from 'react';
import { useEffect } from "react";
import styled from 'styled-components';
import { Helmet } from "react-helmet";
import {HashLink as Link} from 'react-router-hash-link';
import {Grid, Box, IconButton} from '@material-ui/core';
import EjectIcon from '@material-ui/icons/Eject';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Content from './Components/Content'
import Toggle from './Components/Toggle';
import favicon from './favicon.ico';


function App() {
  const [theme, setTheme] = useState('dark-theme');             // Default dark theme
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    const localTheme = window.localStorage.getItem('theme');    // Save chosen theme in local storage
    localTheme ? setTheme(localTheme) : setMode('dark-theme') ; // Default to dark mode if no theme
    document.documentElement.className = theme;    // Apply chosen theme by setting class
  }, [theme]);                                     // https://reactjs.org/docs/hooks-effect.html

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setMode('dark-theme');    // setTheme('dark-theme');
    }else{
      setMode('light-theme');
    }
  }

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }


  return (
    <div className="App">
      <Helmet>
        <title>Allard Quek</title>
        <meta name="description" content="Allard's portfolio website" />
        <link rel="canonical" href="allardquek.tech" />
        <link rel="icon" type="image/png" href={favicon} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        {/* <link href="https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" /> */}
      </Helmet>

      {/* Add class to sidebar depending whether nav bar is toggled 
       Pass as props whether the nav is toggled: true/false
       We can't just use ternary to update the className here because the info won't be passed to the actual SideBar rendered! */}
      <Sidebar navToggle={navToggle}/> 
      <Toggle themeToggler={themeToggler} />
      <div className="hamburger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />  
        </IconButton>
      </div>
      <MainContentStyled>
        <Grid container justify="center" alignItems="center">
          <Home /> 
          <div id="about"> <About /> </div>
          <div id="projects"> <Projects /> </div>
          <div id="content"> <Content /> </div>
        </Grid>


        {/* Button here to scroll to the top */}
        <Link smooth to="#">
          <Box textAlign="center">
            <EjectIcon color="primary" fontSize="large" />
          </Box>
        </Link>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;

  @media screen and (max-width: 1200px) {
    margin-left: 0;   // Instead of 16.3! Fill space left by sidebar
  }

  #content {
    width: 100%;   // Not sure why the width is not auto set to 100%
  }
`;

export default App;
