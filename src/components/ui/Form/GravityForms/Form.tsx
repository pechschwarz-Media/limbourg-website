'use client';

import { IconSpin } from '@/components/icons/IconSpin';
import { Button } from '@/components/ui/Button/Button';
import { getForm } from '@/lib/queries/form/getForm';
import { APIRouteFormResponse } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm as useHookForm } from 'react-hook-form';
import { FormRenderer } from './FormRenderer';

export type Inputs = {
    [key: string]: unknown;
};

type FormProps = {
    form: Awaited<ReturnType<typeof getForm>>;
};

function formatInputs(data: Inputs) {
    const obj: Inputs = {};

    for (const [key, value] of Object.entries(data)) {
        obj[key] = value;
    }

    return obj;
}

export function Form({ form }: FormProps) {
    const router = useRouter();
    const hookForm = useHookForm<Inputs>();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean | null>(null);

    async function onSubmit(data: Inputs) {
        setLoading(true);

        const formattedData = formatInputs(data);

        const response = await fetch('/api/form/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                form: form?.id,
                data: formattedData,
            }),
        });

        const { status } = (await response.json()) as APIRouteFormResponse;
        console.log(status);
        if (status) {
            const confirmation = Object.values(form?.confirmations)[0];

            if (confirmation?.type === 'message') {
                router.push('/vielen-dank');
            }

            setSuccess(true);
        } else {
            setMessage('Ein Fehler ist aufgetreten. Versuche es später erneut.');
            setSuccess(false);
        }

        setLoading(false);
    }

    if (success) {
        return <p>{message}</p>;
    }

    if (!form?.fields) {
        return <div>Formular nicht gefunden.</div>;
    }

    return (
        <>
            <form
                className="grid grid-cols-12 gap-theme-xl"
                onSubmit={hookForm.handleSubmit(onSubmit)}>
                <FormRenderer
                    form={form}
                    hookForm={hookForm}
                />
                <div className="col-span-full">
                    <Button
                        as="button"
                        type="submit"
                        variant="primary"
                        disabled={loading}>
                        {form?.button?.text}
                        {loading && <IconSpin className="size-4 animate-spin" />}
                    </Button>

                    {success === false && <div className="text-tiny text-text-error mt-4">{message}</div>}
                </div>
            </form>
            <NeededStaticClasses />
        </>
    );
}

function NeededStaticClasses() {
    return (
        false && (
            <div className="col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12 hidden" />
        )
    );
}
