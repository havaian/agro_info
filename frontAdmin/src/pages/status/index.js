import React from 'react';
import Application from './Components';
import { Container } from 'reactstrap';
import Navbar from '../../Components/Navbar';
import BreadcrumbsComponent from '../../Components/Breadcrumbs';
import Content from '../../Components/Content';

export default function Detail() {
  return (
    <Container>
      <Navbar />
      <BreadcrumbsComponent />
      <Content>
        <Application />
      </Content>
    </Container>
  );
}
