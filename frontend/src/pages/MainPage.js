import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DirectionSwitch from '../components/DirectionSwitch';
import { allPhotoData } from '../components/data/allPhotoData';
import ChooseDirection from '../components/ChooseDirection';

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
        photoData={allPhotoData}
      />
      <ChooseDirection
        horizontalToggle={horizontalToggle}
        photoData={allPhotoData}
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