import React from 'react';
import PhotoHorizontal from './PhotoHorizontal';
import PhotoVertical from './PhotoVertical';

const ChooseDirection = ({ horizontalToggle, photoData }) => {
  return (
    photoData.length === 0 ?
      <div>There are no photos saved in this album.</div>
      :
      ( horizontalToggle ?
          <PhotoHorizontal 
            photoData={photoData}
          />
        :
          <PhotoVertical
            photoData={photoData}
          /> 
      )
  );
};

export default ChooseDirection;