import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 20px;
`;

export const Video = styled.video`
    max-height: 70vh;
    min-height: 40vh;

    max-width: 80vw;

    border-radius: 8px;
`;

export const Name = styled.h1`
    font-size: 18px;
`;