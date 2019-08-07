import React from "react";
import { Button as StyledButton } from '@material-ui/core';

const Button = ({id, action, alterList}) => {

    
    const setButtonColor = () => {

        return action === "remove" ? "secondary" : "default"
    }

    return (
        <StyledButton
            size='small'
            variant='contained'
            color={setButtonColor()}
            style={{margin: '0.5%'}}
            onClick={() => { alterList(id, action); }}
        >

            {action}

        </StyledButton>
    );
};

export default Button;
