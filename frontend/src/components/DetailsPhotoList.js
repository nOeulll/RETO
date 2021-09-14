import React from 'react';
import styled from 'styled-components';

const DetailsPhoto = ({
  imgUrl,
  photo
}) => {
  const { contents, date, time } = photo;
  return (
    <PhotoBlock>
      <div className="container">
        <img className="card-img" src={imgUrl} alt={contents} />
        <div className="description">
          <div className="dates_wrapper">
            <div className="date">{date}</div>
            <div className="time">{time}</div>
          </div>
          <div className="contents">{contents}</div>
          <input className="submit" type="submit"/>
        </div>
      </div>
    </PhotoBlock>
  );
}

const DetailsPhotoList = ({
  photoData
}) => {
  return (
    photoData.map(photo => {
      const imgUrl = `../../images/${photo.name}`;
      return (
        <DetailsPhoto
          photo={photo}
          imgUrl={imgUrl}
        />
      );
    })
  );
};

const PhotoBlock = styled.div`

  display: flex;
  justify-content: center;

  margin: 6em;
  padding: 3em 10em;
  height: 100%;
  width: 44em;

  box-shadow: 0 0 0.7rem rgba(46, 64, 82, 0.3);  
  border-radius: 2em;

  .container {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 100%;
  }

  .card-img {
    width: 23em;
    height: 100%;
    margin-right: 2.5em;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 2.5em;
  }

  .date {
    font-size: 2em;
    font-weight: 500;
    color: #495057;

    /* padding-top: 1em; */
  }
  .time {
    line-height: 1.5em;
    font-size: 1.2em;
    color: #868e96;
  }

  .contents {
    font-size: 1.5em;
    font-weight: 500;
    color: #212529;
  }

  .submit {
    background-color: #ff7676;
    color: #ffffff;

    box-shadow: 0 0 0.5rem #ced4da;
    border-radius: 2em;

    padding: 0.5rem 1rem;
    margin-left: 14em;
  }
`;

export default DetailsPhotoList;