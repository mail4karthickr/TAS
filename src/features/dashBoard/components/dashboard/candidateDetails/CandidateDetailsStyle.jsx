import styled from 'styled-components'

const Center = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
gap: 5px;
padding: 15px;

& > * {
  margin: 0px;
}
`

const CandidateImage = styled.img`
padding: 10px;
width: 150px;
height: 150px;
border-radius: 50%;
align-self: center;
`

const EmailLink = styled.span`
color: blue;
cursor: pointer;
text-decoration: underline;
`

const PhoneNumber = styled.span`
color: blue;
`

export {
    Center,
    DetailsContainer,
    CandidateImage,
    EmailLink,
    PhoneNumber
}