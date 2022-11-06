export interface InputOption {
    label: string;
    value: string | number;
}

export interface InputData {
    type:
        | 'radio'
        | 'checkbox'
        | 'text'
        | 'color'
        | 'time'
        | 'email'
        | 'password'
        | 'select'
        | 'textarea'
        | 'number';
    label: string;
    name: string;
    options?: InputOption[];
    placeholder?: string;
}

export type ColorTypes = 'primary' | 'secondary' | 'tertiary';
