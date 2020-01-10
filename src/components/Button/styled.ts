import styled, {css} from 'styled-components';

interface IWrapperProps {
    active?: boolean;
    disabled?: boolean;
};

export const Wrapper = styled.button<IWrapperProps>`
    margin: 0 10px;
    padding: 15px;

    color: ${props => props.theme.colors.grey};
    background-color: ${props => props.theme.colors.primaryRed};

    cursor: pointer;
    border-radius: 10%;

    transition: 0.15s background-color, 0.15s box-shadow;

    &:hover {
        background-color: ${props => props.theme.colors.secondaryRed};
        box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.1);
    }

    &:active {
        background-color: ${props => props.theme.colors.darkRed};
    }

    ${props => props.disabled && css`
        opacity: 0.6;
        cursor: default;

        &:hover,
        &:active {
            background-color: ${props => props.theme.colors.primaryRed};
            box-shadow: none;
        }
    `}

    ${props => props.active && css`
        background-color: ${props => props.theme.colors.secondaryRed};
        box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.1);
    `}
`;