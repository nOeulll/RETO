import React from 'react';
import styled from 'styled-components';
import DetailsPhotoHorizontal from '../components/DetailsPhotoHorizontal';
import { basicAlbumData } from '../components/data/basicAlbumData';

function PhotoDetailsPage({ location }) {
  const id = location.state.id;
  
  return (
    <>
      <MainContentsBlock>
        <DetailsPhotoHorizontal 
          photoData={basicAlbumData}
          id={id}
        />
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