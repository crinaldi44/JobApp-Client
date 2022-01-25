import React from 'react';
import {AlertTitle, Alert, Snackbar} from "@mui/material";

/**
 * An InfoSnackbar is a component that allows us to display information in the bottom
 * left corner of the interface without interrupting user activity. Alerts are
 * associated with varying severity and generally can be toggled with a button.
 * @returns {JSX.Element}
 * @param props: props.info represents the text, props.severity represents the severity
 * @see https://mui.com/components/alert/
 */
const InfoSnackbar = (props) => {
  return <Snackbar 
            autoHideDuration={2000}
            open={props.open}
            onClose={props.closeHandler}>
            <Alert severity='info'>
                {props.info}
            </Alert>
        </Snackbar>;
};

/**
 * An InfoSnackbar is a component that allows us to display information in the bottom
 * left corner of the interface without interrupting user activity. Alerts are
 * associated with varying severity and generally can be toggled with a button.
 * @returns {JSX.Element}
 * @see https://mui.com/components/alert/
 */
export default InfoSnackbar;
