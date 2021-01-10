/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Router from '../components/Router';
import Layout from '../components/Layout';
////background: repeating-linear-gradient(to bottom, #cac6c6, #efecda);
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Times New Roman', Times, serif;
    
    background:  #e6eaeb;

  }
  a.is-selected {
    box-shadow:  0 3px 0 0 #A4E5E0;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <GlobalStyle />
        <Router />
      </Layout>
    </BrowserRouter>
  );
}
export default App;
