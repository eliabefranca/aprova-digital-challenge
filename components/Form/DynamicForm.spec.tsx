import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DynamicForm from './DynamicForm';

describe('DynamicForm', () => {
    it('should render a text input field when provided', async () => {
        const wrapper = render(
            <DynamicForm
                data={[
                    {
                        name: 'any_name',
                        label: 'any_label',
                        type: 'text',
                        placeholder: 'any_placeholder',
                    },
                ]}
            />
        );
        const inputGroup = wrapper.getByTestId('form-text-group');
        const labelText = inputGroup.querySelector('label')?.innerHTML;
        const inputElement = inputGroup.querySelector('input');

        expect(inputGroup);
        expect(inputElement?.type).toBe('text');
        expect(inputElement?.name).toBe('any_name');
        expect(inputElement?.placeholder).toBe('any_placeholder');
        expect(labelText).toBe('any_label');
    });

    it('should render a radio input field when provided', async () => {
        const wrapper = render(
            <DynamicForm
                data={[
                    {
                        name: 'any_name',
                        label: 'any_label',
                        type: 'radio',
                        placeholder: 'any_placeholder',
                        options: [
                            {
                                label: 'any',
                                value: 'any',
                            },
                        ],
                    },
                ]}
            />
        );
        const inputGroup = wrapper.getByTestId('form-radio-group');
        const inputElement = inputGroup.querySelector(
            'input[type=radio]'
        ) as HTMLInputElement;

        expect(inputGroup);
        expect(inputElement);
        expect(inputElement?.name).toBe('any_name');
    });

    it('should render a checkbox input field when provided', async () => {
        const wrapper = render(
            <DynamicForm
                data={[
                    {
                        name: 'any_name',
                        label: 'any_label',
                        type: 'checkbox',
                        placeholder: 'any_placeholder',
                    },
                ]}
            />
        );
        const inputGroup = wrapper.getByTestId('form-text-group');
        const labelText = inputGroup.querySelector('label')?.innerHTML;
        const inputElement = inputGroup.querySelector('input');

        expect(inputGroup);
        expect(inputElement?.type).toBe('checkbox');
        expect(inputElement?.name).toBe('any_name');
        expect(inputElement?.placeholder).toBe('any_placeholder');
        expect(labelText).toBe('any_label');
    });

    it('should render a time input field when provided', async () => {
        const wrapper = render(
            <DynamicForm
                data={[
                    {
                        name: 'any_name',
                        label: 'any_label',
                        type: 'time',
                        placeholder: 'any_placeholder',
                    },
                ]}
            />
        );
        const inputGroup = wrapper.getByTestId('form-text-group');
        const labelText = inputGroup.querySelector('label')?.innerHTML;
        const inputElement = inputGroup.querySelector('input');

        expect(inputGroup);
        expect(inputElement?.type).toBe('time');
        expect(inputElement?.name).toBe('any_name');
        expect(inputElement?.placeholder).toBe('any_placeholder');
        expect(labelText).toBe('any_label');
    });

    it('should render an email input field when provided', async () => {
        const wrapper = render(
            <DynamicForm
                data={[
                    {
                        name: 'any_name',
                        label: 'any_label',
                        type: 'email',
                        placeholder: 'any_placeholder',
                    },
                ]}
            />
        );
        const inputGroup = wrapper.getByTestId('form-text-group');
        const labelText = inputGroup.querySelector('label')?.innerHTML;
        const inputElement = inputGroup.querySelector('input');

        expect(inputGroup);
        expect(inputElement?.type).toBe('email');
        expect(inputElement?.name).toBe('any_name');
        expect(inputElement?.placeholder).toBe('any_placeholder');
        expect(labelText).toBe('any_label');
    });

    it('should render a password input field when provided', async () => {
        const wrapper = render(
            <DynamicForm
                data={[
                    {
                        name: 'any_name',
                        label: 'any_label',
                        type: 'password',
                        placeholder: 'any_placeholder',
                    },
                ]}
            />
        );
        const inputGroup = wrapper.getByTestId('form-text-group');
        const labelText = inputGroup.querySelector('label')?.innerHTML;
        const inputElement = inputGroup.querySelector('input');

        expect(inputGroup);
        expect(inputElement?.type).toBe('password');
        expect(inputElement?.name).toBe('any_name');
        expect(inputElement?.placeholder).toBe('any_placeholder');
        expect(labelText).toBe('any_label');
    });

    it('should render a select input field when provided', async () => {
        const wrapper = render(
            <DynamicForm
                data={[
                    {
                        name: 'any_name',
                        label: 'any_label',
                        type: 'select',
                        options: [
                            {
                                label: 'option_label',
                                value: 'option_value',
                            },
                            {
                                label: 'option_label',
                                value: 'option_value',
                            },
                        ],
                    },
                ]}
            />
        );
        const inputGroup = wrapper.getByTestId('form-select-group');
        const labelText = inputGroup.querySelector('label')?.innerHTML;
        const inputElement = inputGroup.querySelector('select');
        const options = inputGroup.querySelectorAll('option');

        expect(inputGroup);
        expect(inputElement?.name).toBe('any_name');
        expect(labelText).toBe('any_label');
        expect(options.length).toBe(2);
        expect(options[0].innerHTML).toBe('option_label');
        expect(options[0].value).toBe('option_value');
    });

    it('should render a textarea input field when provided', async () => {
        const wrapper = render(
            <DynamicForm
                data={[
                    {
                        name: 'any_name',
                        label: 'any_label',
                        type: 'textarea',
                        placeholder: 'any_placeholder',
                    },
                ]}
            />
        );
        const inputGroup = wrapper.getByTestId('form-textarea-group');
        const labelText = inputGroup.querySelector('label')?.innerHTML;
        const inputElement = inputGroup.querySelector('textarea');

        expect(inputGroup);
        expect(inputElement?.type).toBe('textarea');
        expect(inputElement?.name).toBe('any_name');
        expect(inputElement?.placeholder).toBe('any_placeholder');
        expect(labelText).toBe('any_label');
    });

    it('should render a color input field when provided', async () => {
        const wrapper = render(
            <DynamicForm
                data={[
                    {
                        name: 'any_name',
                        label: 'any_label',
                        type: 'color',
                        placeholder: 'any_placeholder',
                    },
                ]}
            />
        );
        const inputGroup = wrapper.getByTestId('form-color-group');
        const labelText = inputGroup.querySelector('label')?.innerHTML;
        const inputElement = inputGroup.querySelector('input');

        expect(inputGroup);
        expect(inputElement?.type).toBe('color');
        expect(inputElement?.name).toBe('any_name');
        expect(labelText).toBe('any_label');
    });
});
