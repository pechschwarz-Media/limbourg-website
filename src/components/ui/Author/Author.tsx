import { AcfFile } from '@/lib/types';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';

const dateVariants = cva('text-small', {
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

type AuthorProps = {
    author: {
        image: AcfFile;
        name: string;
        date: string;
    };
    className?: string;
    variant: VariantProps<typeof dateVariants>['variant'];
};

export function Author({ author, variant, className }: AuthorProps) {
    return (
        <div className={cn('flex items-center gap-x-theme-lg', className)}>
            <Image
                src={author?.image?.url}
                alt={author?.image?.alt}
                width={author?.image?.width}
                height={author?.image?.height}
                className="rounded-full size-11"
            />
            <div>
                <div>{author?.name}</div>
                <div className={cn(dateVariants({ variant }))}>{author?.date}</div>
            </div>
        </div>
    );
}
