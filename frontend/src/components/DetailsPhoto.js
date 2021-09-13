import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DetailsPhoto = ({
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
            {/* <input type="submit"/> */}
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

export default DetailsPhoto;