import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Photo = ({
  photo,
  imgUrl,
}) => {
  return (
    <PhotoBlock>
      <Link to={{
        pathname: "/photo",
        state: {
          id: photo.id
        }
      }}>
      <img className="card-img" src={imgUrl} alt={photo.contents} />
      </Link>
    </PhotoBlock>
  );
};

const PhotoList = ({
  photoData
}) => {
  return (
    photoData.map(photo => {
      const imgUrl = `../../images/${photo.name}`;
      return (
        <Photo
          photo={photo}
          imgUrl={imgUrl}
        />
      );
    })
  );
};

const PhotoBlock = styled.div`
  height: 100%;
  padding: 2em;
  
  .card-img {
    width: 15em;
  }
`;

export default PhotoList;