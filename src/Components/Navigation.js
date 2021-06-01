import styled from 'styled-components';
import {HashLink as Link} from 'react-router-hash-link';
import myphoto from '../images/myphoto.jpg'
import navItems from '../data/navItems';

// Passed the showSideBar function from parent App down to child Navigation and add onClick attribute to list items
const Navigation = ({showSideBar}) => {
    return (
        <NavigationStyled>
            <div className="myphoto">
                <Link smooth to="#" activeclassname="active-class" onClick={showSideBar}>
                    <img src={myphoto} alt=""/>
                </Link>
            </div>

            <ul className="nav-items" onClick={showSideBar}>
                {/* HashLink with smooth scrolling! */}
                {navItems.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                            <Link smooth to={item.path} activeclassname="active-class">
                                <div className="things">
                                    {item.icon}
                                    <span>
                                        {item.title}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    )
                })}                
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
                justify-content: center;
                align-items: center; 

                &:hover {
                    cursor: pointer;
                    color: var(--white-color);
                    transition: all 0s;     // Don't want gradual change for text color
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

            .things{
                display: flex;
                flex-direction: row-reverse;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            span {
                margin-right: 0.5rem;
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
