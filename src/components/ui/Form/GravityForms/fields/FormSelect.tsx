import { FormField } from '@/lib/types';
import { UseFormReturn } from 'react-hook-form';
import { Select } from '../../Fields/Select/Select';
import { Inputs } from '../Form';
import { Suspense } from 'react';

export function FormSelect({ field, hookForm }: { field: FormField; hookForm: UseFormReturn<Inputs, any, Inputs> }) {
    const options = field?.choices?.map((option) => {
        return {
            value: option.value,
            label: option.text,
        };
    });

    return (
        <Suspense fallback={null}>
            <Select
                label={field?.label}
                options={options}
                {...hookForm?.register('input_' + field?.id, { required: field.isRequired })}
            />
        </Suspense>
    );
}
