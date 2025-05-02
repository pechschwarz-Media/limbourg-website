import { IconArrowLeft } from '@/components/icons/IconArrowLeft';
import { IconArrowRight } from '@/components/icons/IconArrowRight';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    'relative cursor-pointer size-12 flex items-center justify-center z-10 rounded-full border',
    {
        variants: {
            variant: {
                light: 'bg-neutral-200 border-neutral-200',
                dark: 'bg-brand-primary-900 border-brand-primary-800',
                lightPrimary: 'bg-brand-primary-200 border-brand-primary-200',
                darkPrimary: 'bg-brand-primary-900 border-brand-primary-800',
            },
            disabled: {
                true: 'opacity-30 pointer-events-none',
                false: '',
            },
        },
        defaultVariants: {
            variant: 'light',
            disabled: false,
        },
    },
);

type SliderControlProps = {
    variant: VariantProps<typeof buttonVariants>['variant'];
    direction: 'prev' | 'next';
    label: string;
    disabled?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SliderControl({ variant, direction, label, disabled, className, ...args }: SliderControlProps) {
    return (
        <button
            aria-label={label}
            className={cn(buttonVariants({ variant, disabled }), className)}
            {...args}>
            {direction === 'prev' && <IconArrowLeft />}
            {direction === 'next' && <IconArrowRight />}
        </button>
    );
}
