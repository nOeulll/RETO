import React from 'react';
import styled from 'styled-components';
import DetailsPhotoHorizontal from '../components/DetailsPhotoHorizontal';

function PhotoDetailsPage({ match, history }) {
  
  return (
    <>
      <MainContentsBlock>
        <DetailsPhotoHorizontal />
      </MainContentsBlock>
    </>
  );
}

const MainContentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 5em;

`;

export default PhotoDetailsPage;