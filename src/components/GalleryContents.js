import React from 'react';
import { Link } from 'react-router-dom';

function GalleryContents(props) {
  return (
    <>
    <ul>
      <li>
        <Link to="/details-photo">SamplePhoto</Link>
      </li>
    </ul>
    <button>Start it!</button>
    </>
  );
}

export default GalleryContents;