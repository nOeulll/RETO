import React, { useEffect, useState } from 'react';
import PhotoHorizontal from './PhotoHorizontal';
import PhotoVertical from './PhotoVertical';

const AlbumPhotoList = ({ horizontalToggle, photoData, match }) => {
  return (
    <>
      {
        horizontalToggle ?
        <PhotoHorizontal 
          photoData={photoData}
          
        />
          :
        <PhotoVertical
          photoData={photoData}
        />
      }
    </>
  );
};

export default AlbumPhotoList;