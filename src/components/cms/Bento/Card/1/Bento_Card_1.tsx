import { Media } from '@/components/ui/Media/Media';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfMedia, AcfTextBlock } from '@/lib/types';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const cardVariants = cva('rounded-xl overflow-hidden', {
    variants: {
        variant: {
            dark: 'bg-neutral-900 text-text-alternate',
            light: 'bg-neutral-100 text-text-primary',
            darkPrimary: 'bg-brand-primary-900 text-text-alternate',
            lightPrimary: 'bg-brand-primary-100 text-text-primary',
        },
        size: {
            '1': 'col-span-6 sm:col-span-3 xl:col-span-2 2xl:col-span-1',
            '2': 'col-span-6 sm:col-span-3 xl:col-span-2',
            '3': 'col-span-6 sm:col-span-3',
            '4': 'col-span-6 sm:col-span-3 xl:col-span-4',
            '5': 'col-span-5',
            '6': 'col-span-6',
        },
        height: {
            auto: 'h-auto',
            large: 'h-96',
            medium: 'h-80',
            small: 'h-64',
        },
        padding: {
            large: 'p-theme-4xl md:p-theme-8xl',
            medium: 'p-theme-3xl md:p-theme-6xl',
            small: 'p-theme-xl md:p-theme-3xl',
            none: 'p-0',
        },
    },
    defaultVariants: {
        variant: 'light',
        size: '6',
        height: 'auto',
        padding: 'medium',
    },
});

const gridVariants = cva('flex h-full items-center justify-between', {
    variants: {
        size: {
            '1': '',
            '2': '',
            '3': '',
            '4': '',
            '5': '',
            '6': '',
        },
        padding: {
            large: 'gap-theme-4xl md:gap-theme-8xl',
            medium: 'gap-theme-3xl md:gap-theme-6xl',
            small: 'gap-theme-xl md:gap-theme-3xl',
            none: 'gap-0',
        },
        switchOrder: {
            true: '',
            false: '',
        },
    },
    compoundVariants: [
        {
            size: ['1', '2', '3', '4'],
            switchOrder: false,
            class: 'flex-col',
        },
        {
            size: ['1', '2', '3', '4'],
            switchOrder: true,
            class: 'flex-col-reverse',
        },
        {
            size: ['5', '6'],
            switchOrder: false,
            class: 'flex-col sm:flex-row',
        },
        {
            size: ['5', '6'],
            switchOrder: true,
            class: 'flex-col-reverse sm:flex-row-reverse',
        },
    ],
    defaultVariants: {
        size: '6',
        padding: 'medium',
        switchOrder: false,
    },
});

const textVariants = cva('w-full flex-[0_0_auto]', {
    variants: {
        textAlign: {
            center: 'self-center',
            top: 'self-start',
            bottom: 'self-end',
        },
        size: {
            '1': '',
            '2': '',
            '3': '',
            '4': '',
            '5': 'sm:w-xs xl:w-sm',
            '6': 'sm:w-xs xl:w-sm',
        },
    },
    compoundVariants: [
        {
            size: ['1', '2', '3', '4'],
            textAlign: 'center',
            class: 'text-center',
        },
        {
            size: ['5', '6'],
            textAlign: 'center',
            class: 'max-sm:text-center',
        },
    ],
    defaultVariants: {
        textAlign: 'center',
        size: '6',
    },
});

const imageVariants = cva('h-full flex shrink width-auto min-h-0', {
    variants: {
        imagePaddingTop: {
            default: '',
            none: '!pt-0',
        },
        imagePaddingRight: {
            default: '',
            none: '!pr-0',
        },
        imagePaddingBottom: {
            default: '',
            none: '!pb-0',
        },
        imagePaddingLeft: {
            default: '',
            none: '!pl-0',
        },
        imageAlign: {
            center: 'self-center items-center',
            right: 'self-end items-end',
            left: 'self-start items-start',
        },
        padding: {
            large: '',
            medium: '',
            small: '',
            none: '',
        },
        size: {
            '1': '',
            '2': '',
            '3': '',
            '4': '',
            '5': 'sm:!ml-0',
            '6': 'sm:!ml-0',
        },
    },
    compoundVariants: [
        {
            size: ['5', '6'],
            padding: 'large',
            imagePaddingTop: 'none',
            class: 'sm:-mt-theme-4xl md:-mt-theme-8xl',
        },
        {
            size: ['5', '6'],
            padding: 'medium',
            imagePaddingTop: 'none',
            class: 'sm:-mt-theme-3xl md:-mt-theme-6xl',
        },
        {
            size: ['5', '6'],
            padding: 'small',
            imagePaddingTop: 'none',
            class: 'sm:-mt-theme-xl md:-mt-theme-3xl',
        },
        {
            padding: 'large',
            imagePaddingRight: 'none',
            class: '-mr-theme-4xl md:-mr-theme-8xl',
        },
        {
            padding: 'medium',
            imagePaddingRight: 'none',
            class: '-mr-theme-3xl md:-mr-theme-6xl',
        },
        {
            padding: 'small',
            imagePaddingRight: 'none',
            class: '-mr-theme-xl md:-mr-theme-3xl',
        },
        {
            padding: 'large',
            imagePaddingBottom: 'none',
            class: '-mb-theme-4xl md:-mb-theme-8xl',
        },
        {
            padding: 'medium',
            imagePaddingBottom: 'none',
            class: '-mb-theme-3xl md:-mb-theme-6xl',
        },
        {
            padding: 'small',
            imagePaddingBottom: 'none',
            class: '-mb-theme-xl md:-mb-theme-3xl',
        },
        {
            padding: 'large',
            imagePaddingLeft: 'none',
            class: '-ml-theme-4xl md:-ml-theme-8xl',
        },
        {
            padding: 'medium',
            imagePaddingLeft: 'none',
            class: '-ml-theme-3xl md:-ml-theme-6xl',
        },
        {
            padding: 'small',
            imagePaddingLeft: 'none',
            class: '-ml-theme-xl md:-ml-theme-3xl',
        },
    ],
    defaultVariants: {
        imagePaddingTop: 'default',
        imagePaddingRight: 'default',
        imagePaddingBottom: 'default',
        imagePaddingLeft: 'default',
        imageAlign: 'center',
        padding: 'medium',
        size: '6',
    },
});

export type BentoCard1Props = {
    media: AcfMedia;
    textblock: AcfTextBlock;
    variant: VariantProps<typeof cardVariants>['variant'];
    textAlign: VariantProps<typeof textVariants>['textAlign'];
    size: VariantProps<typeof cardVariants>['size'];
    height: VariantProps<typeof cardVariants>['height'];
    padding: VariantProps<typeof cardVariants>['padding'];
    imagePadding: {
        top: VariantProps<typeof imageVariants>['imagePaddingTop'];
        right: VariantProps<typeof imageVariants>['imagePaddingRight'];
        bottom: VariantProps<typeof imageVariants>['imagePaddingBottom'];
        left: VariantProps<typeof imageVariants>['imagePaddingLeft'];
    };
    imageAlign: VariantProps<typeof imageVariants>['imageAlign'];
    switchOrder: VariantProps<typeof gridVariants>['switchOrder'];
};

export default function Bento_Card_1({
    media,
    textblock,
    variant,
    size,
    textAlign,
    height,
    padding,
    imagePadding,
    imageAlign,
    switchOrder,
}: BentoCard1Props) {
    return (
        <div className={cn(cardVariants({ variant, size, height, padding }))}>
            <div className={cn(gridVariants({ size, padding, switchOrder }))}>
                <div className={cn(textVariants({ textAlign, size }))}>
                    <TextBlock
                        variant={variant}
                        textblock={textblock}
                    />
                </div>
                <div
                    className={cn(
                        imageVariants({
                            imagePaddingTop: imagePadding.top,
                            imagePaddingRight: imagePadding.right,
                            imagePaddingBottom: imagePadding.bottom,
                            imagePaddingLeft: imagePadding.left,
                            imageAlign,
                            padding,
                            size,
                        }),
                    )}>
                    <Media
                        media={media}
                        className="max-h-full w-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
