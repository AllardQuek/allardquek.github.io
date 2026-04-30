import styled from 'styled-components';
import Navigation from './Navigation';
import { useTheme } from '../context/ThemeContext';

const Sidebar = ({navToggle, showSideBar}) => {
    const { currentTheme, setTheme } = useTheme();

    return (
        <SidebarStyled className={navToggle ? 'nav-toggle': ''}>
            <div className="flex flex-col h-full bg-white border-r border-black/10">
                <div className="flex-1 overflow-y-auto">
                    <Navigation showSideBar={showSideBar} />
                </div>
                
                <div className="p-4 border-t border-black/10 space-y-3">
                    <p className="text-[10px] uppercase tracking-widest opacity-50 font-bold mb-2 text-black">Theme Engine</p>
                    <div className="flex justify-around items-center bg-black/5 rounded-lg p-2">
                        <button 
                            onClick={() => setTheme('minimalist')}
                            className={`p-2 rounded-md transition-all text-xs font-bold ${currentTheme === 'minimalist' ? 'bg-black text-white' : 'opacity-50 text-black'}`}
                        >
                            MIN
                        </button>
                        <button 
                            onClick={() => setTheme('terminal')}
                            className={`p-2 rounded-md transition-all text-xs font-bold ${currentTheme === 'terminal' ? 'bg-black text-white' : 'opacity-50 text-black'}`}
                        >
                            TRM
                        </button>
                        <button 
                            onClick={() => setTheme('editorial')}
                            className={`p-2 rounded-md transition-all text-xs font-bold ${currentTheme === 'editorial' ? 'bg-black text-white' : 'opacity-50 text-black'}`}
                        >
                            EDT
                        </button>
                    </div>
                </div>
            </div>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    transition: transform 0.4s;
    z-index: 50;

    @media screen and (max-width: 1200px) {
        transform: translateX(-100%);
        &.nav-toggle {
            transform: translateX(0);
        }
    }
`;

export default Sidebar;
