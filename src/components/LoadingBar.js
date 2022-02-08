import { CircularProgress } from '@mui/material';
import React from 'react';
import useWindowDimensions from './WindowDimensions';

/**
 * The LoadingBar displays a circular progress bar while blurring
 * the background as content loads into the screen.
 * @returns {JSX.Element}
 * @see https://mui.com/components/progress/
 */
const LoadingBar = () => {

  const { width, height } = useWindowDimensions()

  return (
    <tr>
      <td colSpan={width < '800' ? 4 : 6} style={{backgroundColor: 'rgba(0,0,50, 0.05)', height: '20vh', textAlign: 'center'}}>
          <CircularProgress/>
          <p style={{fontSize: '14px'}}>Loading...</p>
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
