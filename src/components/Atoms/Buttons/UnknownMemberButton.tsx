// Allows a user to "ignore" a member in the sort if they don't know them, then lists those members after the sort
import React, { ReactElement } from 'react'
import { Button } from '@material-ui/core'

interface Props {
    onClick : () => any
}

export default function UnknownMemberButton({onClick}: Props): ReactElement {
    return (
        <Button color="primary">REMOVE FROM SORT</Button>
    )
}
