import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: var(--primary);
    padding: 0 0 60px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    height: 150px;

    h2 {
        color: white;
        opacity: 0.4;
    }
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;

    svg {
        background-color: white;
        padding: 7px;
        font-size: 29px;
        box-sizing: content-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        transition: filter 0.3s;

            &:hover {
                filter: brightness(90%);
            }
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 60%;
    height: 80%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img {
        width: 100%;
        height: auto;
    }
`;
