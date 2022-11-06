import React from 'react';

interface Props {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    name?: string;
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
    placeholder?: string;
}

function TextInput({ onChange, name, type = 'text', placeholder }: Props) {
    return (
        <input
            type={type}
            name={name}
            onChange={onChange}
            className="border border-gray px-3 py-2 rounded-md w-full"
            placeholder={placeholder}
            data-testid="TextInput"
        />
    );
}

export default TextInput;
