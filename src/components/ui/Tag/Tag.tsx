import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const tagVariants = cva('h-7 border px-theme-md rounded-md inline-flex items-center text-small', {
    variants: {
        variant: {
            info: 'bg-system-info-50 text-system-info-600 border-system-info-50',
            dark: 'bg-brand-primary-900 text-text-alternate border-brand-primary-800',
            light: 'bg-neutral-100 text-text-primary border-neutral-100 font-medium',
            darkPrimary: 'bg-brand-primray-900 text-text-alternate border-brand-primary-800 ',
            lightPrimary: 'bg-neutral-25 text-text-primary border-neutral-100',
        },
    },
    defaultVariants: {
        variant: 'info',
    },
});

type TagProps = {
    variant: VariantProps<typeof tagVariants>['variant'];
    children: React.ReactNode;
    className?: string;
};

export function Tag({ children, variant, className }: TagProps) {
    return <div className={cn(tagVariants({ variant }), className)}>{children}</div>;
}
