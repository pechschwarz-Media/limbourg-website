import { AcfHeadline } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { JSX } from 'react';
import { Tagline } from '../Tagline/Tagline';

const headlineVariants = cva('font-headline leading-headline', {
    variants: {
        style: {
            h0: 'text-h0',
            h1: 'text-h1',
            h2: 'text-h2',
            h3: 'text-h3',
            h4: 'text-h4',
            h5: 'text-h5',
            h6: 'text-h6',
        },
    },
    defaultVariants: {
        style: 'h2',
    },
});

export type HeadlineProps = {
    headline: AcfHeadline;
    className?: string;
    classNameTagline?: string;
};

export function Headline({ headline, className, classNameTagline }: HeadlineProps) {
    const HeadlineTag = `${headline?.tag ? headline?.tag : 'h2'}` as keyof JSX.IntrinsicElements;

    return (
        <hgroup>
            {headline?.tagline && (
                <Tagline className={cn('mb-theme-2xl', classNameTagline)}>{headline?.tagline}</Tagline>
            )}
            <HeadlineTag
                className={cn('hyphens-auto lg:hyphens-none', headlineVariants({ style: headline?.style }), className)}>
                {headline?.headline}
            </HeadlineTag>
        </hgroup>
    );
}
