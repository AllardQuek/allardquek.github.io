import styled from 'styled-components';
import {MainLayout} from '../styles/Layouts';


const About = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <h1>About Me</h1>
                <p>I'm a Computer Science undergraduate at the National University of Singapore.</p>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`
`;

export default About
