import { FormField } from '@/lib/types';
import { UseFormReturn } from 'react-hook-form';
import { Select } from '../../Fields/Select/Select';
import { Inputs } from '../Form';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';

export function FormHtml({ field }: { field: FormField }) {
    return (
        <Wysiwyg
            text={field.content}
            className="text-regular font-medium"
        />
    );
}
