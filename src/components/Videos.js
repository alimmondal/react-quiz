import React from 'react'
import classes from '../styles/Videos.module.css';
import Video from './Video';
import {Link} from "react-router-dom";

export default function Videos() {
    return (
      <div>
        <div className={classes.videos}>
          <Link to="/quiz">
            <Video />
          </Link>
          <Link to="/quiz">
            <Video />
          </Link>
          <Link to="/quiz">
            <Video />
          </Link>
          <Link to="/quiz">
            <Video />
          </Link>
          <Link to="/quiz">
            <Video />
          </Link>
          <Link to="/quiz">
            <Video />
          </Link>
          <Link to="/quiz">
            <Video />
          </Link>
        </div>
      </div>
    );
}