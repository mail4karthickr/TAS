import React, { useState } from 'react'
import styled from 'styled-components';
import SearchBox from './SearchBox';
import SearchButton from './SearchButton';

function CandidateSearch({ searchButtonTapped }) {
   const [text, setText] = useState('')

  const onSearchTextChanged = (searchText) =>  setText(searchText)

  return (
    <Container>
        <SearchBox onTextChanged={onSearchTextChanged} />
        <SearchButton onClick={() => {
          searchButtonTapped(text)
        }} />
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    padding-bottom: 10px;
`

export default CandidateSearch

// Function to add two numbers to the
