import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Photo = ({
  id,
  imgUrl,
  date,
  time,
  contents
  }) =>
  {
    console.log(id);
    return (
        <PhotoBlock>
          <Link to={{
            pathname: "/photo",
            state: {
              id: id
            }
          }}>
          <img className="card-img" src={imgUrl} alt={contents} />
          </Link>
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