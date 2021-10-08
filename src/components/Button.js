import React from 'react'
import classes from '../styles/Button.module.css';

export default function Button({className, children}) {
    return (
      <div>
        <div className={`${classes.button} ${className}`}>
          {children}
        </div>
      </div>
    );
}
