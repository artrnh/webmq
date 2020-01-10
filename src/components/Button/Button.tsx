import React, {MouseEvent, FocusEvent} from 'react';

import {Wrapper} from './styled';

interface IProps {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    onFocus?: (e: FocusEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    active?: boolean;
}

const Button: React.FC<IProps> = ({children, ...rest}) => {
    return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Button;
