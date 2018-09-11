/**
 *
 * Felicity
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Header from 'components/Header';

/* eslint-disable react/prefer-stateless-function */
export class Felicity extends React.PureComponent {
  render() {
    return <Header />;
  }
}

Felicity.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Felicity);
