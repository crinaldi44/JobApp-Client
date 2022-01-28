import { CircularProgress, Box } from '@mui/material';
import React from 'react';

/**
 * The LoadingBar displays a circular progress bar while blurring
 * the background as content loads into the screen.
 * @returns {JSX.Element}
 * @see https://mui.com/components/progress/
 */
const LoadingBar = () => {


  return (
    <tr>
      <td colSpan='6' style={{backgroundColor: 'rgba(0,0,50, 0.05)', height: '20vh', textAlign: 'center'}}>
          <CircularProgress/>
        </td>
      </tr>
        )
};

/**
 * The LoadingBar displays a circular progress bar while blurring
 * the background as content loads into the screen.
 * @returns {JSX.Element}
 */
export default LoadingBar;
