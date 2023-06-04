import styled from "styled-components";

export const WorkHistoryListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const WorkHistoryRowContainer = styled.div`
    & > * {
        margin: 0px;
    }
`

export const ViewResume = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`