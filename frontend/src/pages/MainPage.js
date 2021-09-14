import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DirectionSwitch from '../components/DirectionSwitch';
import MainPhotoList from '../components/MainPhotoList';

function Main() {
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
  
  return (
    <MainContentsBlock>
      <DirectionSwitch
        onToggleHorizontal={onToggleHorizontal}
        onToggleVertical={onToggleVertical}
        horizontalToggle={horizontalToggle}
        verticalToggle={verticalToggle}
      />
      <MainPhotoList
        horizontalToggle={horizontalToggle}
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

export default Main;