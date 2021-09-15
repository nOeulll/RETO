import React, { useState } from 'react';
import styled from 'styled-components';
import DetailsPhotoHorizontal from '../components/DetailsPhotoHorizontal';
import { allPhotoData } from '../components/data/allPhotoData';

const photoSize = 76;

function PhotoDetailsPage({ location, element = document }) {
  const id = location.state.id;
  const totalSlides = (allPhotoData.length - 1) * photoSize
  const [currentSlide, setCurrentSlide] = useState(id * photoSize);
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
  element.onkeydown = (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
    }
  };
  return (
    <MainContentsBlock>
      <DetailsPhotoHorizontal 
        photoData={allPhotoData}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
      />
    </MainContentsBlock>
  );
}

const MainContentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default PhotoDetailsPage;