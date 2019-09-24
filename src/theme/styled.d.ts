import 'styled-components';

declare module 'styled-components' {
    export interface IDefaultTheme {
        colors: {
            dark: string;
            primaryRed: string;
            secondaryRed: string;
            darkRed: string;
            grey: string;
        };
    }
}
