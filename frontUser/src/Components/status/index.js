import React from 'react';
import { ReactComponent as Icon } from '../../Assets/Icons/check.svg';
import './style.css';

export default function Status() {
  return (
    <div className="wrapper">
      <Icon />
      <h4>Malumotlaringiz qabul qilindi</h4>
    </div>
  );
}
