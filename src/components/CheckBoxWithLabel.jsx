import React, { useState } from 'react'
import styled from 'styled-components';

function CheckBoxWithLabel({ label, checked, checkBoxClicked }) {
    
    const handleCheckBoxChange = (event) => {
        event.stopPropagation();
        checkBoxClicked(event.target.checked);
    }

    return (
        <CheckBoxContainer>
            {label}
            <CheckboxInput 
                type="checkbox"
                checked={checked}
                onChange={handleCheckBoxChange}
            />
        </CheckBoxContainer>
    )
}

const CheckBoxContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const CheckboxInput = styled.input`
  transform: scale(1.4); /* Increase the size as desired */
  margin-right: 5px; /* Add some spacing between the checkbox and label text */
`;

export default CheckBoxWithLabel