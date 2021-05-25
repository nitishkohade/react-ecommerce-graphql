import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
    display: flex;
    height: 100%;
    width: 100px;
`

export const LogoDiv = styled.div`
    font-family: cursive;
    text-transform: uppercase;
`
export const LogoText = styled.div`
    font-size: 14px;
    font-weight: 700;
    background: -webkit-linear-gradient( 45deg, #09009f, #00ff95 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0px;
    position: relative;
    top: 10px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`