import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TextArea from './TextArea';

describe('TextArea', () => {
    it('should show the correct name', () => {
        const wrapper = render(<TextArea name="any_name" />);
        const textAreaEl = wrapper.queryByTestId(
            'TextArea'
        ) as HTMLTextAreaElement;
        expect(textAreaEl.name).toBe('any_name');
    });

    it('should show the correct placeholder', () => {
        const wrapper = render(
            <TextArea name="any_name" placeholder="any_placeholder" />
        );
        const textAreaEl = wrapper.queryByTestId(
            'TextArea'
        ) as HTMLTextAreaElement;
        expect(textAreaEl.placeholder).toBe('any_placeholder');
    });
});
