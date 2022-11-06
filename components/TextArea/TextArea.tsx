import React from 'react';

interface Props {
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    name?: string;
    placeholder?: string;
}

function TextArea({ onChange, name, placeholder }: Props) {
    return (
        <textarea
            name={name}
            onChange={onChange}
            className="border border-gray px-3 py-2 rounded-md w-full"
            placeholder={placeholder}
            rows={4}
            data-testid="TextArea"
        />
    );
}

export default TextArea;
