import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'motion/react';

const paginationVariants = cva('inline-flex p-theme-xl rounded-full gap-x-theme-md', {
    variants: {
        variant: {
            light: 'bg-neutral-100',
            dark: 'bg-neutral-800',
            lightPrimary: 'bg-neutral-100',
            darkPrimary: 'bg-neutral-800',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const buttonVariants = cva('size-2 rounded-full block transition-all cursor-pointer relative overflow-hidden', {
    variants: {
        variant: {
            light: 'bg-neutral-300',
            dark: 'bg-neutral-600',
            lightPrimary: 'bg-neutral-300',
            darkPrimary: 'bg-neutral-600',
        },
        active: {
            true: '',
            false: '',
        },
        autoplay: {
            true: '',
            false: '',
        },
    },
    compoundVariants: [
        {
            autoplay: true,
            active: true,
            class: 'w-10',
        },
        {
            autoplay: false,
            active: true,
            variant: 'light',
            class: 'bg-neutral-950',
        },
        {
            autoplay: false,
            active: true,
            variant: 'dark',
            class: 'bg-neutral-25',
        },
        {
            autoplay: false,
            active: true,
            variant: 'lightPrimary',
            class: 'bg-neutral-950',
        },
        {
            autoplay: false,
            active: true,
            variant: 'darkPrimary',
            class: 'bg-neutral-25',
        },
    ],
    defaultVariants: {
        variant: 'light',
        autoplay: false,
        active: false,
    },
});

const fillBarVariants = cva('h-full absolute left-0 top-0', {
    variants: {
        variant: {
            light: 'bg-neutral-950',
            dark: 'bg-neutral-25',
            lightPrimary: 'bg-neutral-950',
            darkPrimary: 'bg-neutral-25',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

type SliderPaginationProps = {
    variant: VariantProps<typeof paginationVariants>['variant'];
    amount: number;
    activeIndex: number;
    autoplay: boolean;
    duration: number;
    label: string;
    onButtonClick?: (index: number) => void;
};

export function SliderPagination({
    variant,
    amount,
    activeIndex,
    duration,
    autoplay,
    label,
    onButtonClick,
    ...args
}: SliderPaginationProps) {
    return (
        <div className={cn(paginationVariants({ variant }))}>
            {Array.from({ length: amount }, (_, index) => {
                return (
                    <button
                        key={index}
                        role="tab"
                        aria-label={`${label} ${index + 1}`}
                        aria-selected={activeIndex === index}
                        aria-current={activeIndex === index ? 'true' : undefined}
                        onClick={() => {
                            if (onButtonClick) {
                                onButtonClick(index);
                            }
                        }}
                        className={cn(
                            buttonVariants({
                                variant,
                                autoplay,
                                active: activeIndex === index,
                            }),
                        )}>
                        {autoplay && (
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: activeIndex === index ? '100%' : 0 }}
                                transition={{ duration: activeIndex === index ? duration / 1000 : 0, ease: 'linear' }}
                                className={cn(
                                    fillBarVariants({
                                        variant,
                                    }),
                                )}></motion.div>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
