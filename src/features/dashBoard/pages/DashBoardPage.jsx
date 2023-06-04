import React, { useState } from 'react'
import CandidateFinder from '../components/dashboard/candidateFinder/CandidateFinder';
import CandidateDetails from '../components/dashboard/candidateDetails/CandidateDetails';
import { useSelector } from 'react-redux';
import { getSelectedCandidateId } from '../slice/candidatesSlice';
import styled from 'styled-components';

function DashBoardPage() {
  return (
    <DashboardContainer>
      <CandidateFinder />
      <CandidateDetails />
    </DashboardContainer>
  )
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: topbaseline;

  & > * {
    flex: 1;
    margin: 0px;
    align-items: center;
    justify-content: center;
  }

  & > *:nth-child(1) {
    background-color: blue;
  }

  & > *:nth-child(2) {
    background-color: green;
  }
`

export default DashBoardPage