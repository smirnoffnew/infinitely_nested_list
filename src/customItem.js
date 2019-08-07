import React, { useState } from "react";
import { Typography, Button as StyledButton } from '@material-ui/core';
import List from "./list";
import Button from "./button";


const CustomItem = ({ index, itemsLength, name, alterList, id }) => {
    

    const [sublist, setSublist] = useState(false);

    const up = index !== 0 ? true : false;
    const down = index !== itemsLength - 1 ? true : false;

    return (
        <li>

            <Typography
                variant='body1'
                display='inline'
                style={{marginLeft: '1rem', marginRight: '1rem'}}
            >
                {name}

            </Typography>
            

            { up && <Button alterList={alterList} id={id} action={"up"} /> }
            { down && <Button alterList={alterList} id={id} action={"down"} /> }
            { <Button alterList={alterList} id={id} action={"remove"} /> }


            {
                <StyledButton
                    size='small'
                    variant='contained'
                    color='primary'
                    style={{ margin: '0.5%' }}
                    onClick={() => { setSublist(!sublist); }}
                >

                    {` ${ sublist ? "remove" : "add" }   sublist `}

                </StyledButton>
            }

            {sublist && <List />}

        </li>
    );
};

export default CustomItem;
