import React, { useEffect, useRef, useState } from 'react';
import albumBook from '../assets/images/book.svg'
import styled from 'styled-components';
import {BsPlus} from 'react-icons/bs'

const AddAlbum = ({title, onChange, onCreateAlbum}) => {
  const nameInput = useRef(null);
  const [isAddAlbum, setIsAddAlbum] = useState(false);

  const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function focusName() {
    await delay(10);
    return nameInput.current.focus();
     
  }
  const addAlbum = () => {
    setIsAddAlbum(true);
    focusName();
  }

  useEffect(() => {
    setIsAddAlbum(false);
  },[]);

  return (
    <AlbumCardBlock onClick={addAlbum}>
        <div>
          <img className="book_img" src={albumBook} alt="album" />
          <div className="text_card">
            <input
              name="title"
              className={isAddAlbum ? "input-title" : "hidden"}
              placeholder="Name"
              ref={nameInput}
              onChange={onChange}
              value={title}
            />
            <BsPlusBlock className={isAddAlbum ? "hidden" : "card-title"}><BsPlus /></BsPlusBlock>
            <button className={isAddAlbum ? "submit" : "hidden"} onClick={onCreateAlbum}>Save</button>
          </div>
        </div>
      </AlbumCardBlock>
  );
};

const AlbumCardBlock = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  position: relative;

  cursor: pointer;

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
  
  .card-title {
    padding: 5px 0;
    font-size: 1.7em;
    color: #2e4052;
  }
  .input-title {
    padding: 5px 0;
    font-size: 1.1em;
    color: #2e4052;
  }
  .submit {
    background-color: #ff7676;
    color: #fff;
    font-size: 0.7em;
    font-weight: 400;

    width: 3em;
    padding: 0.3em 0.5em;
    margin-left: 6em;
    border-radius: 20px;

    cursor: pointer;
  }
  .hidden {
    display: none;
    font-size: 0.9em;
  }
`;

const BsPlusBlock = styled.div``;

export default AddAlbum;