import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 500px;

    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    border-radius: ${props => props.theme.borderRadius};
`;
