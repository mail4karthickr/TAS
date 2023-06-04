import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: aliceblue;
  height: 200px;
  cursor: pointer;
`
export const CardDetailsContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  background-color: aliceblue;
`

export const WorkExpContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardDetails = styled.div`
  padding: 10px;
`

export const CardImage = styled.img`
  padding: 10px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

export const Title = styled.div`
  font-weight: bold;
`

export const Description = styled.div`
  font-size: 14px;
  color: #555555;
`