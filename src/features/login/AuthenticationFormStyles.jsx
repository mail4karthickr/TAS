import styled from 'styled-components';

export const LoginForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: #f5f5f5;
    width: 350px;
    border-radius: 4px;
`;

export const Heading = styled.h2`
    margin-bottom: 20px;
    color: ${props => props.theme.headingColor};
`

export const FormGroup = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
`

export const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

export const Button = styled.button`
   background-color: #2196f3;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0c7cd5;
    }
`

export const ForgotLink = styled.a`
    text-align: right;
`

export const Link = styled.a`
    color: #777;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`