import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { HashLink as Link } from 'react-router-hash-link';
import navItems from '../data/navItems';

const Navigation = ({ showSideBar }) => {
    return (
        <div className="flex flex-col h-full py-8 text-black">
            <div className="avatar px-8 mb-8 text-black">
                <div className="w-24 h-24 rounded-full border-4 border-black/20 overflow-hidden mb-4">
                    <img src="https://via.placeholder.com/150" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-xl font-bold tracking-tight">Allard Quek</h1>
                <p className="text-sm opacity-60">NUS Computer Science</p>
            </div>

            <nav className="flex-1">
                <ul className="space-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link 
                                smooth 
                                to={item.path} 
                                onClick={() => window.innerWidth <= 1200 && showSideBar()}
                                className="flex items-center gap-4 px-8 py-3 hover:bg-black/5 transition-colors border-l-4 border-transparent hover:border-black"
                            >
                                <span className="text-sm font-medium tracking-wide uppercase">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <footer className="px-8 pt-8 border-t border-black/10 text-[10px] opacity-40 uppercase tracking-widest">
                <p>© 2026 Allard Quek</p>
                <p>Built with Tailwind + Framer</p>
            </footer>
        </div>
    );
};

export default Navigation;
