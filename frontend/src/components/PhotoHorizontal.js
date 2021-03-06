import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PhotoList from './PhotoList';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

const photoSize = 19;

function PhotoHorizontal({photoData, element = document}) {
  const totalSlides = (photoData.length - 1) * photoSize
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(totalSlides);
    } else {
      setCurrentSlide(currentSlide + photoSize);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - photoSize);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}em)`;
  }, [currentSlide]);

  element.onkeydown = (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  }
    
  return (
    <Container>
      <PhotoListBlock>
        <div className="main_photo" ref={slideRef}>
          <PhotoList photoData={photoData} />
        </div>
      </PhotoListBlock>
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
export default PhotoHorizontal;

const Container = styled.div`
  position: relative;
  
`;

const PhotoListBlock = styled.div`
  width: 76em;
  margin: 0 5em;
  overflow: hidden;

  .main_photo {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;

const Button = styled.div`
  all: unset;
  display: flex;
  position: absolute;
  justify-content: space-between;
  
  box-sizing: border-box;
  padding: 12px 15px;
  width: 100%;
  top: 9.7em;
  left: 50%;
  
  border-radius: 10px;
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
