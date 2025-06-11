'use client';

import { FormField } from '@/lib/types';
import { UseFormReturn, Controller } from 'react-hook-form';
import { Select } from '../../Fields/Select/Select';
import { Inputs } from '../Form';
import { Suspense } from 'react';

export function FormSelect({ field, hookForm }: { field: FormField; hookForm: UseFormReturn<Inputs, any, Inputs> }) {
    const options =
        field?.choices?.map((option) => ({
            value: option.value,
            label: option.text,
        })) ?? [];

    const name = 'input_' + field.id;

    return (
        <Suspense fallback={null}>
            <Controller
                control={hookForm.control}
                name={name}
                rules={{ required: field.isRequired }}
                render={({ field: controllerField }) => (
                    <Select
                        label={field?.label}
                        options={options}
                        value={(controllerField.value ?? '') as string}
                        onChange={(e) => controllerField.onChange(e)}
                        onBlur={controllerField.onBlur}
                        name={controllerField.name}
                        ref={controllerField.ref}
                    />
                )}
            />
        </Suspense>
    );
}
