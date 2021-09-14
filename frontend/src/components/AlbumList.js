import React from 'react';
import styled from 'styled-components';
import AlbumCard from './Album';

function AlbumList(props) {
  const albumCardList = [
    {
      id: 0,
      counts: 26,
      title: "Basic",
    },
    {
      id: 1,
      counts: 6,
      title: "Travel",
    },
    {
      id: 2,
      counts: 13,
      title: "Foods",
    },
    {
      id: 3,
      counts: 4,
      title: "Daily",
    },
    {
      id: 4,
      counts: 0,
      title: "Family",
    },
    {
      id: 5,
      counts: 3,
      title: "Friends",
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