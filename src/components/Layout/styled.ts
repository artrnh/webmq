import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 auto;

    color: ${props => props.theme.colors.primaryRed};
    background-color: ${props => props.theme.colors.dark};

    font-weight: bold;
`;
