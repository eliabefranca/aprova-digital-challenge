import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TextInput from './TextInput';

describe('TextInput', () => {
    it('should have the correct type attribute', () => {
        const wrapper = render(<TextInput type="color" />);
        expect(wrapper.getByTestId('TextInput').getAttribute('type')).toBe(
            'color'
        );
    });

    it('should have the correct name', () => {
        const wrapper = render(<TextInput type="text" name="any_name" />);
        const selectElement = wrapper.getByTestId(
            'TextInput'
        ) as HTMLSelectElement;
        expect(selectElement.name).toBe('any_name');
    });
});
