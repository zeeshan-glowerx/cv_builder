import { Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { UpdateExperienceFormReducer } from '../../../app/slices/editform';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const AddMoreExperienceForm = ({ index }) => {
  const dispatch = useDispatch();

  const AddMore = useSelector((state) => state.clickForm.AddMore);
  const onFinish = (name, value) => {
    const payload = {
      index: index,
      name: name,
      value: value,
    };
    dispatch(UpdateExperienceFormReducer(payload));
  };

  return (
    <Form
      {...layout}
      initialValues={AddMore[index]}
      onFinish={onFinish}
      style={{ width: '550px' }}
      autoComplete='off'
    >
      <Form.Item
        name={'title'}
        label='Title'
        onChange={(e) => onFinish('title', e.target.value)}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='organization'
        name='organization'
        onChange={(e) => onFinish('organization', e.target.value)}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='role'
        name='role'
        onChange={(e) => onFinish('role', e.target.value)}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='startDate'
        name='startDate'
        onChange={(e) => onFinish('startDate', e.target.value)}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='endDate'
        name='endDate'
        onChange={(e) => onFinish('endDate', e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='point1'
        label='Point 1'
        onChange={(e) => onFinish('point1', e.target.value)}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name='point2'
        label='Point 2'
        onChange={(e) => onFinish('point2', e.target.value)}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

export default AddMoreExperienceForm;
