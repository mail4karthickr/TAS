import React from 'react'
import { CardContainer, CardImage, Card, CardDetails, Title, Description, CardDetailsContainer, WorkExpContainer } from './CandidateRowStyles';
import profilePic from '../../../../../../assets/images/candidate.jpg';
import { useDispatch } from 'react-redux';
import { candidateSelected } from '../../../../slice/candidatesSlice';
import ShortListCandidate from '../../common/ShortListCandidate';
import { highlight } from 'components/fonts';
import styled from 'styled-components';

function CandidateRow({ candidate }) {
  const dispatch = useDispatch()

  const skills = () => {
    return "Skills: " + candidate.skills.join(', ')
  }

  const experience = () => {
    return "Experience: " + candidate.exp
  }

  const status = () => {
    return "Status: " + candidate.interviewStatus.status
  }

  const handleRowSelection = () => {
    dispatch(candidateSelected({ candidate }))
  }

  const CandidateDetails = styled.div`
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  `

  return (
    <CardContainer>
      <CardDetailsContainer>
        <Title>{candidate.name}</Title>
        <Title>{candidate.title}</Title>
        <WorkExpContainer>
          <Description>{experience()}</Description>
          <Description>{skills()}</Description>
          <Description>{status()}</Description>
        </WorkExpContainer>
        <CandidateDetails onClick={handleRowSelection}>Details</CandidateDetails>
        {/* {
          reason().length > 0 ? <Title>{`Reason: ${reason()}`}</Title> : null
        } */}
        
        <ShortListCandidate candidate={candidate} />
      </CardDetailsContainer>
      <CardImage src={profilePic} alt="" />
    </CardContainer>
  )
}

export default CandidateRow