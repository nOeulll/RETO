import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import AddAlbum from '../components/AddAlbum';
import AlbumList from '../components/AlbumList';

function AlbumPage() {
  const [inputs, setInputs] = useState({
    counts: 0,
    title: '',
  });
  const { counts, title } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [albums, setAlbums] = useState([
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
  ]);

  const nextId = useRef(6);
  const onCreateAlbum = () => {
    const album = {
      id: nextId.current,
      counts,
      title
    };
    setAlbums(albums.concat(album));

    setInputs({
      counts: 0,
      title: '',
    });
    nextId.current += 1;
  };

  return (
    <AlbumCardListBlock>
      <AlbumList albums={albums} />
      <AddAlbum
        title={title}
        counts={counts}
        onChange={onChange}
        onCreateAlbum={onCreateAlbum}
      />
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
export default AlbumPage;