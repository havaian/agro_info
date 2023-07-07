import React from 'react';
import ControllerInfo from '../Controller';
import { Container } from 'reactstrap';
import './style.css';

export default function Table() {
  return (
    <Container>
      <h4 className="title">
        Tashkilotning umumiy faloyati va ko'rsatkichlari bo'yicha pasporti
      </h4>
      <ControllerInfo />
    </Container>
  );
}
