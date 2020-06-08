// A button that draws users' attention and indicates a major action
import React, { ReactElement } from 'react'
import { Button } from '@material-ui/core'
import { withTheme } from '@material-ui/core/styles'

interface Props {
    disabled : boolean,
    text : string,
    onClick : any
}

const defaultProps: Props = {
    disabled : false,
    text : "",
    onClick : () => {}
}

function EmphasizedButton({disabled, text, onClick}: Props): ReactElement {
    return (
        <div>
            <Button 
                variant="contained" 
                color="primary"
                disabled={disabled}
                size='large'
                onClick={onClick}
            > {text} </Button>
        </div>
    )
};

EmphasizedButton.defaultProps = defaultProps;

export default withTheme(EmphasizedButton);