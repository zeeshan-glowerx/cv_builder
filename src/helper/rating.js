import React from 'react';
import { Rate } from 'antd';

const Rating = ({rang,...rest}) => {
  return <span >
    <br/>
<Rate {...rest} style={{ display:'flex',width:'1px' }}  value={rang}  />
  </span> 
};

export default Rating;