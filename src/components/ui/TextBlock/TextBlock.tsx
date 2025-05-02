import { ButtonGroup } from '@/components/static/ButtonGroup/ButtonGroup';
import { AcfTextBlock, Variant } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { Headline } from '../Headline/Headline';
import { Wysiwyg } from '../Wysiwyg/Wysiwyg';

export const textVariants = cva('', {
    variants: {
        variant: {
            dark: 'text-text-tertiary',
            light: 'text-text-secondary',
            darkPrimary: 'text-text-tertiary',
            lightPrimary: 'text-text-secondary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

type TextBlockProps = {
    variant: Variant;
    center?: boolean;
    textblock: AcfTextBlock;
};

export function TextBlock({ variant, textblock, center }: TextBlockProps) {
    return (
        <div className="space-y-theme-3xl">
            {textblock?.headline && <Headline headline={textblock?.headline} />}
            {textblock?.text && (
                <Wysiwyg
                    text={textblock?.text}
                    className={cn(textVariants({ variant }))}></Wysiwyg>
            )}
            {textblock?.buttons && textblock?.buttons?.length > 0 && (
                <ButtonGroup
                    buttons={textblock?.buttons}
                    className={center ? 'justify-center' : ''}
                />
            )}
        </div>
    );
}
