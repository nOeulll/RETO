import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainPhoto from './MainPhoto';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

const TOTAL_SLIDES = 95;

function MainPhotoList(props) {
  const photoList = [
    {
      id: 0,
      name: 'photoSample01.png',
      date: '2021.09.12',
      time: '14:37',
      contents: '내 미모지',
    },
    {
      id: 0,
      name: 'photoSample02.jpg',
      date: '2021.09.10',
      time: '17:30',
      contents: '스테이크 너무 마시써썽',
    },
    {
      id: 0,
      name: 'photoSample03.png',
      date: '2021.09.10',
      time: '20:23',
      contents: '라이언과 춘식이',
    },
    {
      id: 0,
      name: 'photoSample04.jpg',
      date: '2021.09.09',
      time: '13:09',
      contents: '유리네 새끼 고먐미ㅠㅠ 넘 커여어...',
    },
    {
      id: 0,
      name: 'photoSample05.jpg',
      date: '2021.09.09',
      time: '13:09',
      contents: '오딜 보는고야ㅠㅠ흐잉 넘 조그매!!!',
    },
    {
      id: 0,
      name: 'photoSample06.jpg',
      date: '2021.09.09',
      time: '13:09',
      contents: '고먐미는 사랑,,, 넘 이쀼ㅠㅠㅠ',
    },
  ]
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
      if (currentSlide >= TOTAL_SLIDES) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 19);
      }
    };
    const prevSlide = () => {
      if (currentSlide === 0) {
        setCurrentSlide(TOTAL_SLIDES);
      } else {
        setCurrentSlide(currentSlide - 19);
      }
    };

    useEffect(() => {
      slideRef.current.style.transition = "all 0.8s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}em)`;
    }, [currentSlide]);
    
  return (
    <Container>
      <MainPhotoListBlock>
        <div className="main_photo" ref={slideRef}>
          {
            photoList.map(card => {
              const imgUrl = `../../images/${card.name}`;
              return (
                <MainPhoto
                  id={card.id}
                  imgUrl={imgUrl}
                  contents={card.contents}
                />
              );
            })
          }
        </div>
      </MainPhotoListBlock>
      <Button>
        <button className="pre_button" onClick={prevSlide}>
          <LeftBlock><BsCaretLeftFill /></LeftBlock>
        </button>
        <button className="next_button" onClick={nextSlide}>
          <RightBlock><BsCaretRightFill /></RightBlock>
        </button>
      </Button>
    </Container>
  );
}
export default MainPhotoList;

const Container = styled.div`
  position: relative;
  
`;

const MainPhotoListBlock = styled.div`
  width: 76em;
  margin: 5em;
  overflow: hidden;

  .main_photo {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

const Button = styled.div`
  all: unset;
  border-radius: 10px;

  box-sizing: border-box;
  padding: 12px 15px;
  width: 100%;
  height: 100%;
  
  display: flex;
  position: absolute;
  justify-content: space-between;
  top: 86%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .pre_button {
    color: #2e4052;
    background-color: rgba(0, 0, 0, 0);

    height: 5em;
    margin-right: 10em;
    line-height: 100%;

  }
  .next_button {
    color: #2e4052;
    background-color: rgba(0, 0, 0, 0);

    height: 5em;
    margin-left: 10em;
    line-height: 100%;

  }
`;

const LeftBlock = styled.div`
 font-size: 3em;
 &:hover {
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      color: #ff7676;
    }
    `;
const RightBlock = styled.div`
 font-size: 3em;
 &:hover {
      transition: all 0.2s ease-in-out;
      cursor: pointer;
      color: #ff7676;
    }
`;
