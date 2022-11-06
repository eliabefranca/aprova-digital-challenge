import React from 'react';
import { InputOption } from '../../types';

interface Props {
    name?: string;
    label: string;
    options?: InputOption[];
}

function RadioInput({ name, label, options = [] }: Props) {
    return (
        <div className="flex flex-col" data-testid="RadioInput">
            <div className="mb-3" data-testid="RadioInput-label">
                {label}
            </div>
            {options.map((opt, index) => (
                <label
                    className="mb-2 block w-full"
                    key={`${opt.value}_${index}`}
                    htmlFor={`${opt.value}_${index}`}
                >
                    <input
                        id={`${opt.value}_${index}`}
                        type="radio"
                        name={name}
                    />{' '}
                    {opt.label}
                </label>
            ))}
        </div>
    );
}

export default RadioInput;
