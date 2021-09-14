import React, { useEffect, useRef, useState } from 'react';
import albumBook from '../assets/images/book.svg'
import styled from 'styled-components';

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
              className={isAddAlbum ? "card-title" : "hidden"}
              placeholder="Name"
              ref={nameInput}
              onChange={onChange}
              value={title}
            />
            <div className={isAddAlbum ? "hidden" : "card-title"}>+</div>
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
    font-weight: 500;
    font-size: 17px;
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
  }
`;

export default AddAlbum;