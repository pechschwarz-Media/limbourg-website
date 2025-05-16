import { FormField } from '@/lib/types';
import { UseFormReturn } from 'react-hook-form';
import { Radio } from '../../Fields/Radio/Radio';
import { Inputs } from '../Form';
import { Checkbox } from '../../Fields/Checkbox/Checkbox';

export function FormCheckbox({ field, hookForm }: { field: FormField; hookForm: UseFormReturn<Inputs, any, Inputs> }) {
    return (
        <div className="relative text-tiny space-y-theme-md">
            {field?.choices?.map((choice, index) => {
                return (
                    <>
                        {field?.choices?.map((choice, index) => {
                            if (choice?.isSelected) {
                                return (
                                    <>
                                        <Checkbox
                                            label={choice?.text}
                                            key={index}
                                            {...hookForm.register('input_' + field?.id + '_' + (index + 1), {
                                                required: field?.isRequired,
                                            })}
                                            value={choice?.value}
                                            defaultChecked
                                        />
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        <Checkbox
                                            key={index}
                                            label={choice?.text}
                                            {...hookForm.register('input_' + field?.id + '_' + (index + 1), {
                                                required: field?.isRequired,
                                            })}
                                            value={choice?.value}
                                        />
                                    </>
                                );
                            }
                        })}
                    </>
                );
            })}
        </div>
    );
}
