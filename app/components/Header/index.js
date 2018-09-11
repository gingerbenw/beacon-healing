/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.PureComponent {
  render() {
    return (
      <header id="header">
        <div className="logo">
          <a href="/">
            <span>The</span> Beacon
          </a>
        </div>
        <a href="#menu">
          <span>Menu</span>
        </a>
      </header>
    );
  }
}

Header.propTypes = {};

export default Header;
