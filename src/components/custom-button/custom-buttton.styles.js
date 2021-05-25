import styled, {css} from 'styled-components'

const buttonStyles = css`
   
`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`

const googleSigninStyles = css`
    background-color: blue;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`
const getButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return googleSigninStyles
    }

    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
   
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
    ${getButtonStyles}
`