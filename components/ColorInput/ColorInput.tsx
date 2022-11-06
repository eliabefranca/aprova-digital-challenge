import React from 'react';

interface Props {
    name?: string;
}

function ColorInput({ name }: Props) {
    return (
        <input
            className="block w-full min-h 24 p-1 rounded-lg"
            name={name}
            type="color"
            data-testid="ColorInput"
        />
    );
}

export default ColorInput;
