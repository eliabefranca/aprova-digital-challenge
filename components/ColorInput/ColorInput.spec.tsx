import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ColorInput from './ColorInput';

describe('ColorInput', () => {
    it('should have type color', () => {
        const wrapper = render(<ColorInput />);
        const inputElement = wrapper.getByTestId(
            'ColorInput'
        ) as HTMLInputElement;
        expect(inputElement.type).toBe('color');
    });

    it('should have the correct name', () => {
        const wrapper = render(<ColorInput name="any_name" />);
        const selectElement = wrapper.getByTestId(
            'ColorInput'
        ) as HTMLSelectElement;
        expect(selectElement.name).toBe('any_name');
    });
});
