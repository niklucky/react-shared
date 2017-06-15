import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content from '../../templates/Content';

class Default extends Component {
  render() {
    return (
      <div >
        <Content>{this.props.children}</Content>
      </div>
    );
  }
}

Default.propTypes = {
  children: PropTypes.any,
};

Default.defaultProps = {
  children: null
};

export default Default;
