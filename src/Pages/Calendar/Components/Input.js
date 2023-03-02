import React, { useRef } from 'react';
import moment from 'moment';

const Input = ({ month, setMonth }) => {
  const date = useRef(moment(month, ['YYYY-MM']), []);
  const func = (num) => {
    return date.current.clone().add(num, 'M').format('YYYY-MM');
  };

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <select onChange={handleChange} value={month}>
      <option value={func(-2)}>{func(-2).replace('-', '년 ')}월</option>
      <option value={func(-1)}>{func(-1).replace('-', '년 ')}월</option>
      <option value={func(0)}>{func(0).replace('-', '년 ')}월</option>
      <option value={func(1)}>{func(1).replace('-', '년 ')}월</option>
      <option value={func(2)}>{func(2).replace('-', '년 ')}월</option>
      <option value={func(3)}>{func(3).replace('-', '년 ')}월</option>
      <option value={func(4)}>{func(4).replace('-', '년 ')}월</option>
      <option value={func(5)}>{func(5).replace('-', '년 ')}월</option>
      <option value={func(6)}>{func(6).replace('-', '년 ')}월</option>
      <option value={func(7)}>{func(7).replace('-', '년 ')}월</option>
      <option value={func(8)}>{func(8).replace('-', '년 ')}월</option>
      <option value={func(9)}>{func(9).replace('-', '년 ')}월</option>
      <option value={func(10)}>{func(10).replace('-', '년 ')}월</option>
    </select>
  );
};

export default Input;
