import styled from 'styled-components';
import {HashLink as Link} from 'react-router-hash-link';
import myphoto from '../images/myphoto.jpg'

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="myphoto">
                <img src={myphoto} alt="" />
            </div>
            <ul className="nav-items">
                {/* HashLink with smooth scrolling! */}
                <li className="nav-item">
                    <Link smooth to="#about" activeClassName="active-class">About</Link>
                </li>
                <li className="nav-item">
                    <Link smooth to="#projects" activeClassName="active-class">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link smooth to="#content" activeClassName="active-class">Content</Link>
                </li>
            </ul>
            <footer className="footer">
                <p> &#169; 2021 </p>
            </footer>
        </NavigationStyled>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);

    .myphoto {
        width: 70%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;

        img {
            width: 80%;
            border-radius: 50%;
            border: 6px solid var(--border-color);
        }
    }

    .nav-items {
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }

        li {
            display: block;
            a {
                display: block;
                padding: 0.5rem 0;
                position: relative;
                z-index: 10;
                font-size: 1.1rem;
                font-weight: 400;
                letter-spacing: 1.2px;

                &:hover {
                    cursor: pointer;
                    color: var(--white-color);
                    
                }

                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.03,.16,.91);
                    transform-origin: right;
                    opacity: 0.15;
                    z-index: -1;;
                }
            }
            
            a:hover::before  {
                width: 100%;
                height: 100%;
            }
        }
    }

    footer {
        border-top: 1px solid var(--border-color);
        width: 100%;
        p {
            padding: 1.5rem 0;
            font-size: 0.8rem;
            /* display: block;  */
            text-align: center;
        }
    }
`;

export default Navigation
