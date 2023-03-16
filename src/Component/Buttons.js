import React from 'react'
import { Button } from '@mui/material'
const Buttons = (props) => {
    let {click,classes,color,label}=props;

    return (
        <>
        
<Button onClick={click} className={classes} color={color} variant='contained' > {label?? ""}
</Button>

        </>
    )
}

export default Buttons
