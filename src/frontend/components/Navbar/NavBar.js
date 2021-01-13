/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
//Syled components
import { BrandName, NavItems } from './NavBarStyles';

const NavBar = () => {
  return (
    <Navbar
      expand='lg'
      bg='color'
      variant='dark'
      className='sticky-top'
      style={{
        backgroundColor: '#60a3d9',
      }}>
      <BrandName>
        <img
          alt='Alejandro Vivanco'
          src='https://i.ibb.co/WpgfrpQ/fotomini.jpg'
          width='50'
          height='45'
          className='d-inline-block align-top mr-2 rounded-circle'
        />

        <Navbar.Brand href='/'>
          <strong style={{ fontSize: '1.2em' }}>Alejandro Vivanco</strong>
        </Navbar.Brand>
      </BrandName>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto mr-4'>
          <NavItems>
            <NavLink
              exact
              to='/academic-projects'
              className='nav-link'
              activeClassName='is-selected'>
              <span style={{ fontSize: '1.2em' }}>
                Academic&nbsp;&nbsp;Projects
                <i className='fa fa-file-code-o ml-2' aria-hidden='true' />
              </span>
            </NavLink>
          </NavItems>
        </Nav>
        <Nav className='mr-4'>
          <NavItems>
            <NavLink
              to='/portfolio'
              className='nav-link'
              activeClassName='is-selected'>
              <span style={{ fontSize: '1.2em' }}>
                Portfolio
                <i className='fa fa-code-fork ml-2' aria-hidden='true' />
              </span>
            </NavLink>
          </NavItems>
        </Nav>
        <Nav className='mr-4'>
          <NavItems>
            <NavLink
              to='/about-me'
              className='nav-link'
              activeClassName='is-selected'>
              <span style={{ fontSize: '1.2em' }}>
                About&nbsp;&nbsp;Me
                <i className='fa fa-address-book-o ml-1' aria-hidden='true' />
              </span>
            </NavLink>
          </NavItems>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
