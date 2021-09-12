import React from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoMdShare } from "react-icons/io";
import albumBook from '../assets/images/book.svg'

function AlbumCard({
  id,
  counts,
  title,
  }) 
{
  return (
      <RecruitCardBlock>
          <img className="book_img" src={albumBook} alt="album" />
          <ul className="text_card">
            <li className="card-title">{title}</li>
            <li>
              <span className="card-counts">{counts}</span>
            </li>
            {/* <li className="card__recruit-tag_list">
              <span className="card__recruit-tag">#{tag1}</span>
              <span className="card__recruit-tag">#{tag2}</span>
            </li> */}
          </ul>
      </RecruitCardBlock>
  );
}

const RecruitCardBlock = styled.div`
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

  .card__recruit-tag {
    background-color: #e9ecef;
    color: #212529;
    font-size: 7px;
    font-weight: 400;
    height: 100%;
    padding: 3px 7px;
    margin-right: 5px;
    border-radius: 5px;
  }
  .card__recruit-bottom_li {
    line-height: 130%;
    display: flex;
    justify-content: space-between;
    padding: 8px 0 0;
    height: 100%;
  }

`;

const IconBlock1 = styled.div`
  font-size: 20px;
  padding-top: -20px;
  padding-right: 5px;
`;
const IconBlock2 = styled.div`
  font-size: 20px;
  padding-top: -20px;
`;

export default AlbumCard;
