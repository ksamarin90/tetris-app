import React from 'react';
import {StyledInfo} from './styles/StyledInfo';

const Display = ({ gameOver, text }) => (
  <StyledInfo> 
        <div>Move: Left, Right</div>
        <br/>
        <div>Drop: Down</div>
        <br/> 
        <div>Rotation: Up</div> 
  </StyledInfo>
);

export default Display;