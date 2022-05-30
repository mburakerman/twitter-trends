import React, { FC } from 'react'
interface EyeProps {
    onClick: () => void
}

const Eye : FC<EyeProps> = (props) => (
    <div className="eye" title="Toggle Box" {...props}>
        <img src="./eye.svg" alt="eye" />
    </div>
)

export default Eye
