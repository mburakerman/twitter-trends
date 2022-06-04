import React, { FC } from 'react'
interface EyeProps {
    onClick: () => void
}
const Eye : FC<EyeProps> = ({ onClick }) => (
    <div className="eye" title="Toggle Box" onClick={onClick}>
        <img src="./eye.svg" alt="eye" />
    </div>
)

export default Eye
