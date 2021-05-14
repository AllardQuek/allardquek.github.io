import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts';


const About = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <h1>About Me</h1>
                <p>I'm a Computer Science undergraduate at the National University of Singapore.</p>
                <p>Interested in Web Development, Machine Learning and more!</p>
                <p>Also interested in sports, classical music, and good food!</p>
                <p>😀  🖥  🍗</p>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`
`;

export default About
