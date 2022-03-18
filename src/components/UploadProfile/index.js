import React from 'react'
import { Upload } from "antd";
import "./index.css"

const UploadProfile = () => {

  const onChange = ({ fileList: newFileList }) => {
console.log(newFileList);
  }
  return (
    <Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    listType="picture-card"
    maxCount={1}
    onChange={onChange}
  >
    +
  </Upload>
  )
}

export default UploadProfile