import React from 'react';
import styled from 'styled-components';
import albumBook from '../assets/images/book.svg'
import { Link } from 'react-router-dom';

function AlbumCard({
  id,
  counts,
  title,
  }) 
{
  return (
      <AlbumCardBlock>
        <Link to={`/album/${id}`}>
          <img className="book_img" src={albumBook} alt="album" />
          <ul className="text_card">
            <li className="card-title">{title}</li>
            <li>
              <span className="card-counts">{counts}</span>
            </li>
          </ul>
        </Link>
      </AlbumCardBlock>
  );
}

const AlbumCardBlock = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  position: relative;

  .book_img {
    width: 100%;
    height: 100%;
  }

  .text_card {
    box-sizing: border-box;
    padding: 12px 15px;
    width: 100%;
    height: 100%;

    color: #2e4052;
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .card-counts {
    background-color: #ff7676;
    color: #fff;
    font-size: 7px;
    font-weight: 400;
    height: 100%;
    padding: 3px 7px;
    margin-left: 11em;
    border-radius: 20px;
  }

  .card-title {
    padding: 5px 0;
    font-weight: 500;
    font-size: 17px;
  }
`;

export default AlbumCard;
