import styled from 'styled-components'

export const MainContainer = styled.div`
    position: relative;
    background-color:  ${props => props.theme.primaryColor};
    width: 100vw;
    height: 100vh;


`;

export const LoginFormContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    gap: 5px;
    top: 400px;
    width: 100vw;
`;