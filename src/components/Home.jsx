import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
    const { currentTheme } = useTheme();

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1],
            },
        }),
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-20 text-center">
            <div className="max-w-4xl z-10">
                <motion.span 
                    custom={0} initial="hidden" animate="visible" variants={variants}
                    className="inline-block py-1 px-3 rounded-full border border-black/20 text-[10px] uppercase tracking-[0.2em] font-bold mb-8 bg-white/80 backdrop-blur-sm"
                >
                    Software Engineer • Student • Researcher
                </motion.span>
                
                <motion.h1 
                    custom={1} initial="hidden" animate="visible" variants={variants}
                    className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
                >
                    Building the future of computing.
                </motion.h1>

                <motion.p 
                    custom={2} initial="hidden" animate="visible" variants={variants}
                    className="text-lg md:text-xl opacity-70 leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
                >
                    Hi, I'm Allard. I specialize in building high-performance web applications, 
                    venturing into Machine Learning and Cybersecurity at NUS.
                </motion.p>
            </div>
        </section>
    );
};

export default Home;
