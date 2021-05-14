import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from './Particle';

const Home = () => {
    return (
        <HomeStyled>
            <div className="p-particle-js">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi! I'm <span>Allard.</span></h1>
                <p>
                    Tech-lover | Musician | Educator
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/allard-quek/" target="_blank" rel="noopener noreferrer" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/AllardQuek" target="_blank" rel="noopener noreferrer" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.youtube.com/channel/UCqGYtj5y-gIkTi4dSJfh7ow" target="_blank" rel="noopener noreferrer" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomeStyled>
    )
}

const HomeStyled =  styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js {
        position: relative;
        top: 0;
        left: 0;
    }

    .typography {
        // Be mobile responsive
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        /* width: 100%; */
    }

    .icons {
        margin-top: 0.5rem;
        // * Not sure if needed for mobile responsiveness
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin: 0.5rem;
        }

        .icon {
            transition: all 0.4s ease-in-out;
            cursor: pointer;
        }

        .i-linkedin {
            &:hover {
                color: #0077b5;
            }
        }

        .i-github {
            &:hover {
                color: #6e5494;
            }
        }

        .i-youtube {
            &:hover {
                color: #FF0000;
            }
        }
    }
`;

export default Home
