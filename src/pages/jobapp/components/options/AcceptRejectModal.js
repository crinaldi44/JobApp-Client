import React, {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Button,
    DialogContentText,
    Snackbar,
    Tooltip
} from "@mui/material";
import "./AcceptRejectModal.css"

/**
 * The AcceptRejectModal stateful component accepts the application prop and contains information regarding the dialog
 * presented by it. Stores a state variable - upon button clicked, state variable is toggled and the modal
 * is shown with a set of options allowing the user to confirm the action.
 * @constructor
 */
export const AcceptRejectModal = (props) => {

    /**
     * A state variable that represents the current "show" state of the modal by toggling
     * display CSS value.
     */
    const [open, setOpen] = useState(false)

    /**
     * Handles action taken on button click. When clicked, toggles the
     * state of the AcceptRejectModal from closed to open.
     */
    const handleOpen = () => {
        setOpen(true)
    }

    /**
     * Handles action taken when the user chooses to cancel the action taken.
     */
    const handleClose = () => {
        setOpen(false)
    }

    /**
     * Handles action taken on confirm
     */
    const handleConfirm = () => {
        props.handler()
        setOpen(false)
    }

    return (
        <>
            <Tooltip title={props.buttonTooltip}>
            <i
                style={{color: props.buttonColor, fontSize: '20px'}}
                className={props.buttonIcon}
                onClick={handleOpen}></i>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`Are you sure you want to ${props.action}?`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       This action may be changed at any time by navigating to the application entry's
                        options menu.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )

}