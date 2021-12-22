import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export class Loader extends Component {
  render() {
    return (
      this.props.loading ?
      <div tabIndex="0" className="loader-overlay is-active is-full-page" aria-label="Loading" style={{backgroundColor: this.props.background, opacity:0.5}} >
        <div className="loader-background"></div>
        <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} stroke={this.props.color}>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle strokeOpacity=".25" cx="18" cy="18" r="18"/>
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.8s"
                  repeatCount="indefinite"/>
              </path>
            </g>
          </g>
        </svg>
      </div> : <div />
    )
  }
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string,
  background: PropTypes.string
};

Loader.defaultProps = {
  color: '#ff0000',
  background: '#ffffff'
}

export default Loader;
