import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import styled from 'styled-components';
import About from './Components/About';
import Projects from './Components/Projects';
import Content from './Components/Content'
import {HashLink as Link} from 'react-router-hash-link';
import {Grid, Box} from '@material-ui/core';
import EjectIcon from '@material-ui/icons/Eject';

function App() {
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        {/* <link href="https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" /> */}
      </head>
      <Sidebar />
      

      <MainContentStyled>
        <Grid container justify="center" alignItems="center">
          <Home /> 
          <div id="about"> <About /> </div>
          <div id="projects"> <Projects /> </div>
          <div id="content"> <Content /> </div>
        </Grid>


        {/* Button here that let's user scroll to the top */}
        <Link smooth to="#">
          <Box textAlign="center">
            <EjectIcon color="secondary" fontSize="large" />
          </Box>
        </Link>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
`;

export default App;
