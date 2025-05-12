'use client';

import { Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React from 'react';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
    dataComponent: string;
    className?: string;
    settings: Settings | null;
};

export const sectionVariants = cva('', {
    variants: {
        paddingTop: {
            off: 'pt-0',
            small: 'pt-theme-4xl md:pt-theme-6xl',
            medium: 'pt-theme-4xl sm:pt-theme-6xl md:pt-theme-7xl lg:pt-theme-8xl',
            large: 'pt-theme-6xl sm:pt-theme-7xl md:pt-theme-8xl lg:pt-theme-10xl',
        },
        paddingBottom: {
            off: 'pb-0',
            small: 'pb-theme-4xl md:pb-theme-6xl',
            medium: 'pb-theme-4xl sm:pb-theme-6xl md:pb-theme-7xl lg:pb-theme-8xl',
            large: 'pb-theme-6xl sm:pb-theme-7xl md:pb-theme-8xl lg:pb-theme-10xl',
        },
        variant: {
            dark: 'bg-neutral-950 text-text-alternate',
            light: 'bg-background-primary text-text-primary',
            darkPrimary: 'bg-brand-primary-950 text-text-alternate',
            lightPrimary: 'bg-neutral-100 text-text-primary',
        },
    },
    defaultVariants: {
        paddingTop: 'medium',
        paddingBottom: 'medium',
        variant: 'light',
    },
});

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ dataComponent, className, settings, children, ...props }, ref) => {
        return (
            <section
                data-component={dataComponent}
                className={cn(
                    sectionVariants({
                        paddingTop: settings?.padding?.top,
                        paddingBottom: settings?.padding?.bottom,
                        variant: settings?.variant,
                    }),
                    className,
                )}
                ref={ref}
                {...props}>
                {children}
            </section>
        );
    },
);

Section.displayName = 'Section';
