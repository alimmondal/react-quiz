import React from 'react';
import miniImage from '../assets/images/3.jpg';
import classes from '../styles/MiniPlayer.module.css';

export default function MiniPlayer() {
    return (
      <div>
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`}>
          <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
          <span className={`material-icons-outlined ${classes.close}`}> close </span>
          <img src={miniImage} alt="Alt Tag" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
      </div>
    );
}
