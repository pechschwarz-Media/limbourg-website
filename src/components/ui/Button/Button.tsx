import ArrowRight from '@/components/icons/ArrowRight';
import { AcfLink } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

export const buttonVariants = cva(
    'group cursor-pointer font-base w-full md:w-auto inline-flex justify-center items-center gap-x-theme-lg disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2',
    {
        variants: {
            variant: {
                glass: 'bg-neutral-900/15 text-text-alternate border border-border-tertiary/15 h-10 md:h-12 rounded-none px-theme-2xl rounded-md md:rounded-xl backdrop-blur transition-all flex lg:inline-flex',
                light: 'bg-brand-gray text-text-primary border border-brand-gray h-10 md:h-12 rounded-none px-theme-2xl rounded-md md:rounded-xl transition-all flex lg:inline-flex',
                dark: 'bg-brand-black text-text-alternate border border-brand-black h-10 md:h-12 rounded-none px-theme-2xl rounded-md md:rounded-xl transition-all flex lg:inline-flex',
                primary:
                    'bg-brand-secondary-300 border border-brand-secondary-300 text-text-primary h-10 md:h-12 rounded-none px-theme-2xl rounded-md md:rounded-xl flex lg:inline-flex',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
);

const arrowVariants = cva('', {
    variants: {
        variant: {
            primary: 'hidden',
            light: 'hidden',
            dark: 'hidden',
            glass: 'hidden',
            text: 'text-brand-primary',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

type AsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' };
type AsLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'link'; link: AcfLink }, 'href'>;

type ButtonOrLinkProps = AsButtonProps | AsLinkProps;

export type ButtonBaseProps = VariantProps<typeof buttonVariants> & ButtonOrLinkProps;

export function Button({ className, ...props }: ButtonBaseProps) {
    if (props.as === 'link') {
        const { as, link, variant, ...rest } = props;
        const target = link.target ? link.target : '_self';

        return (
            <Link
                href={link.url || '#'}
                target={target}
                className={cn(buttonVariants({ variant, className }))}
                {...rest}
                role="link">
                {props.children}
                <ArrowRight
                    className={cn(
                        'size-6 mr-1 group-hover:translate-x-1 transition-all duration-100',
                        arrowVariants({ variant }),
                    )}
                />
            </Link>
        );
    }

    if (props.as === 'button') {
        const { variant, ...rest } = props;

        return (
            <button
                className={cn(buttonVariants({ variant, className }))}
                {...rest}
                role="button">
                {props.children}
            </button>
        );
    }

    return null;
}
