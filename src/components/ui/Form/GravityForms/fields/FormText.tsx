import { FormField } from '@/lib/types';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '../../Fields/Input/Input';
import { Inputs } from '../Form';

export function FormText({ field, hookForm }: { field: FormField; hookForm: UseFormReturn<Inputs, any, Inputs> }) {
    return (
        <Input
            label={field?.label}
            type="text"
            {...hookForm?.register('input_' + field?.id, { required: field.isRequired })}
        />
    );
}
