import React from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { editFormReducer } from '../../../app/slices/editform';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
const RightSide = () => {
  const dispatch = useDispatch();

  const handleOnClick = (state) => {
    dispatch(editFormReducer(state));
  };
  const value = useSelector((state) => state.clickForm.heading);
  const experience = useSelector((state) => state.clickForm.experience);
  return (
    <div className='rightSide_container'>
      <div style={{ width: '175px', borderTop: '3px solid #7b92ed' }} />
      <div className='rightSIde_heading'>
        <h1 style={{ color: '#1e369c' }}>{value.name}</h1>
        <Button
          type='primary'
          icon={<EditOutlined />}
          onClick={() => handleOnClick(3)}
        />
      </div>
      <p>{value.jobTitle}</p>
      <div style={{ width: '125px', borderTop: '3px solid #7b92ed' }} />
      <div className='rightSIde_heading'>
        <h2 style={{ color: '#1e369c' }}>Personal Info</h2>
        <Button
          type='primary'
          icon={<EditOutlined />}
          onClick={() => handleOnClick(4)}
        />
      </div>
      <p>{value.personalInfo}</p>

      <div style={{ width: '170px', borderTop: '3px solid #7b92ed' }} />
      <div className='rightSIde_heading'>
        <h2 style={{ color: '#1e369c' }}>{experience.title}</h2>
        <Button
          type='primary'
          icon={<EditOutlined />}
          onClick={() => handleOnClick(5)}
        />
      </div>
      <h3 style={{ color: '#3c7a9e' }}>{experience.organization}</h3>
      <p>
        {experience.role}|{experience.startDate}-
        {experience.endDate === '' ? 'Present' : experience.endDate}
      </p>
      <ul>
        {experience.point1 !== '' ? <li>{experience.point1}</li> : null}
        {experience.point2 !== '' ? <li>{experience.point2}</li> : null}
      </ul>
    </div>
  );
};

export default RightSide;
