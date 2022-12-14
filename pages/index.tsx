import React, { useState } from 'react';
import Head from 'next/head';
import Form from '../components/Form/Form';
import FormGroup from '../components/FormGroup/FormGroup';
import Select from '../components/Select/Select';

const pageTitles = {
    '1': 'Signup',
    '2': 'Schedule',
    '3': 'Add product',
};

export default function Home() {
    const [formType, setFormType] = useState('1');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
        setFormType(event.target.value);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>{`Form Builder | ${
                    pageTitles[formType as keyof {}]
                }`}</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-screen max-w-2xl m-x-auto">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-12 rounded-lg">
                    <h1 className="text-2xl text-center mb-6">
                        Selecione um tipo de formulário
                    </h1>
                    <FormGroup>
                        <Select
                            value={formType}
                            options={[
                                { label: 'Cadastro de usuário', value: '1' },
                                {
                                    label: 'Agendamento de horário',
                                    value: '2',
                                },
                                { label: 'Cadastro de produto', value: '3' },
                            ]}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </div>
                <Form endpoint={`/api/get-form/${formType}`} />
            </main>
        </div>
    );
}
