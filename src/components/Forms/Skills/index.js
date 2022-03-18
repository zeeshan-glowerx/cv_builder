import { Form, Input } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { skillFormReducer } from '../../../app/slices/editform';
import Rating from '../../../helper/rating';
const SkillsForm = () => {
  const dispatch = useDispatch();
  const skillForm = useSelector((state) => state.clickForm.skills);
  const onFinish = (id, value, rang = 1) => {
    const payload = {
      id: id,
      skill: value,
      rang: rang,
    };
    dispatch(skillFormReducer(payload));
  };
  const onRating = (id, rang = 1) => {
    const payload = {
      id: id,
      skill: skillForm[id].skill,
      rang: rang,
    };
    dispatch(skillFormReducer(payload));
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: '550px' }}
      autoComplete='off'
    >
      {skillForm.map((item, index) => {
        return (
          <Form.Item
            label={`skill ${index + 1}`}
            key={index}
            onChange={(e) => onFinish(index, e.target.value, item.rang)}
          >
            <Input value={item.skill} />
            <Rating
              rang={item.rang}
              onChange={(rang) => onRating(index, rang)}
            />
          </Form.Item>
        );
      })}
    </Form>
  );
};

export default SkillsForm;
