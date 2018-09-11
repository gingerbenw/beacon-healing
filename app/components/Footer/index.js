/**
 *
 * Footer
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.PureComponent {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <h2>Get in touch</h2>
          <form
            action="https://submit.jotformeu.com/submit/82416231244347/"
            method="post"
            name="form_82416231244347"
            id="82416231244347"
            acceptCharset="utf-8"
          >
            <div className="field half first">
              {/* <label htmlFor="name">Name</label> */}
              <input
                id="input_6"
                name="q6_name"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="field half">
              {/* <label htmlFor="q4_email">Email</label> */}
              <input
                id="q4_email"
                name="q4_email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="field">
              {/* <label htmlFor="q5_message">Message</label> */}
              <textarea
                id="input_5"
                name="q5_message"
                rows="6"
                placeholder="Message"
              />
            </div>
            <ul className="actions">
              <li>
                <input
                  value="Send Message"
                  id="input_2"
                  className="button alt"
                  type="submit"
                />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/CSFAH"
                className="icon round fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {};

export default Footer;
