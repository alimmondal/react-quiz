import React from 'react';
import image from '../assets/images/3.jpg';
import classes from '../styles/Video.module.css';

export default function Video() {
    return (
      <div>
          <div className={classes.video}>
            <img src={image} alt="Video Title" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className={classes.qmeta}>
              <p>10 Questions</p>
              <p>Score : Not taken yet</p>
            </div>
          </div>
      </div>
    );
}



// import classes from "../styles/Video.module.css";

// export default function Video({ title, id, noq }) {
//   return (
//     <div className={classes.video}>
//       <img
//         src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
//         alt={title}
//       />
//       <p>{title}</p>
//       <div className={classes.qmeta}>
//         <p>{noq} Questions</p>
//         <p>Total points : {noq * 5}</p>
//       </div>
//     </div>
//   );
// }