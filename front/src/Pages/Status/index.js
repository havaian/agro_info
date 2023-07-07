import React from 'react';
import Status from '../../Components/status';
import { Container } from 'reactstrap';
import Application from './Components/Application';

export default function StatusPage() {
  return (
    <Container>
      <Status />
      <Application />
    </Container>
  );
}
