/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Sidebar extends React.PureComponent {
  render() {
    return (
      <nav id="menu">
        <ul className="links">
          <li>
            <a href="/spiritual-healing/">Spiritual Healing</a>
          </li>
          <li>
            <a href="/workshops/">Workshops</a>
          </li>
          {/* <li><a href="/testimonials">Testimonials</a></li> */}
          {/* <li><a href="/find-a-practitioner">Practitioners</a></li> */}
          <li>
            <a href="/felicity-wilson/">Felicity Wilson</a>
          </li>
          {/* <li><a href="/blog">Blog</a></li> --> */}
        </ul>
      </nav>
    );
  }
}

Sidebar.propTypes = {};

export default Sidebar;
