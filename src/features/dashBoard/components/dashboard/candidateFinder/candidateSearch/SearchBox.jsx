import React from 'react'
import styled from 'styled-components';

const SearchBox = ({ onTextChanged }) => {  
  const textChanged = (event) => {
    event.preventDefault();
    onTextChanged(event.target.value)
  }
  return (
    <SearchContainer>
      <SearchIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Search"
        onChange={textChanged}
      />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    background-color: aliceblue;
`

const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  width: 100%;
`;

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: #f0f0f0;
`;

export default SearchBox