import CheckBoxWithLabel from 'components/CheckBoxWithLabel'
import { candidateShortlisted } from 'features/dashBoard/slice/candidatesSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function ShortListCandidate({ candidate }) {
  const dispatch = useDispatch()

  const handleCheckBoxClicked = (isChecked) => {
    console.log("isChecked", isChecked)
    dispatch(candidateShortlisted({id: candidate.id, isChecked}))
  }
    
  return (
    <CheckBoxWithLabel label="Shortlist" checked={candidate.shortlisted} checkBoxClicked={handleCheckBoxClicked} />
  )
}

export default ShortListCandidate