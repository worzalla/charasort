// Rectangle with background and text that emphasizes the text
import React, { ReactElement } from 'react'
import {Typography, Card, CardContent, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      background: '#3366FF',
      border: '0px',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
        color: 'white',
        textAlign: 'center',
    },
    pos: {
      marginBottom: 12,
    },
  });
interface Props {
color?: string,
text: string,
width: number
}

export default function InfoPlate({ color, text, width }: Props): ReactElement {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant='outlined' square={true}>
            <CardContent>
                <Typography className={classes.title}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}