interface EyeProps {
    onClick: () => void
}

const Eye = (props: EyeProps) : JSX.Element => (
        <div className="eye" title="Toggle Box" {...props}>
            <img src="./eye.svg" alt="eye" />
        </div>
);

export default Eye;
