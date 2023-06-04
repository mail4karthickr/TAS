import { Subtitle1, Title1, Title2 } from 'components/fonts.jsx'
import { getSelectedCandidate } from 'features/dashBoard/slice/candidatesSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import { WorkHistoryListContainer, WorkHistoryRowContainer, ViewResume } from './WorkHistoryStyles'

function WorkHistory() {
    const selectedCandidate = useSelector(getSelectedCandidate)

    const Row = (workHistory) => {
        return (
            <WorkHistoryRowContainer>
                <Subtitle1>{`${workHistory.name} - ${workHistory.location}`}</Subtitle1>
                <Subtitle1>{`From: ${workHistory.from}`}</Subtitle1>
                <Subtitle1>{`To: ${workHistory.to}`}</Subtitle1>
            </WorkHistoryRowContainer>
        )
    }

    const WorkHistoryList = () => {
        return (
            <WorkHistoryListContainer>
                {selectedCandidate.workHistory.map(workHistory => Row(workHistory))}
                <ViewResume>View Resume</ViewResume>
            </WorkHistoryListContainer>
        )
    }

    const NoWorkHistory = () => {
        <div>No Work History</div>
    }

    if (!selectedCandidate.workHistory.isEmpty) {
        return WorkHistoryList() 
    } else {
        return NoWorkHistory()
    }
}

export default WorkHistory