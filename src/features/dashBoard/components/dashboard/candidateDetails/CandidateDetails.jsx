import React from 'react'
import { useSelector } from 'react-redux'
import { getSelectedCandidate } from '../../../slice/candidatesSlice'
import profilePic from '../../../../../assets/images/candidate.jpg';
import { Title1, Title2, Title3 } from '../../../../../components/fonts.jsx'
import ShortListCandidate from '../common/ShortListCandidate';
import { CandidateImage, Center, DetailsContainer, EmailLink, PhoneNumber } from './CandidateDetailsStyle';
import WorkHistory from './WorkHistory';

function CandidateDetails() {
  const selectedCandidate = useSelector(getSelectedCandidate)

  const NoCandidate = () => {
    return (
      <Center>No Candidate Available</Center>
    )
  }

  const CandidateDetails = () => {
    return (
      <DetailsContainer>
        <CandidateImage src={profilePic} />
        <Title1>{selectedCandidate.name}</Title1>
        <Title2>{selectedCandidate.title}</Title2>
        <Title3>{`Skills: ${selectedCandidate.skillsAsString()}`}</Title3>
        <EmailLink>{selectedCandidate.email}</EmailLink>
        <PhoneNumber>{selectedCandidate.formatPhoneNumber()}</PhoneNumber>
        <ShortListCandidate candidate={selectedCandidate} />
        <WorkHistory />
      </DetailsContainer>
    )
  }

  if (selectedCandidate === null) {
    return NoCandidate()
  } else {
    return <CandidateDetails></CandidateDetails>
  }
}

export default CandidateDetails