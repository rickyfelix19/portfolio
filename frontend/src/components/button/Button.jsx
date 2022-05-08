import React from 'react';
import * as styles from './Button.css';

function Button(props) {
  // const styleName = `button-${props.type}`;

  return (
    <div>
      <button className={styleName} onClick={props.handleClick}>
        {props.children}
      </button>
    </div>
  );
}

// Button.propTypes = {};
export default Button;
