import React from 'react';

import { InputOption } from '../../types';

interface Props {
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    name?: string;
    options?: InputOption[];
    placeholder?: string;
    value?: string | number;
}

function Select({ onChange, name, options = [], placeholder, value }: Props) {
    return (
        <select
            name={name}
            onChange={onChange}
            className="border border-gray px-3 py-2 rounded-md w-full bg-gray-50"
            placeholder={placeholder}
            value={value}
            data-testid="Select"
        >
            {options.map((opt, index) => (
                <option key={`${value}_${index}`} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}

export default Select;
