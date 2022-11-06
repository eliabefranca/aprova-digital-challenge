// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { InputData } from '../../../types';

const userSignup: InputData[] = [
    {
        label: 'Nome',
        type: 'text',
        name: 'name',
        placeholder: 'Digite seu nome',
    },
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'exemplo@mail.com',
    },
    {
        label: 'Sexo',
        type: 'select',
        name: 'sex',
        options: [
            { label: 'Selecione', value: 0 },
            { label: 'Masculino', value: 1 },
            { label: 'Feminino', value: 2 },
            { label: 'Outro', value: 1 },
        ],
        placeholder: 'Selecione o seu sexo',
    },
    {
        label: 'Senha',
        type: 'password',
        name: 'password',
    },
    {
        label: 'Confirme a senha',
        type: 'password',
        name: 'passwordConfirmation',
    },
];

const schedule: InputData[] = [
    {
        label: 'Nome do paciente',
        type: 'text',
        name: 'name',
        placeholder: 'Digite seu nome',
    },
    {
        label: 'Email',
        type: 'email',
        name: 'email',
        placeholder: 'exemplo@mail.com',
    },
    {
        label: 'Selecione o Horário',
        type: 'time',
        name: 'time',
    },
    {
        label: 'Precisará de atestado?',
        type: 'radio',
        name: 'doctors-note',
        options: [
            { label: 'sim', value: 1 },
            { label: 'não', value: 1 },
        ],
    },
    {
        label: 'Informações adicionais',
        type: 'textarea',
        name: 'sex',
        placeholder: 'Digite algo que você acha que seja importante',
    },
];

const product: InputData[] = [
    {
        label: 'Título do produto',
        type: 'text',
        name: 'name',
        placeholder: 'Digite o nome do produto',
    },
    {
        label: 'Preço',
        type: 'number',
        name: 'price',
        placeholder: 'Digite o preço do produto',
    },
    {
        label: 'Quantidade em estoque',
        type: 'number',
        name: 'stock',
        placeholder: 'Digite a quantidade em estoque',
    },
    {
        label: 'Cor',
        type: 'color',
        name: 'color',
        placeholder: 'Selecione a cor do produto',
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<InputData[]>
) {
    let dataToReturn = userSignup;
    const { formType } = req.query;

    if (formType === '2') {
        dataToReturn = schedule;
    }

    if (formType === '3') {
        dataToReturn = product;
    }

    res.status(200).json(dataToReturn);
}
