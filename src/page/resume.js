import React from 'react';
import CommonForm from '../components/Forms';
import Content from '../components/Content';
import GenericPdfDownloader from '../helper/downloadPdf';
const Resume = () => {
  return (
    <>
      <GenericPdfDownloader />
      <div  style={{ display: 'flex' }}>
        <span id='resume'>
          <Content />
        </span>
        <CommonForm />
      </div>
    </>
  );
};

export default Resume;
