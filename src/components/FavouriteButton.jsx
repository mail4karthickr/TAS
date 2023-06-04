import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const StyledHeartIcon = styled(FaHeart)`
  color: ${({ isFavorite }) => (isFavorite ? 'red' : 'gray')};
  background-color: transparent;
`;

const FavoriteButtonContainer = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
`

const FavoriteButton = ({ favouriteClicked }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    favouriteClicked(!isFavorite);
  };

  return (
    <FavoriteButtonContainer onClick={handleFavoriteClick}>
      <StyledHeartIcon isFavorite={isFavorite} size={24} />
    </FavoriteButtonContainer>
  );
};

export default FavoriteButton;