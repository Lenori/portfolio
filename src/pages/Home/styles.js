import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 30vh;
    background-color: var(--tertiary);

    h1 {
        color: var(--secondary);
        font-size: 25px;

        span {
            color: var(--primary);
            font-weight: bold;
        }
    }

    p {
        font-size: 14px;
        color: var(--primary);

        span {
            color: var(--secondary);
            font-weight: bold;
        }
    }
`;