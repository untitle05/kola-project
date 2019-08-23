/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Segment,
  Container,
  Header,
  Grid,
  List,
} from 'semantic-ui-react';
import { black } from 'ansi-colors';
// import './Footer-style.css'

const Footer = () => {
  const colorText = {
    color: black,
  };
  return (

    <div
      className="ui vertical footer segment fixed"
      style={{
        padding: '6em 0em', height: 2, position: 'relative', bottom: -500,
      }}
    >
      <div className="ui center aligned container" style={colorText}>
        <h4 className="ui header">&copy; Kola Finance 2019 | All rights reserved </h4>
        <a href="https://www.facebook.com/"><i className="facebook black square icon big" /></a>
        <a href="https://twitter.com/"><i className="twitter black square icon big" /></a>
        <a href="https://www.linkedin.com/company/c"><i className="linkedin black square icon big" /></a>
      </div>
    </div>

  );
};

export default Footer;
