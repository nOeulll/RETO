import React from 'react';
import styled from 'styled-components';

const DirectionSwitch = ({
  onToggleHorizontal,
  onToggleVertical,
  horizontalToggle,
  verticalToggle,
  photoData
}) => {
  return (
    <MainContentsBlock>
      {
        photoData.length === 0 ?
          (null)
        :
          (
            <div className="sort_direction_switch">
              <button 
                className={`${horizontalToggle ? 'on_toggle' : 'not_toggle'}`}
                onClick={onToggleHorizontal}>
                  Horizontal
              </button>
              <button
                className={`${verticalToggle ? 'on_toggle' : 'not_toggle'}`}
                onClick={onToggleVertical}>
                  Vertical
              </button>
            </div>
          )
      }
    </MainContentsBlock>
  );
};

const MainContentsBlock = styled.div`
  margin-left: 59em;

  .sort_direction_switch {
    display: flex;
    justify-content: space-between;
  
    background-color: #ffffff;
    box-shadow: 0.2rem 0.1rem 0.6rem #ced4da;
    
    width: 4em;
    font-size: 3em;
    font-weight: 500;
    border-radius: 2em;

  }
  button {
    padding: 0.7rem 1.3rem;
    border-radius: 2em;
    width: 100%;
  }
  
  .on_toggle {
    background-color: #ff7676;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
  .not_toggle {
    background-color: #ffffff;
    color: #2e4052;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }

`;

export default DirectionSwitch;