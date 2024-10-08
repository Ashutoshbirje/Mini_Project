import React, { useState } from 'react'

import { poseInstructions } from '../../utils/data'

import './Instructions.css'

export default function Instructions({ currentPose }) {

    const [instructions] = useState(poseInstructions)

    return (
        <div className="instructions-container">
            <ul className="instructions-list">
                {instructions[currentPose].map((instruction) => {
                    return(
                        <li className="instruction">{instruction}</li>
                    )
                })}
            </ul>
        </div>
    )
}
