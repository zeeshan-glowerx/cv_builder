import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editFormReducer } from '../../../../app/slices/editform';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
const AddContent = () => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.clickForm.AddMore);
  const handleOnClick = (state) => {
    dispatch(editFormReducer(state));
  };
  return (
    <>
      {value.map((elem, key) => {
        return (
          <div key={key}>
            <div className='rightSIde_heading'>
              <h2 style={{ color: '#1e369c' }}>{elem.title}</h2>
              <Button
                type='primary'
                icon={<EditOutlined />}
                onClick={() => handleOnClick(6 + key)}
              />
            </div>
            <h3 style={{ color: '#3c7a9e' }}>{elem.organization}</h3>
            <p>
              {elem.role}|{elem.startDate}-
              {elem.endDate === '' ? 'Present' : elem.endDate}
            </p>
            <ul>
              {elem.point1 !== '' ? <li>{elem.point1}</li> : null}
              {elem.point2 !== '' ? <li>{elem.point2}</li> : null}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default AddContent;
