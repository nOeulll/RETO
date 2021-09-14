import React, { useEffect, useState } from 'react';
import PhotoHorizontal from './PhotoHorizontal';
import PhotoVertical from './PhotoVertical';

const AlbumPhotoList = ({ horizontalToggle, photoData, counts }) => {
  return (
    <>
      {
        counts === 0 ?
            (
              <div>There are no pictures saved in this album.</div>
            )
          :
            (
              horizontalToggle ?
                <PhotoHorizontal 
                  photoData={photoData}
              
                />
              :
                <PhotoVertical
                  photoData={photoData}
                />
            )
      }
    </>
  );
};

export default AlbumPhotoList;