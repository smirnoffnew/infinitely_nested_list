import React, { useState, Fragment } from "react";
import { Button as StyledButton, TextField, Modal, Typography } from '@material-ui/core';
import { setID } from "./functions";

const styles = {
    paper: {
        width: 400,
        height: 100,
        position: 'absolute',
        backgroundColor: 'white',
        border: '2px solid #000',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}


const DefaultItem = ({ addItem }) => {

    
    const [name, setName] = useState("");
    const [id] = useState(setID());
    const [emptyFieldError, setEmptyFieldError] = React.useState(false);

    const openEmptyFieldError = () => { setEmptyFieldError(true); };
    const closeEmptyFieldError = () => { setEmptyFieldError(false); };

    const addItemIfInputNotEmpty = () => {

        name.length > 0

            ? 
                addItem(name)
            :
                openEmptyFieldError(); 

        setName("");
    };


    return (
    <Fragment>

        <li 
            key={id} 
            style={{ display: 'flex', alignItems: 'center' }}
        >
        
            <TextField
                value={name}
                variant='outlined'
                margin='dense'
                type="text"
                onChange={e => { setName(e.target.value); }}
            />

            <StyledButton
                size='medium'
                variant='contained'
                color='primary'
                style={{ marginLeft: '1%' }}
                onClick={e => { addItemIfInputNotEmpty(); }}
            >
                Add
            </StyledButton>

        </li>

        
        <Modal
            aria-describedby="simple-modal-description"
                style={{ ...styles.modal }}
            open={ emptyFieldError }
            onClose={ closeEmptyFieldError }
        >

                <div style={{ ...styles.paper, ...styles.modal}} >
                <Typography
                    variant='body1'
                >
                No item will be added without a name.
                </Typography>
            </div>

        </Modal>

    </Fragment>
    );
};

export default DefaultItem;
