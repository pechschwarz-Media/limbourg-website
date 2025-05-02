import { FormField } from '@/lib/types';
import { UseFormReturn } from 'react-hook-form';
import { Section } from '../../Fields/Section/Section';
import { Inputs } from '../Form';

export function FormSection({ field, hookForm }: { field: FormField; hookForm: UseFormReturn<Inputs, any, Inputs> }) {
    return <Section label={field?.label} />;
}
