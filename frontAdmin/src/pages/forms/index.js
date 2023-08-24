import React from 'react';
import Navbar from '../../Components/Navbar';
import { Container } from 'reactstrap';
import BreadcrumbsComponent from '../../Components/Breadcrumbs';
import Content from '../../Components/Content';
import Tables from './components/table';

export default function Table() {
  return (
    <Container>
      <Navbar />
      <BreadcrumbsComponent />
      <Content>
        <Tables />
      </Content>
    </Container>
  );
}
