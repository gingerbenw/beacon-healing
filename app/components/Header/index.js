/**
 *
 * Header
 *
 */

import React from 'react';
import $ from 'jquery';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

import Sidebar from '../Sidebar';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.PureComponent {
  menuToggle() {
    $('#menu').show();
  }

  render() {
    return (
      <React.Fragment>
        <HeaderWrapper id="header">
          <div className="logo">
            <a href="/">
              <span>The</span> Beacon
            </a>
          </div>
          <a href="#menu" onClick={this.menuToggle}>
            <FaBars />
          </a>
        </HeaderWrapper>
        <Sidebar />
      </React.Fragment>
    );
  }
}

Header.propTypes = {};

export default Header;

const HeaderWrapper = styled.header`
  p {
    position: relative;
    margin: 0 0 1.5em 0;
  }

  h2 + p {
    font-size: 1.25em;
    margin-top: -1em;
  }

  h3 + p {
    font-size: 1.1em;
    margin-top: -0.8em;
  }

  h4 + p,
  h5 + p,
  h6 + p {
    font-size: 0.9em;
    margin-top: -0.6em;
  }

  p {
    color: rgba(255, 255, 255, 0.5);
  }
`;
