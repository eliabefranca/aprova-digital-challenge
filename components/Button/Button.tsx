import React from 'react';

interface Props {
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
}

function Button({ type = 'button', onClick, children }: Props) {
    return (
        <button
            data-testid="button"
            className="bg-primary text-white py-2 px-6 rounded-md"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
