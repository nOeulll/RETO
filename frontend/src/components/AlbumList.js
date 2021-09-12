import React from 'react';
import styled from 'styled-components';
import AlbumCard from './Album';

function AlbumList(props) {
  const albumCardList = [
    {
      id: 0,
      counts: 10,
      title: "Basic",
    },
    {
      id: 1,
      counts: 1,
      title: "Like",
    },
    {
      id: 2,
      counts: 3,
      title: "Friends",
    },
    {
      id: 3,
      counts: 2,
      title: "Family",
    },
    {
      id: 4,
      counts: 0,
      title: "Daily",
    },
    {
      id: 5,
      counts: 0,
      title: "+",
    },
  ]
  return (
    <AlbumCardListBlock>
      {
        albumCardList.map(card => {
          return (
            <AlbumCard
              id={card.id}
              counts={card.counts}
              title={card.title}
            />
          );
        })
      }
      </AlbumCardListBlock>
  );
}

const AlbumCardListBlock = styled.div`
  margin: 5em 10em;

  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 6rem;
`;
export default AlbumList;