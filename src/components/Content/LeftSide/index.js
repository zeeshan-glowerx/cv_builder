import React from 'react';
import './index.css';
import { Avatar, Button, Image } from 'antd';
import { EditOutlined,MobileOutlined,LinkedinOutlined,MailOutlined,GithubOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { editFormReducer } from '../../../app/slices/editform';
import Rating from '../../../helper/rating';
import UploadProfile from '../../UploadProfile';


const LeftSide = () => {
  const dispatch = useDispatch();
  const contactUsValue = useSelector((state) => state.clickForm.contactUs);
  const skillsValue = useSelector((state) => state.clickForm.skills);
  const handleOnClick = (state) => {
    dispatch(editFormReducer(state));
  };
  return (
    <div className='leftSide_container'>
      <div>
        <UploadProfile />
      </div>

      <div className='contactUs_container'>
        <div className='leftSIde_heading'>
          <span>Contact Info</span>
          <Button
            type='primary'
            icon={<EditOutlined />}
            onClick={() => handleOnClick(1)}
          />
        </div>
        <ul className='list_container'>
          {contactUsValue.address ? <li><span><EditOutlined /></span>{contactUsValue.address}</li> : null}
          {contactUsValue.phone ? <li><span><MobileOutlined /></span>{contactUsValue.phone}</li> : null}
          {contactUsValue.email ? <li><span><MailOutlined /></span>{contactUsValue.email}</li> : null}
          {contactUsValue.linkedin ? <li><span><LinkedinOutlined /></span>{contactUsValue.linkedin}</li> : null}
          {contactUsValue.github ? <li><span><GithubOutlined /></span>{contactUsValue.github}</li> : null}
        </ul>
        <div className='leftSIde_heading'>
          <span>Skills Summary </span>
          <Button
            type='primary'
            icon={<EditOutlined />}
            onClick={() => handleOnClick(2)}
          />
        </div>
        <ul>
          {skillsValue.map((value, key) => {
            return value.skill ? (
              <li key={key}>
                {value.skill} <Rating rang={value.rang} disabled />
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
