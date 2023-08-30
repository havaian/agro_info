import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconUser } from '../../Assets/Icons/user.svg';
import { Container } from 'reactstrap';

export default function Navbar() {
  const navigate = useNavigate();
  function exitFunction() {
    localStorage.removeItem('statToken');
    localStorage.removeItem('statStir');
    navigate('/');
  }
  useEffect(() => {
    const a = localStorage.getItem('statToken');
    if (!a || a?.length < 3) {
      navigate('/');
    }
  }, []);
  return (
    <Container className="mynav">
      <div className="myNavbar">
        <h1>StatAgro</h1>
        <div className="mynavbar-item">
          <IconUser />
          <b>Stir: {localStorage.getItem('statStir')}</b>
        </div>
        <button className="exit" onClick={() => exitFunction()}>
          Chiqish
        </button>
      </div>
    </Container>
  );
}
