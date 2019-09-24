import 'styled-components';

declare module 'styled-components' {
    export interface IDefaultTheme {
        colors: {
            background: string;
            text: string;
        };
    }
}
