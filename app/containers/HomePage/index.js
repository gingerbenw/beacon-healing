/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
// import $ from 'jquery';

// Components
// import PageWrapper from 'components/PageWrapper';

// Images
import Background from 'images/background1.jpg';
import Background2 from 'images/background2.jpg';
import Background4 from 'images/background4.jpg';
import FlameLogo from './logo.png';

// require('jquery.scrollex');

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  // componentDidMount() {

  // }

  render() {
    return (
      <React.Fragment>
        <Banner id="banner" className="bg-img" bg={Background}>
          <div className="inner">
            <header>
              <img src={FlameLogo} alt="Beacon logo" />
              <h1>Dedicated to helping all creatures great and small</h1>
            </header>
          </div>
          <a href="#introduction" className="more">
            <FaChevronDown />
          </a>
        </Banner>
        <PostWrapper
          id="introduction"
          className="wrapper post bg-img"
          bg={Background2}
        >
          <div className="inner">
            <article className="box">
              <header>
                <h2>Spiritual Healing</h2>
                <p>An Introduction to Spiritual Healing in Animals</p>
              </header>
              <div className="content">
                <p>
                  More and more in recent times, complementary methods of
                  healing are being sought, where traditional medicine and its
                  administration alone are not meeting patient&#39;s needs.
                  Natural and spiritual ways are not invasive and support both
                  mind, body and spirit.
                </p>
                <p>
                  It is important that a proper veterinary/medical diagnosis is
                  made. We encourage a holistic approach yet work closely with
                  the veterinary/medical profession.
                </p>
              </div>
              <footer>
                <a href="/spiritual-healing/" className="button alt">
                  Read More
                </a>
              </footer>
            </article>
          </div>
          <a href="#workshops" className="more">
            <FaChevronDown />
          </a>
        </PostWrapper>
        <PostWrapper
          id="workshops"
          className="wrapper post bg-img"
          bg={Background4}
        >
          <div className="inner">
            <article className="box">
              <header>
                <h2>Workshops</h2>
              </header>
              <div className="content">
                <p>
                  The Charles Siddle Foundation for Animal Healing (CSFAH) offer
                  day and weekend workshops, and courses for those interested in
                  exploring the world of healing animals.
                </p>
              </div>
              <footer>
                <a href="/workshops/" className="button alt">
                  Learn More
                </a>
              </footer>
            </article>
          </div>
          <a href="#felicity" className="more">
            <FaChevronDown />
          </a>
        </PostWrapper>
      </React.Fragment>
    );
  }
}

const Banner = styled.div`
  background: url(${props => props.bg});
`;

const PostWrapper = styled.section`
  background: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
