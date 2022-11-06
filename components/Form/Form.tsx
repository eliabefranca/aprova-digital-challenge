import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import Button from '../Button/Button';
import { InputData } from '../../types';
import { getForm } from '../../services/getForm';
import DynamicForm from './DynamicForm';

interface Props {
    endpoint: string;
}

function Form({ endpoint }: Props) {
    const query = useQuery<InputData[]>({
        queryKey: ['loadForm'],
        queryFn: () => getForm(endpoint),
    });

    useEffect(() => {
        if (query.data) {
            query.refetch();
        }
    }, [endpoint]);

    if (query.error)
        return (
            <>{`An error has occurred: ${(query.error as Error).message}`}</>
        );

    if (query.isLoading) {
        return (
            <div className="flex gap-2 justify-center items-center text-primary text-xl">
                <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 25 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#232323"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="#232323"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </svg>{' '}
                Carregando...
            </div>
        );
    }

    return (
        <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            action=""
        >
            <DynamicForm data={query.data!} />

            <div className="text-right">
                <Button>Enviar</Button>
            </div>
        </form>
    );
}

export default Form;
