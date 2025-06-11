import { FormField } from '@/lib/types';
import { UseFormReturn } from 'react-hook-form';
import { Radio } from '../../Fields/Radio/Radio';
import { Inputs } from '../Form';
import { Checkbox } from '../../Fields/Checkbox/Checkbox';

export function FormCheckbox({ field, hookForm }: { field: FormField; hookForm: UseFormReturn<Inputs, any, Inputs> }) {
    return (
        <div className="relative text-tiny space-y-theme-md">
            {field?.choices?.map((choice, index) => (
                <Checkbox
                    key={choice?.value || index}
                    label={choice?.text}
                    {...hookForm.register('input_' + field?.id + '_' + (index + 1), {
                        required: field?.isRequired,
                    })}
                    value={choice?.value}
                    defaultChecked={choice?.isSelected}
                />
            ))}
        </div>
    );
}
