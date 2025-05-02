import { FormField } from '@/lib/types';
import { UseFormReturn } from 'react-hook-form';
import Consent from '../../Fields/Consent/Consent';
import { Inputs } from '../Form';

export function FormConsent({ field, hookForm }: { field: FormField; hookForm: UseFormReturn<Inputs, any, Inputs> }) {
    return (
        <Consent
            label={field?.checkboxLabel}
            {...hookForm?.register('input_' + field?.id + '_1', { required: field.isRequired })}
        />
    );
}
