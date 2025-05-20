import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const ratingsVariants = cva(
    'h-8 border inline-flex items-center rounded-full pl-theme-xs pr-theme-lg font-highlight text-small',
    {
        variants: {
            variant: {
                dark: 'border-neutral-800 bg-neutral-900 text-text-alternate',
                light: 'border-neutral-200 bg-neutral-25 text-text-primary',
                darkPrimary: 'border-brand-primary-800 bg-brand-primary-900 text-text-alternate',
                lightPrimary: 'border-neutral-200 bg-neutral-25 text-text-primary',
            },
        },
        defaultVariants: {
            variant: 'light',
        },
    },
);

type Rating1Props = {
    variant: VariantProps<typeof ratingsVariants>['variant'];
    className?: string;
};

export function Rating_1({ className, variant }: Rating1Props) {
    return (
        <div className={cn(ratingsVariants({ variant }), className)}>
            <div className="size-6 rounded-full bg-brand-secondary-200 flex items-center justify-center mr-theme-sm">
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 5.86016C12 8.62683 10.5267 12.0002 6.08667 12.0002C2.74974 12.0223 0.02568 9.33703 0 6.00016C0.02568 2.66324 2.74974 -0.022037 6.08667 0.000136337C7.46713 0.00525634 8.80567 0.474916 9.88667 1.33347C9.96133 1.39449 10.0073 1.48388 10.0133 1.58014C10.0137 1.67753 9.97533 1.77108 9.90667 1.84014C9.47267 2.23694 9.0588 2.65524 8.66667 3.09347C8.5526 3.219 8.36147 3.23638 8.22667 3.13347C7.61073 2.67766 6.8592 2.44279 6.09333 2.4668C4.12352 2.4668 2.52667 4.06366 2.52667 6.0335C2.52667 8.0033 4.12352 9.60016 6.09333 9.60016C8.09333 9.60016 8.94 8.74683 9.38 7.2335H6.33333C6.14927 7.2335 6 7.08423 6 6.90016V5.1335C6 4.94936 6.14927 4.80016 6.33333 4.80016H11.6667C11.8201 4.79916 11.9496 4.91423 11.9667 5.06683C11.9914 5.3305 12.0025 5.5953 12 5.86016Z"
                        fill="#052E14"
                    />
                </svg>
            </div>
            4,7 Sterne auf Google
        </div>
    );
}
