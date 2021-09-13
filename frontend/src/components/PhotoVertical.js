import React from 'react';
import styled from 'styled-components';
import Photo from './Photo';

function PhotoVertical({photoData}) {
  return (
    <Container>
      {
        photoData.map(card => {
          const imgUrl = `../../images/${card.name}`;
          return (
            <Photo
              id={card.id}
              imgUrl={imgUrl}
              contents={card.contents}
            />
          );
        })
      }
      </Container>
  );
}

const Container = styled.div`
  margin: 5em 10em;

  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export default PhotoVertical;