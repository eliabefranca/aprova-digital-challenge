import React from 'react';
import FormGroup from '../FormGroup/FormGroup';
import Label from '../Label/Label';
import TextInput from '../TextInput/TextInput';
import Select from '../Select/Select';
import TextArea from '../TextArea/TextArea';
import { InputData } from '../../types';
import ColorInput from '../ColorInput/ColorInput';
import RadioInput from '../RadioInput/RadioInput';

interface Props {
    data: InputData[];
}

function DynamicForm({ data }: Props) {
    return (
        <>
            {data.map(({ type, label, name, placeholder, options }) => {
                if (type === 'select') {
                    return (
                        <FormGroup
                            key={name + type}
                            dataTestId="form-select-group"
                        >
                            <Label>{label}</Label>
                            <Select
                                options={options}
                                name={name}
                                placeholder={placeholder}
                            />
                        </FormGroup>
                    );
                }

                if (type === 'textarea') {
                    return (
                        <FormGroup
                            key={name + type}
                            dataTestId="form-textarea-group"
                        >
                            <Label>{label}</Label>
                            <TextArea name={name} placeholder={placeholder} />
                        </FormGroup>
                    );
                }

                if (type === 'color') {
                    return (
                        <FormGroup
                            key={name + type}
                            dataTestId="form-color-group"
                        >
                            <Label>{label}</Label>
                            <ColorInput name={name} />
                        </FormGroup>
                    );
                }

                if (type === 'radio') {
                    return (
                        <FormGroup
                            key={name + type}
                            dataTestId="form-radio-group"
                        >
                            <RadioInput
                                label={label}
                                options={options}
                                name={name}
                            />
                        </FormGroup>
                    );
                }

                return (
                    <FormGroup key={name + type} dataTestId="form-text-group">
                        <Label>{label}</Label>
                        <TextInput
                            type={type}
                            name={name}
                            placeholder={placeholder}
                        />
                    </FormGroup>
                );
            })}
        </>
    );
}

export default DynamicForm;
