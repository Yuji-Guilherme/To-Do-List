import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
    :root {
        --body-background: ${(porps) => porps.theme.BodyBackground};
        --primary-color: ${(porps) => porps.theme.primaryColor};
        --secondary-color: ${(porps) => porps.theme.secondaryColor};
        --input-color: ${(porps) => porps.theme.inputColor};
        --input-border:  ${(porps) => porps.theme.inputBorder};
        --btn-color:  ${(porps) => porps.theme.buttonColor};
        --btn-hover:  ${(porps) => porps.theme.buttonHover};
        --to-do-color: ${(porps) => porps.theme.toDoColor};
        --to-do-checked: ${(porps) => porps.theme.toDoChecked};
        --check-box-background: ${(porps) => porps.theme.checkBoxBackground};
        --checked-color: ${(porps) => porps.theme.checkedColor};
}
`;

export default Colors;
