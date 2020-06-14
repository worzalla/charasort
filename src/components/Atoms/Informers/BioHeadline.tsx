// Single-line that sits at the top of the Bio Card, could be basic information or a quote
import React, { ReactElement } from 'react'

interface Props {
    generation : number,
    bloodType : string,
    age: number,
    height: number,
}

export default function BioHeadline({generation, bloodType, age, height}: Props): ReactElement {
    return (
        <p>
            {generation}ki | {bloodType} | Age {age} | {height} cm
        </p>
    )
}
