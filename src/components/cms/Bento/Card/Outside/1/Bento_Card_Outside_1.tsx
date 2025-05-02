import { IconArrowRight } from '@/components/icons/IconArrowRight';
import { Media } from '@/components/ui/Media/Media';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfButton, AcfMedia, AcfTextBlock, Variant } from '@/lib/types';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';

const cardVariants = cva('group block space-y-theme-3xl', {
    variants: {
        size: {
            '1': 'col-span-6 sm:col-span-3 xl:col-span-2 2xl:col-span-1',
            '2': 'col-span-6 sm:col-span-3 xl:col-span-2',
            '3': 'col-span-6 sm:col-span-3',
            '4': 'col-span-6 sm:col-span-3 xl:col-span-4',
            '5': 'col-span-5',
            '6': 'col-span-6',
        },
    },
    defaultVariants: {
        size: '6',
    },
});

const textVariants = cva('max-w-xl space-y-theme-xl', {
    variants: {
        textAlign: {
            left: '',
            center: 'text-center mx-auto',
        },
    },
    defaultVariants: {
        textAlign: 'center',
    },
});

const buttonVariants = cva('inline-flex items-center gap-x-theme-md cursor-pointer font-highlight', {
    variants: {
        variant: {
            light: 'text-text-primary',
            dark: 'text-text-alternate',
            lightPrimary: 'text-text-primary',
            darkPrimary: 'text-text-alternate',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

export type BentoCardOutsite1Props = {
    media: AcfMedia;
    textblock: AcfTextBlock;
    button: AcfButton;
    variant: Variant;
    textAlign: VariantProps<typeof textVariants>['textAlign'];
    size: VariantProps<typeof cardVariants>['size'];
};

export default function Bento_Card_Outside_1({
    media,
    textblock,
    variant,
    size,
    button,
    textAlign,
}: BentoCardOutsite1Props) {
    return (
        <Link
            href={button?.link?.url || '#'}
            className={cn(cardVariants({ size }))}>
            <div className="rounded-xl overflow-hidden">
                <Media
                    media={media}
                    className="group-hover:scale-105 transition-all duration-400"
                />
            </div>
            <div className={cn(textVariants({ textAlign }))}>
                <TextBlock
                    textblock={textblock}
                    variant={variant}
                />
                {button?.link?.url && (
                    <button className={cn(buttonVariants({ variant }))}>
                        {button?.link?.title}
                        <IconArrowRight className="size-4" />
                    </button>
                )}
            </div>
        </Link>
    );
}
