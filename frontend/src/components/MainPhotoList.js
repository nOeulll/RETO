import React, { useEffect, useState } from 'react';
import PhotoHorizontal from './PhotoHorizontal';
import PhotoVertical from './PhotoVertical';
import { allPhotoData } from './data/allPhotoData';

const MainPhotoList = ({ horizontalToggle }) => {
  return (
    (
      horizontalToggle ?
        <PhotoHorizontal 
          photoData={allPhotoData}
        />
      :
        <PhotoVertical
          photoData={allPhotoData}
        />
    )
  );
};

export default MainPhotoList;