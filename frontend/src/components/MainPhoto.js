import React from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoMdShare } from "react-icons/io";

const MainPhoto = ({
  id,
  imgUrl,
  date,
  time,
  contents
  }) =>
  {
    return (
        <MainPhotoBlock>
          <img className="card-img" src={imgUrl} alt={contents} />
        </MainPhotoBlock>
    );
  }

const MainPhotoBlock = styled.div`
  height: 100%;
  padding: 2em;
  
  .card-img {
    width: 15em;
  }


`;

export default MainPhoto;