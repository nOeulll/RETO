import React from 'react';
import styled from 'styled-components';

const Photo = ({
  id,
  imgUrl,
  date,
  time,
  contents
  }) =>
  {
    return (
        <PhotoBlock>
          <img className="card-img" src={imgUrl} alt={contents} />
        </PhotoBlock>
    );
  }

const PhotoBlock = styled.div`
  height: 100%;
  padding: 2em;
  
  .card-img {
    width: 15em;
  }
`;

export default Photo;