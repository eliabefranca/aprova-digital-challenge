import React from 'react';

interface Props {
    children?: React.ReactNode;
}

function Label({ children }: Props) {
    return <label data-testid="label">{children}</label>;
}

export default Label;
