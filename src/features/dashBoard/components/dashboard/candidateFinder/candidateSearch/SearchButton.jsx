import React from 'react'
import styled from 'styled-components';

function SearchButton({ onClick }) {
  return (
    <Button onClick={onClick}>Search</Button>
  )
}

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #2196f3; /* Material Blue */
  color: #fff;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2; /* Darker Material Blue */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.3);
  }
`

export default SearchButton