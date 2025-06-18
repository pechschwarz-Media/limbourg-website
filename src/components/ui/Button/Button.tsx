import ArrowRight from '@/components/icons/ArrowRight';
import { AcfLink } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

export const buttonVariants = cva(
    'group cursor-pointer text-regular w-full md:w-auto inline-flex justify-center items-center gap-x-theme-lg disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2',
    {
        variants: {
            variant: {
                primary:
                    'bg-brand-black text-text-alternate border border-brand-black h-10 md:h-12 rounded-none px-theme-2xl rounded-md md:rounded-xl transition-all flex lg:inline-flex hover:bg-background-primary hover:text-text-primary',
                secondary:
                    'bg-background-primary text-text-primary border border-brand-black h-10 md:h-12 rounded-none px-theme-2xl rounded-md md:rounded-xl transition-all flex lg:inline-flex hover:bg-brand-black hover:text-text-alternate',
                text: 'items-center',
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
            secondary: 'hidden',
            text: 'text-brand-primary',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

type AsButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' };
type AsLinkProps = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'link'; link: AcfLink | undefined },
    'href'
>;

type ButtonOrLinkProps = AsButtonProps | AsLinkProps;

export type ButtonBaseProps = VariantProps<typeof buttonVariants> & ButtonOrLinkProps;

export function Button({ className, ...props }: ButtonBaseProps) {
    if (props.as === 'link') {
        const { as, link, variant, ...rest } = props;
        const target = link?.target ? link.target : '_self';

        return (
            <Link
                href={link?.url || '#'}
                target={target}
                className={cn(buttonVariants({ variant, className }))}
                {...rest}
                role="link">
                {props.children}
                <ArrowRight
                    className={cn(
                        'size-6 group-hover:translate-x-1 transition-all items-center duration-100',
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
