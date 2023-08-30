import React from 'react';
import Status from '../../Components/status';
import { Container } from 'reactstrap';
import Application from './Components/Application';
import Navbar from '../../Components/Navbar';

export default function StatusPage() {
  return (
    <>
      <Navbar />
      <Container>
        <Status />
        <Application />
      </Container>
    </>
  );
}
