import React from 'react'
import { getAllCandidates } from '../../../../slice/candidatesSlice';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CandidateRow from './CandidateRow';

function CandidateList() {
  const candidates = useSelector(getAllCandidates);

  const noCandidates = () => {
    return <div>No candidates found</div>
  }

  const candidatesRow = () => {
    return candidates.map((candidate) => {
        return <CandidateRow 
          key={candidate.id}  
          candidate={candidate}  
        />
    })
  }

  const candidatesList = () => {
    return (
        candidates.isEmpty ? noCandidates() :
        <CandidatesList>{candidatesRow()}</CandidatesList>
    )
  }

  return (
    candidatesList()
  )
}

const CandidatesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default CandidateList