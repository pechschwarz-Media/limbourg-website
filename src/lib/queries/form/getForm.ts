import { api } from '@/lib/api';
import { FormField } from '@/lib/types';

type FormProps = {
    id: number;
    fields: FormField[];
    confirmations: {
        [key: string]: {
            type: string;
            message: string;
            url: string;
        };
    };
    button: {
        text: string;
    };
};

export async function getForm({ id }: { id: number }) {
    const response = await api<FormProps>(`gf/v2/forms/${id}`, {
        headers: {
            Authorization: `Basic ${btoa(`${process.env.GFORM_API_PUBLIC}:${process.env.GFORM_API_SECRET}`)}`,
            'Content-Type': 'application/json',
        },
    });
    return response;
}
