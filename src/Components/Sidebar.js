import styled from 'styled-components';
import Navigation from './Navigation';


const Sidebar = ({navToggle}) => {
    return (
        // If the navbar is toggled, add a class to trigger its styles
        <SidebarStyled className={`${navToggle ? 'nav-toggle': ''}`}>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    transition: transform 0.4s;   // For sidebar intro and outro

    @media screen and (max-width: 1200px) {
        transform: translateX(-100%);
        z-index: 20; 
    }
`;

export default Sidebar;
