import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import Select from './Select';

describe('Select', () => {
    it('should have the correct name', () => {
        const wrapper = render(<Select name="any_name" />);
        const selectElement = wrapper.getByTestId(
            'Select'
        ) as HTMLSelectElement;
        expect(selectElement.name).toBe('any_name');
    });

    it('should render all options with correct values and labels', () => {
        const wrapper = render(
            <Select
                name="any_name"
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
        const selectElement = wrapper.getByTestId(
            'Select'
        ) as HTMLSelectElement;
        const optionsElementList = selectElement.querySelectorAll('option');
        expect(optionsElementList.length).toBe(3);
        expect(optionsElementList[0].innerHTML).toBe('label_1');
        expect(optionsElementList[1].innerHTML).toBe('label_2');
        expect(optionsElementList[2].innerHTML).toBe('label_3');
        expect(optionsElementList[0].value).toBe('value_1');
        expect(optionsElementList[1].value).toBe('value_2');
        expect(optionsElementList[2].value).toBe('value_3');
    });

    // esse é o único componente que usa o onChange e o value nesse projeto
    // então por enquanto só tem esses testes pra ele
    it('should call the onChange function', () => {
        const ev = { onChange() {} };
        const evSpy = jest.spyOn(ev, 'onChange');

        const wrapper = render(
            <Select
                name="any_name"
                onChange={ev.onChange}
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

        const selectElement = wrapper.getByTestId(
            'Select'
        ) as HTMLSelectElement;

        fireEvent.change(selectElement);
        expect(evSpy).toBeCalled();
    });
    it('should have the correct value', () => {
        const wrapper = render(
            <Select
                name="any_name"
                value={3}
                options={[{ label: 'any_label', value: 3 }]}
                onChange={() => {}}
            />
        );
        const selectElement = wrapper.getByTestId(
            'Select'
        ) as HTMLSelectElement;
        expect(selectElement.value).toBe('3');
    });
});
