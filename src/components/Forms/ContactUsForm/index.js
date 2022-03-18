import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { contactUsFormReducer } from '../../../app/slices/editform';
const ContactUsForm = () => {
  const dispatch = useDispatch();
  const contactUsValue = useSelector((state) => state.clickForm.contactUs);
  const onFinish = (name, values) => {
    const payload = {
      name: name,
      address: values,
    };
    dispatch(contactUsFormReducer(payload));
  };

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={contactUsValue}
      style={{ width: '550px' }}
      autoComplete='off'
    >
      <Form.Item
        label='address'
        name='address'
        onChange={(e) => onFinish('address', e.target.value)}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='phone'
        name='phone'
        onChange={(e) => onFinish('phone', e.target.value)}
      >
        <Input />
      </Form.Item>
      <Form.Item label='email' name='email' onChange={(e) => onFinish('email', e.target.value)}>
        <Input />
      </Form.Item>
      <Form.Item label='linkedin' name='linkedin' onChange={(e) => onFinish('linkedin', e.target.value)}>
        <Input />
      </Form.Item>
      <Form.Item label='github' name='github' onChange={(e) => onFinish('github', e.target.value)}>
        <Input />
      </Form.Item>

    </Form>
  );
};

export default ContactUsForm;
