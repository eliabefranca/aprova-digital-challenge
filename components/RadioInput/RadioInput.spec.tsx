import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import RadioInput from './RadioInput';

describe('RadioInput', () => {
    it('should render the title', () => {
        const wrapper = render(
            <RadioInput name="any_name" label="any_label" />
        );
        const labelElement = wrapper.getByTestId('RadioInput-label');
        expect(labelElement.innerHTML).toBe('any_label');
    });

    it('should render all the options', () => {
        const wrapper = render(
            <RadioInput
                label="any_label"
                options={[
                    {
                        label: 'label_1',
                        value: 'value_1',
                    },
                    {
                        label: 'label_2',
                        value: 'value_2',
                    },
                    {
                        label: 'label_3',
                        value: 'value_3',
                    },
                ]}
            />
        );
        const wrapperElement = wrapper.getByTestId('RadioInput');
        const options = wrapperElement.querySelectorAll('input[type=radio]');
        const optionLabels = wrapperElement.querySelectorAll('label');

        expect(options.length).toBe(3);
        expect(optionLabels[0].innerHTML).toContain('label_1');
        expect(optionLabels[1].innerHTML).toContain('label_2');
        expect(optionLabels[2].innerHTML).toContain('label_3');
    });
});
