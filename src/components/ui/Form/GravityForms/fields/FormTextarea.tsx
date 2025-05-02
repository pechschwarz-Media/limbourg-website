import { FormField } from '@/lib/types';
import { UseFormReturn } from 'react-hook-form';
import { Textarea } from '../../Fields/Textarea/Textarea';
import { Inputs } from '../Form';

export function FormTextarea({ field, hookForm }: { field: FormField; hookForm: UseFormReturn<Inputs, any, Inputs> }) {
    return (
        <Textarea
            label={field?.label}
            rows={5}
            {...hookForm?.register('input_' + field?.id, { required: field.isRequired })}
        />
    );
}
