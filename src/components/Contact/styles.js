import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    position: absolute;
    top: 0;
    left: 5%;

    svg {        
        background-color: var(--primary);
        box-sizing: content-box;
        padding: 10px;
        font-size: 24px;
        cursor: pointer;
        transition: filter 0.3s;

            &:hover {
                filter: brightness(90%);
            }
    }
`;