import axios from 'axios';
import { InputData } from '../types';

export const getForm = (endpoint: string): Promise<InputData[]> =>
    axios
        .get<InputData[]>(endpoint)
        .then((res) => res.data)
        .then((data) => {
            return data;
        })
        .catch((err) => err);
