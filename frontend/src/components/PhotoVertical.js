import React from 'react';
import styled from 'styled-components';
import PhotoList from './PhotoList';

function PhotoVertical({photoData}) {
  return (
    <Container>
      <PhotoList photoData={photoData} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0em 10em;

  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export default PhotoVertical;