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
export const AddApplicationModal = (props) => {

    /**
     * A state variable that represents the current "show" state of the modal by toggling
     * display CSS value.
     */
    const [open, setOpen] = useState(false)

    /**
     * State variable that represents the application with changes to commit.
     */
    const [application, setApplication] = useState({
        business_name: '',
        business_description: '',
        role_type: '',
        status: 'PENDING'
    })

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
        await axios.post(`http://localhost:3000/api/applications/`, application)
            .then(setOpen(false)).then(props.handler())
            .catch(error => {
                console.error(error)
                setOpen(false)})
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
            <Tooltip title='Create new application'>
                <i
                    style={{color: 'white', fontSize: '16px', backgroundColor: props.buttonColor, padding: '10px', borderRadius: '30px', cursor: 'pointer', marginLeft: '10px'}}
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
                    {'Creating new application'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       Use the form below to add an application to the database.
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )

}