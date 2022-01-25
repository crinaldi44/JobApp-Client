import React, {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogActions,
    Button,
    DialogContentText,
    TextField,
    Select,
    MenuItem,
    FormControl, InputLabel,
    InputAdornment, Tooltip
} from "@mui/material";
import "./AcceptRejectModal.css"
import ReactToolTip from "react-tooltip";
import axios from "axios";

/**
 * The ModifyModal stateful component accepts the application prop and contains information regarding the dialog
 * presented by it. Stores a state variable - upon button clicked, state variable is toggled and the modal
 * is shown with a set of options allowing the user to confirm the action.
 * @constructor
 */
export const ModifyModal = (props) => {

    /**
     * A state variable that represents the current "show" state of the modal by toggling
     * display CSS value.
     */
    const [open, setOpen] = useState(false)

    /**
     * State variable that represents the application with changes to commit.
     */
    const [application, setApplication] = useState(props.application)

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
     * Handles action taken on confirm. Pushes a patch request to the server. If the application in the state
     * of this component matches, simply closes the modal so as to avoid crowding with unnecessary requests.
     */
    const handleConfirm = async () => {
        await axios.patch(`${process.env.REACT_APP_PRODUCTION_ADDRESS}/${application.id}`, application)
            .then(setOpen(false)).then(props.handler())
            .catch(error => { console.error(error) })
    }

    /**
     * Handles a change when the textfield input changes.
     * @type {(function(*): void)|*}
     */
    const handleFieldDidChange = (prop, event) => {
        setApplication({
            ...application, [prop]: event.target.value
        })
    };

    return (
        <>
            <Tooltip title='Modify application'>
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
                    {`Modifying application: ${application.business_name}`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       Note: This action may be changed at any time by navigating to the application entry's
                        options menu.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="business_name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={application.business_name}
                        onChange={event => {
                            handleFieldDidChange('business_name', event)
                            }
                        }
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Name</InputAdornment>,
                        }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="business_description"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={application.business_description}
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Description</InputAdornment>,
                        }}
                        onChange={(event) => {
                            handleFieldDidChange('business_description', event)
                            }
                        }
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="role_type"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={application.role_type}
                        onChange={(event) => {
                            handleFieldDidChange('role_type', event)
                        }}
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Role</InputAdornment>,
                        }}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={application.status}
                            label="Status"
                            onChange={(event) => {
                                handleFieldDidChange('status', event)
                            }}
                        >
                            <MenuItem value={'PENDING'}>PENDING</MenuItem>
                            <MenuItem value={'ACCEPTED'}>ACCEPTED</MenuItem>
                            <MenuItem value={'REJECTED'}>REJECTED</MenuItem>
                        </Select>
                    </FormControl>
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