import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import VisibilityIcon from '@material-ui/icons/Visibility';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import { MainLayout } from "../styles/Layouts";
import ProjectCard from './ProjectCard';
import ramsay from '../images/ramsay.jpeg';
import exchange from '../images/exchange.png'
import bug from '../images/bug.png'


const Projects = () => {
    return (
        <MainLayout>
            <ProjectsStyled>
                <h1>Projects</h1> 
                    <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                    >

                      <ProjectCard iconComps={{
                          icon1: ["https://github.com/AllardQuek/RamsiiBot", <GithubIcon />],
                          icon2: ["https://t.me/RamsiiBot", <TelegramIcon />] , 
                        }}
                        projectName="RamsiiBot"
                        projectType="Telegram Bot"  
                        image={ramsay}    
                        description="Missing an ingredient for your favourite dish? This ingredient substitution bot gives you alternative recommendations!"
                        toolsUsed="Python & SQLlite"
                        contribution="I worked on setting up the bot, command endpoints, as well as the integration of our APIs. 
                                      I also handled the deploying of the bot onto Heroku."
                      />
                    
                      <ProjectCard iconComps={{
                          icon1: ["https://github.com/AllardQuek/EduExchange", <GithubIcon />],
                          icon2: ["https://t.me/RamsiiBot", <VisibilityIcon />]  
                        }} 
                        projectName="EduExchange"
                        projectType="Web Development"  
                        image={exchange}  
                        description="Django web-application for students to post questions, submit answers and share resources freely."
                        toolsUsed="Python, JavaScript, Django"
                        contribution="Built everything from scratch!"
                      />

                      <ProjectCard 
                        iconComps={{
                          icon1: ["https://docs.google.com/presentation/d/1VblWh1uSwqG95XGz1nxdZSTrnRhW3B6Y24AV8RJGRRU/edit?usp=sharing", <SlideshowIcon />],
                          icon2: []
                        }} 
                        projectName="Cybersecurity"
                        projectType="Machine Learning"  
                        image={bug}  
                        description="Developed machine learning models using NLP to identify evolving malware signatures automatically."
                        toolsUsed="Python, Tensorflow, Torch, Scrapy"
                        contribution="Worked with and guided two teammates to build a knowledge hub of malware, attaining 80% prediction accuracy and delivered two reports documenting research. 
                                      Please reach out to access the slides or to find out more!"
                      />
                  </Grid>
            </ProjectsStyled>
        </MainLayout>
    )
}

const ProjectsStyled = styled.section`
  
`;

export default Projects
