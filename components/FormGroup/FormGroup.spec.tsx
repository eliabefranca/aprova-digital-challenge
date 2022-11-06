import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import FormGroup from './FormGroup';

describe('FormGroup', () => {
    it('Should render its children', () => {
        const wrapper = render(
            <FormGroup dataTestId="test-form">
                <div id="someElement"></div>
            </FormGroup>
        );

        const formGroup = wrapper.getByTestId('test-form');
        expect(formGroup.querySelector('#someElement')).toBeTruthy();
    });

    it('Should have the right test id attr', () => {
        const wrapper = render(
            <FormGroup dataTestId="test-form">
                <div id="someElement"></div>
            </FormGroup>
        );

        const formGroup = wrapper.getByTestId('test-form');
        expect(formGroup.getAttribute('data-testid')).toBe('test-form');
    });
});
