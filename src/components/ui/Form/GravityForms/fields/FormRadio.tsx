import { FormField } from '@/lib/types';
import { UseFormReturn } from 'react-hook-form';
import { Radio } from '../../Fields/Radio/Radio';
import { Inputs } from '../Form';

export function FormRadio({ field, hookForm }: { field: FormField; hookForm: UseFormReturn<Inputs, any, Inputs> }) {
    return (
        <div className="relative text-tiny space-y-theme-md">
            {field?.choices?.map((choice, index) => {
                return (
                    <Radio
                        key={index}
                        label={choice?.text}
                        value={choice.value}
                        {...hookForm?.register('input_' + field?.id, { required: field.isRequired })}
                    />
                );
            })}
        </div>
    );
}
