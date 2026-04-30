import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --glass-bg: rgba(10, 10, 10, 0.85); /* Significantly more opaque */
        --glass-border: rgba(255, 255, 255, 0.12);
        --accent-blue: #0088FF; /* Brighter, more readable blue */
        --bg-void: #050505;
        --text-primary: #FFFFFF;
        --text-secondary: rgba(255, 255, 255, 0.7); /* Improved contrast */
        --font-mono: 'JetBrains Mono', monospace;
        --font-serif: 'Editorial New', serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--bg-void);
        background-image: 
            radial-gradient(circle at 50% 50%, rgba(0, 85, 255, 0.08) 0%, transparent 70%),
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 100% 100%, 80px 80px, 80px 80px;
        background-attachment: fixed;
        color: var(--text-primary);
        font-family: var(--font-mono);
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        letter-spacing: -0.01em;
    }

    h1, h2, .serif {
        font-family: var(--font-serif), serif;
        font-weight: 300;
        text-shadow: 0 0 40px rgba(0, 0, 0, 1); /* Block out background grid behind text */
    }


    .light-theme{
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #ff7675;
        --background-dark-color: #F1F1F1;
        --background-dark-grey: #e4e4e4;
        --border-color: #cbced8;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }
    
    .dark-theme{
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: 'Roboto', 'sans-serif';
        /* font-family: 'B612', sans-serif; */
    }

    body {
        /* transition: all 1s ease; (Putting this here seems to apply to multiple elements) */
        background-color: var(--background-dark-color); 
        color: var(--font-light-color);
    }

    a {
        font-family: inherit;
        color: inherit;
        transition: all 1s ease;
    }

    h1 {
        font-size: 4rem;
        transition: all 1s ease;
        
        span {
            font-size: 4rem;
            color: var(--primary-color);

            // Still need to specify media query here
            @media screen and (max-width: 502px){
                font-size: 3rem
            }
        }

        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }

    
    // Nav Toggler
    .hamburger-menu {
        position: fixed;
        right: 1%;
        top: 2%;
        display: none;
        z-index: 15;

        svg {
            font-size: 3rem;
            color: var(--primary-color);
        }
    }

    @media screen and (max-width: 1200px) {
        .hamburger-menu {
            display: block;
        }
    }

    .nav-toggle {
        transform: translateX(0);   // Previously shifted -100%, now reset to no shift in X
    }
`;

export default GlobalStyle;
