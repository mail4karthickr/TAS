import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { findCandidates } from '../../../slice/candidatesSlice';
import CandidateSearch from './candidateSearch/CandidateSearch';
import CandidateList from './candidateList/CandidateList';

function CandidateFinder() {
  const dispatch = useDispatch()

  const searchButtonTapped = (text) => {
    dispatch(findCandidates(text))
  }

  return (
    <CandidateFinderContainer>
        <Title>Search Candidates</Title>
        <CandidateSearch searchButtonTapped={searchButtonTapped} />
        <CandidateList></CandidateList>
    </CandidateFinderContainer>
  )
}

const CandidateFinderContainer = styled.div`
  padding: 20px;
`

const Title = styled.h2``

export default CandidateFinder;