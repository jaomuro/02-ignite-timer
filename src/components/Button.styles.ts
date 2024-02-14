import styled, {css} from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess'

interface ButtonContainerProps {
    variant: ButtonVariant
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    sucess: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    margin: 2px;
    border-radius: 4px;
    border: 0;


    background-color: ${props => props.theme.primary};
    /* ${props => css`background-color: ${buttonVariants[props.variant]}`} */
     
`