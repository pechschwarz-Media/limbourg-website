import { getForm } from '@/lib/queries/form/getForm';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { Contact_Form_1_Inner } from './Contact_Form_1_Inner';

const formWrappervariants = cva('p-theme-3xl md:p-theme-4xl rounded-md', {
    variants: {
        variant: {
            dark: 'bg-neutral-100',
            light: 'bg-neutral-100',
            darkPrimary: 'bg-brand-primary-100',
            lightPrimary: 'bg-brand-primary-100',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

export type ContactForm1Props = {
    textblock: AcfTextBlock;
    mail: string;
    phone: string;
    adress: string;
    callingtimes: { day: string; time: string }[];
    form: number;
    settings: Settings;
};

export default async function Contact_Form_1(content: ContactForm1Props) {
    const form = await getForm({ id: content?.form });

    return (
        <Contact_Form_1_Inner
            content={content}
            form={form}
        />
    );
}
