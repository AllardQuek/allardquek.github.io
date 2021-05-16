import styled from 'styled-components';

export const MainLayout = styled.div`
    padding: 5rem;      // Default padding between each header
    text-align: center;

    // Reduce padding between large components as screen size decreases
    @media screen and (max-width: 642px){
        padding: 4rem;
    }
    @media screen and (max-width: 510px){
        padding: 3rem;
    }

    h1 {
        color: var(--white-color);
        text-transform: uppercase;
        font-size: 2.5rem;
    }

    p {
        margin-top: 1rem;
    }
`;
