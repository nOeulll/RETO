import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DirectionSwitch from '../components/DirectionSwitch';
import AlbumPhotoList from '../components/AlbumPhotoList';
import { albumData } from '../components/data/albumData';

function AlbumPhotoListPage({ match, location }) {
  const [horizontalToggle, setHorizontalToggle] = useState(false);
  const [verticalToggle, setVerticalToggle] = useState(false);
  const onToggleHorizontal = () => {
    setHorizontalToggle(true);
    setVerticalToggle(false);
  };
  const onToggleVertical = () => {
    setVerticalToggle(true);
    setHorizontalToggle(false);
  };

  useEffect(() => {
    setHorizontalToggle(true);
  },[]);

  const { albumId } = match.params;
  const photoData = albumData[albumId];
  if (!photoData) {
    return <div>This album doesn't exist.</div>;
  }
  const counts = location.state.counts;
  
  return (
    <MainContentsBlock>
      <DirectionSwitch
        onToggleHorizontal={onToggleHorizontal}
        onToggleVertical={onToggleVertical}
        horizontalToggle={horizontalToggle}
        verticalToggle={verticalToggle}
        counts={counts}
      />
      <AlbumPhotoList
        horizontalToggle={horizontalToggle}
        photoData={photoData}
        match={match}
        counts={counts}
      />
    </MainContentsBlock>
  );
}

const MainContentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 7em;

`;

export default AlbumPhotoListPage;