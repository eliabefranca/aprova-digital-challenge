import React from 'react';

interface Props {
    children?: React.ReactNode;
    className?: string;
    dataTestId?: string;
}

function FormGroup({ children, className = '', dataTestId = '' }: Props) {
    return (
        <div
            className={`flex flex-col gap-2 mb-6 ${className}`}
            data-testid={dataTestId}
        >
            {children}
        </div>
    );
}

export default FormGroup;
