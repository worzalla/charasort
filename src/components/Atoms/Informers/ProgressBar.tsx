// A bar that displays a fraction of completed vs total competitions
import React, { ReactElement } from 'react'
import { LinearProgress } from '@material-ui/core'

interface Props {
    progress: number,
}

export default function ProgressBar({progress}: Props): ReactElement {
    return (
        <LinearProgress variant="determinate" value={progress} />
    )
}
