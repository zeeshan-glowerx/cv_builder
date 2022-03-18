import React from 'react'
import CommonForm from '../components/Forms'
import Content from '../components/Content'
import GenericPdfDownloader from '../helper/downloadPdf'
const Resume = () => {
  return (
    <>
    <div style={{display:'flex'}}>
      <Content/>
      <CommonForm />
    </div>
    <GenericPdfDownloader/>
    </>
  )
}

export default Resume