import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editFormReducer } from '../../../../app/slices/editform';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
const AddContent = () => {
  const dispatch = useDispatch();

  const experience = useSelector((state) => state.clickForm.AddMore);
  const handleOnClick = (state) => {
    dispatch(editFormReducer(state));
  };
  return (
    <>
      <div className='rightSIde_heading'>
        <h2 style={{ color: '#1e369c' }}>{experience.title}</h2>
        <Button
          type='primary'
          icon={<EditOutlined />}
          onClick={() => handleOnClick(6)}
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
    </>
  );
};

export default AddContent;
