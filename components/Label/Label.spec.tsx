import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Label from './Label';

describe('Label', () => {
    it('should render its children', () => {
        const wrapper = render(<Label>some text</Label>);
        expect(wrapper.getByTestId('label').innerHTML).toBe('some text');
    });
});
