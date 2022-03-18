import { Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderFormReducer } from '../../../app/slices/editform';
const HeaderForm = () => {
  const dispatch = useDispatch();
  const headingValue = useSelector((state) => state.clickForm.heading);
  const onFinish = (name, value) => {
    const payload = {
      name: name,
      value: value,
    };
    dispatch(HeaderFormReducer(payload));
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={headingValue}
      style={{width:"550px"}}
      autoComplete='off'
    >
      <Form.Item
        label='Name'
        name='name'
        onChange={(e) => onFinish('name', e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Job'
        name='jobTitle'
        onChange={(e) => onFinish('jobTitle', e.target.value)}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default HeaderForm;
