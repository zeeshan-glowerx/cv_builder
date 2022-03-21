import React from 'react';
import ContactUsForm from './ContactUsForm';
import Skills from './Skills';
import HeaderForm from './HeadingForm';
import './index.css';
import { useSelector } from 'react-redux';
import PersonalInfoForm from './PersonalForm';
import ExperienceForm from './ExperienceForm';
import AddMoreExperienceForm from './AddMoreForm';

const CommonForm = () => {
  const click = useSelector((state) => state.clickForm.click);

  const renderForms = () => {
    switch (click) {
      case 0:
        return (
          <div className='form_context'>
            <span
              style={{
                textAlign: 'center',
                height: 300,
                lineHeight: '200px',
              }}
            >
              Click edit button of any block in the template
            </span>
          </div>
        );
      case 1:
        return <ContactUsForm />;
      case 2:
        return <Skills />;
      case 3:
        return <HeaderForm />;
      case 4:
        return <PersonalInfoForm />;
      case 5:
        return <ExperienceForm />;
      case 6:
        return <AddMoreExperienceForm index={0}/>;
      case 7:
        return <AddMoreExperienceForm index={1}/>;
      default:
        break;
    }
  };

  return <div>{renderForms()}</div>;
};

export default CommonForm;
