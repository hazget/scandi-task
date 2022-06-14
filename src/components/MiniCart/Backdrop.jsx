import React, { Component } from 'react';
import styled from 'styled-components';

const BackdropNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 20;
`

const BackdropMain = styled.div`
  position: absolute;
  margin-top: 80px;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.backdropHeight}px;
  z-index: 20;
  background-color: rgba(57, 55, 72, 0.22);
`

class Backdrop extends Component {
  render() {
    return (
      <div>
        <BackdropNav />
        <BackdropMain backdropHeight={this.props.backdropHeight}/>
      </div>
    )
  }
}

export default Backdrop