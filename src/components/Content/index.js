import React from 'react';
import LeftSideBar from './LeftSide';
import RightSideBar from './RightSide';
import './index.css';
const Content = () => {

  return (
      <div className='container'>
        <LeftSideBar />
        <RightSideBar />
      </div>
     
  );
};

export default Content;
