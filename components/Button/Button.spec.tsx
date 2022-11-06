import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('button', () => {
    it('should render with the right text', () => {
        render(<Button>Any Text</Button>);
        const text = screen.getByText('Any Text');
        expect(text).toBeInTheDocument();
    });

    it('should set the correct type', () => {
        const { getByTestId } = render(<Button type="reset">Any Text</Button>);
        expect(getByTestId('button')).toHaveAttribute('type');
        expect(getByTestId('button').getAttribute('type')).toBe('reset');
    });

    it('should call the onClick function', () => {
        const ev = { onClick: () => {} };
        const onClickSpy = jest.spyOn(ev, 'onClick');

        const { getByTestId } = render(
            <Button type="reset" onClick={onClickSpy as any}>
                Any Text
            </Button>
        );

        const btn = getByTestId('button');
        fireEvent.click(btn);
        fireEvent.click(btn);
        fireEvent.click(btn);
        expect(onClickSpy).toBeCalledTimes(3);
    });
});
