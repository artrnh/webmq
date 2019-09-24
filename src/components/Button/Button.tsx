import React from 'react';

import {Wrapper} from './styled';

interface IProps {
    onClick: () => void;
    disabled: boolean;
}

const Button: React.FC<IProps> = ({children, onClick, disabled, ...rest}) => {
    return (
        <Wrapper onClick={onClick} disabled={disabled} {...rest}>
            {children}
        </Wrapper>
    );
};

export default Button;
