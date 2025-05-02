import { getForm } from '@/lib/queries/form/getForm';
import { cn } from '@/lib/utils';
import { UseFormReturn } from 'react-hook-form';
import { FormConsent } from './fields/FormConsent';
import { FormEmail } from './fields/FormEmail';
import { FormRadio } from './fields/FormRadio';
import { FormSection } from './fields/FormSection';
import { FormSelect } from './fields/FormSelect';
import { FormText } from './fields/FormText';
import { FormTextarea } from './fields/FormTextarea';
import { Inputs } from './Form';

export const FormTypes = {
    select: FormSelect,
    text: FormText,
    email: FormEmail,
    radio: FormRadio,
    textarea: FormTextarea,
    section: FormSection,
    consent: FormConsent,
};

type FormRendererProps = {
    form: Awaited<ReturnType<typeof getForm>>;
    hookForm: UseFormReturn<Inputs, any, Inputs>;
};

export function FormRenderer({ form, hookForm }: FormRendererProps) {
    return form?.fields?.map((field, index) => {
        if (!FormTypes[field.type as keyof typeof FormTypes]) {
            return (
                <div
                    className={cn(`col-span-${field.layoutGridColumnSpan || 12}`)}
                    key={index}>
                    Type <b>{field.type}</b> hat keine zugehörige Komponente!
                </div>
            );
        }

        const Component = FormTypes[field?.type as keyof typeof FormTypes];
        return (
            <div
                key={index}
                className={cn(`col-span-${field.layoutGridColumnSpan || 12}`)}>
                <Component
                    field={field}
                    hookForm={hookForm}
                />
                {hookForm?.formState?.errors['input_' + field?.id] && (
                    <div className="text-tiny text-text-error mt-theme-sm">Bitte das Feld ausfüllen!</div>
                )}
            </div>
        );
    });
}
