import { Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderFormReducer } from '../../../app/slices/editform';
const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const personalValue = useSelector((state) => state.clickForm.heading);
  const onFinish = (name, value) => {
    const payload = {
      name: name,
      value: value,
    };
    dispatch(HeaderFormReducer(payload));
  };

  return (
    <Form
      initialValues={personalValue}
      onChange={(e) => onFinish('personalInfo', e.target.value)}
      style={{ width: '550px' }}
    >
      <Form.Item name='personalInfo'>
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

export default PersonalInfoForm;
