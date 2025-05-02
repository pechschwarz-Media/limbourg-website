'use client';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const submenuVariants = cva(
    'lg:text-inherit overflow-hidden lg:absolute pb-theme-4xl lg:left-1/2 top:top-full lg:-translate-x-1/2 lg:rounded-xl lg:p-theme-4xl lg:mt-theme-xl lg:max-w-4xl z-40',
    {
        variants: {
            variant: {
                glass: 'lg:backdrop-blur lg:bg-neutral-900/15',
                light: 'lg:bg-neutral-25',
                dark: 'lg:bg-brand-primary-950',
            },
        },
        defaultVariants: {
            variant: 'glass',
        },
    },
);

const titleVariants = cva('text-text-secondary font-highlight mb-theme-xl', {
    variants: {
        variant: {
            glass: 'lg:text-text-tertiary',
            light: 'lg:text-text-secondary',
            dark: 'lg:text-text-tertiary',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

const linkVariants = cva(
    'flex items-center gap-x-theme-xl lg:p-theme-lg rounded-xl group transition-all font-highlight',
    {
        variants: {
            variant: {
                glass: 'lg:hover:bg-neutral-500/30',
                light: 'lg:hover:bg-brand-primary-100',
                dark: 'lg:hover:bg-brand-primary-800',
            },
        },
        defaultVariants: {
            variant: 'glass',
        },
    },
);

const descriptionVariants = cva('text-tiny mt-[2px]', {
    variants: {
        variant: {
            glass: 'lg:text-text-tertiary',
            light: 'lg:text-text-secondary',
            dark: 'lg:text-text-tertiary',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

const iconVariants = cva(
    'bg-neutral-100 lg:group-hover:bg-brand-secondary-300 text-text-primary size-12 rounded-md flex items-center justify-center transition-all',
    {
        variants: {
            variant: {
                glass: 'lg:bg-neutral-25',
                light: 'lg:bg-brand-primary-200',
                dark: 'lg:bg-brand-primary-200',
            },
        },
        defaultVariants: {
            variant: 'glass',
        },
    },
);

const tileVariants = cva('block rounded-xl lg:-mx-theme-lg lg:p-theme-lg transition-all relative', {
    variants: {
        variant: {
            glass: 'lg:hover:bg-neutral-25/15',
            light: 'lg:hover:bg-brand-primary-100',
            dark: 'lg:hover:bg-brand-primary-800',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

const tileTitleVariants = cva('hidden lg:block font-highlight mb-theme-xl', {
    variants: {
        variant: {
            glass: 'lg:text-text-tertiary',
            light: 'lg:text-text-secondary',
            dark: 'lg:text-text-tertiary',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

const tileDescriptionVariants = cva('text-small', {
    variants: {
        variant: {
            glass: 'lg:text-text-tertiary',
            light: 'lg:text-text-secondary',
            dark: 'lg:text-text-tertiary',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

type Submenu1Props = {
    variant: VariantProps<typeof submenuVariants>['variant'];
    visible: boolean;
    close: () => void;
    preview?: boolean;
};

export default function Submenu_1({ visible, close, preview, variant = 'glass' }: Submenu1Props) {
    const isMobile = useMediaQuery({
        query: '(max-width: 64rem)',
    });

    return (
        <AnimatePresence>
            {visible && (
                <>
                    <motion.div
                        initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 50 }}
                        animate={isMobile ? { height: 'auto', opacity: 1 } : { opacity: 1, y: 0 }}
                        exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 50 }}
                        aria-hidden="false"
                        className={cn(submenuVariants({ variant }), !preview && 'lg:top-full')}>
                        <div className="lg:flex">
                            <div className="flex flex-col md:flex-row lg:flex-col justify-between lg:w-lg gap-x-theme-xl gap-y-theme-4xl">
                                <nav
                                    role="navigation"
                                    aria-label="Unternavigation"
                                    className="flex-1">
                                    <div className={cn(titleVariants({ variant }))}>Products</div>
                                    <ul className="grid lg:grid-cols-2 gap-theme-xl lg:gap-theme-sm lg:-mx-theme-lg">
                                        <li>
                                            <Link
                                                href="#"
                                                className={cn(linkVariants({ variant }))}
                                                onClick={close}
                                                role="menuitem">
                                                <div className={cn(iconVariants({ variant }))}>
                                                    <svg
                                                        width="19"
                                                        height="16"
                                                        viewBox="0 0 19 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.3523 7.99608C18.3443 7.07708 17.0955 6.40942 15.5952 6.40942H12.4298C11.99 6.40942 11.825 6.33873 11.5658 6.04025L6.28743 0.282769C6.12248 0.0942562 5.91826 0 5.68262 0H4.77147C4.56726 0 4.44944 0.180658 4.55155 0.400589L7.26927 6.40942L3.27909 6.865L1.85739 4.25724C1.75527 4.06087 1.58247 3.97447 1.32327 3.97447H0.985517C0.781296 3.97447 0.647766 4.108 0.647766 4.31222V11.6799C0.647766 11.8842 0.781296 12.0098 0.985517 12.0098H1.32327C1.58247 12.0098 1.75527 11.9234 1.85739 11.7349L3.27909 9.12715L7.26927 9.58273L4.55155 15.5915C4.44944 15.8036 4.56726 15.9922 4.77147 15.9922H5.68262C5.91826 15.9922 6.12248 15.89 6.28743 15.7094L11.5658 9.94401C11.825 9.65338 11.99 9.58273 12.4298 9.58273H15.5952C17.0955 9.58273 18.3443 8.90724 18.3523 7.99608Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div>Corporate Cards</div>
                                                    <div className={cn(descriptionVariants({ variant }))}>
                                                        Control spendings.
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className={cn(linkVariants({ variant }))}
                                                onClick={close}
                                                role="menuitem">
                                                <div className={cn(iconVariants({ variant }))}>
                                                    <svg
                                                        width="19"
                                                        height="16"
                                                        viewBox="0 0 19 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.3523 7.99608C18.3443 7.07708 17.0955 6.40942 15.5952 6.40942H12.4298C11.99 6.40942 11.825 6.33873 11.5658 6.04025L6.28743 0.282769C6.12248 0.0942562 5.91826 0 5.68262 0H4.77147C4.56726 0 4.44944 0.180658 4.55155 0.400589L7.26927 6.40942L3.27909 6.865L1.85739 4.25724C1.75527 4.06087 1.58247 3.97447 1.32327 3.97447H0.985517C0.781296 3.97447 0.647766 4.108 0.647766 4.31222V11.6799C0.647766 11.8842 0.781296 12.0098 0.985517 12.0098H1.32327C1.58247 12.0098 1.75527 11.9234 1.85739 11.7349L3.27909 9.12715L7.26927 9.58273L4.55155 15.5915C4.44944 15.8036 4.56726 15.9922 4.77147 15.9922H5.68262C5.91826 15.9922 6.12248 15.89 6.28743 15.7094L11.5658 9.94401C11.825 9.65338 11.99 9.58273 12.4298 9.58273H15.5952C17.0955 9.58273 18.3443 8.90724 18.3523 7.99608Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div>Corporate Cards</div>
                                                    <div className={cn(descriptionVariants({ variant }))}>
                                                        Control spendings.
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className={cn(linkVariants({ variant }))}
                                                onClick={close}
                                                role="menuitem">
                                                <div className={cn(iconVariants({ variant }))}>
                                                    <svg
                                                        width="19"
                                                        height="16"
                                                        viewBox="0 0 19 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.3523 7.99608C18.3443 7.07708 17.0955 6.40942 15.5952 6.40942H12.4298C11.99 6.40942 11.825 6.33873 11.5658 6.04025L6.28743 0.282769C6.12248 0.0942562 5.91826 0 5.68262 0H4.77147C4.56726 0 4.44944 0.180658 4.55155 0.400589L7.26927 6.40942L3.27909 6.865L1.85739 4.25724C1.75527 4.06087 1.58247 3.97447 1.32327 3.97447H0.985517C0.781296 3.97447 0.647766 4.108 0.647766 4.31222V11.6799C0.647766 11.8842 0.781296 12.0098 0.985517 12.0098H1.32327C1.58247 12.0098 1.75527 11.9234 1.85739 11.7349L3.27909 9.12715L7.26927 9.58273L4.55155 15.5915C4.44944 15.8036 4.56726 15.9922 4.77147 15.9922H5.68262C5.91826 15.9922 6.12248 15.89 6.28743 15.7094L11.5658 9.94401C11.825 9.65338 11.99 9.58273 12.4298 9.58273H15.5952C17.0955 9.58273 18.3443 8.90724 18.3523 7.99608Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div>Corporate Cards</div>
                                                    <div className={cn(descriptionVariants({ variant }))}>
                                                        Control spendings.
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className={cn(linkVariants({ variant }))}
                                                onClick={close}
                                                role="menuitem">
                                                <div className={cn(iconVariants({ variant }))}>
                                                    <svg
                                                        width="19"
                                                        height="16"
                                                        viewBox="0 0 19 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.3523 7.99608C18.3443 7.07708 17.0955 6.40942 15.5952 6.40942H12.4298C11.99 6.40942 11.825 6.33873 11.5658 6.04025L6.28743 0.282769C6.12248 0.0942562 5.91826 0 5.68262 0H4.77147C4.56726 0 4.44944 0.180658 4.55155 0.400589L7.26927 6.40942L3.27909 6.865L1.85739 4.25724C1.75527 4.06087 1.58247 3.97447 1.32327 3.97447H0.985517C0.781296 3.97447 0.647766 4.108 0.647766 4.31222V11.6799C0.647766 11.8842 0.781296 12.0098 0.985517 12.0098H1.32327C1.58247 12.0098 1.75527 11.9234 1.85739 11.7349L3.27909 9.12715L7.26927 9.58273L4.55155 15.5915C4.44944 15.8036 4.56726 15.9922 4.77147 15.9922H5.68262C5.91826 15.9922 6.12248 15.89 6.28743 15.7094L11.5658 9.94401C11.825 9.65338 11.99 9.58273 12.4298 9.58273H15.5952C17.0955 9.58273 18.3443 8.90724 18.3523 7.99608Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div>Corporate Cards</div>
                                                    <div className={cn(descriptionVariants({ variant }))}>
                                                        Control spendings.
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                <nav
                                    role="navigation"
                                    aria-label="Unternavigation"
                                    className="flex-1">
                                    <div className={cn(titleVariants({ variant }))}>Products</div>
                                    <ul className="grid lg:grid-cols-2 gap-theme-xl lg:gap-theme-sm lg:-mx-theme-lg">
                                        <li>
                                            <Link
                                                href="#"
                                                className={cn(linkVariants({ variant }))}
                                                onClick={close}
                                                role="menuitem">
                                                <div className={cn(iconVariants({ variant }))}>
                                                    <svg
                                                        width="19"
                                                        height="16"
                                                        viewBox="0 0 19 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.3523 7.99608C18.3443 7.07708 17.0955 6.40942 15.5952 6.40942H12.4298C11.99 6.40942 11.825 6.33873 11.5658 6.04025L6.28743 0.282769C6.12248 0.0942562 5.91826 0 5.68262 0H4.77147C4.56726 0 4.44944 0.180658 4.55155 0.400589L7.26927 6.40942L3.27909 6.865L1.85739 4.25724C1.75527 4.06087 1.58247 3.97447 1.32327 3.97447H0.985517C0.781296 3.97447 0.647766 4.108 0.647766 4.31222V11.6799C0.647766 11.8842 0.781296 12.0098 0.985517 12.0098H1.32327C1.58247 12.0098 1.75527 11.9234 1.85739 11.7349L3.27909 9.12715L7.26927 9.58273L4.55155 15.5915C4.44944 15.8036 4.56726 15.9922 4.77147 15.9922H5.68262C5.91826 15.9922 6.12248 15.89 6.28743 15.7094L11.5658 9.94401C11.825 9.65338 11.99 9.58273 12.4298 9.58273H15.5952C17.0955 9.58273 18.3443 8.90724 18.3523 7.99608Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div>Corporate Cards</div>
                                                    <div className={cn(descriptionVariants({ variant }))}>
                                                        Control spendings.
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className={cn(linkVariants({ variant }))}
                                                onClick={close}
                                                role="menuitem">
                                                <div className={cn(iconVariants({ variant }))}>
                                                    <svg
                                                        width="19"
                                                        height="16"
                                                        viewBox="0 0 19 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.3523 7.99608C18.3443 7.07708 17.0955 6.40942 15.5952 6.40942H12.4298C11.99 6.40942 11.825 6.33873 11.5658 6.04025L6.28743 0.282769C6.12248 0.0942562 5.91826 0 5.68262 0H4.77147C4.56726 0 4.44944 0.180658 4.55155 0.400589L7.26927 6.40942L3.27909 6.865L1.85739 4.25724C1.75527 4.06087 1.58247 3.97447 1.32327 3.97447H0.985517C0.781296 3.97447 0.647766 4.108 0.647766 4.31222V11.6799C0.647766 11.8842 0.781296 12.0098 0.985517 12.0098H1.32327C1.58247 12.0098 1.75527 11.9234 1.85739 11.7349L3.27909 9.12715L7.26927 9.58273L4.55155 15.5915C4.44944 15.8036 4.56726 15.9922 4.77147 15.9922H5.68262C5.91826 15.9922 6.12248 15.89 6.28743 15.7094L11.5658 9.94401C11.825 9.65338 11.99 9.58273 12.4298 9.58273H15.5952C17.0955 9.58273 18.3443 8.90724 18.3523 7.99608Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div>Corporate Cards</div>
                                                    <div className={cn(descriptionVariants({ variant }))}>
                                                        Control spendings.
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className={cn(linkVariants({ variant }))}
                                                onClick={close}
                                                role="menuitem">
                                                <div className={cn(iconVariants({ variant }))}>
                                                    <svg
                                                        width="19"
                                                        height="16"
                                                        viewBox="0 0 19 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.3523 7.99608C18.3443 7.07708 17.0955 6.40942 15.5952 6.40942H12.4298C11.99 6.40942 11.825 6.33873 11.5658 6.04025L6.28743 0.282769C6.12248 0.0942562 5.91826 0 5.68262 0H4.77147C4.56726 0 4.44944 0.180658 4.55155 0.400589L7.26927 6.40942L3.27909 6.865L1.85739 4.25724C1.75527 4.06087 1.58247 3.97447 1.32327 3.97447H0.985517C0.781296 3.97447 0.647766 4.108 0.647766 4.31222V11.6799C0.647766 11.8842 0.781296 12.0098 0.985517 12.0098H1.32327C1.58247 12.0098 1.75527 11.9234 1.85739 11.7349L3.27909 9.12715L7.26927 9.58273L4.55155 15.5915C4.44944 15.8036 4.56726 15.9922 4.77147 15.9922H5.68262C5.91826 15.9922 6.12248 15.89 6.28743 15.7094L11.5658 9.94401C11.825 9.65338 11.99 9.58273 12.4298 9.58273H15.5952C17.0955 9.58273 18.3443 8.90724 18.3523 7.99608Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div>Corporate Cards</div>
                                                    <div className={cn(descriptionVariants({ variant }))}>
                                                        Control spendings.
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className={cn(linkVariants({ variant }))}
                                                onClick={close}
                                                role="menuitem">
                                                <div className={cn(iconVariants({ variant }))}>
                                                    <svg
                                                        width="19"
                                                        height="16"
                                                        viewBox="0 0 19 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.3523 7.99608C18.3443 7.07708 17.0955 6.40942 15.5952 6.40942H12.4298C11.99 6.40942 11.825 6.33873 11.5658 6.04025L6.28743 0.282769C6.12248 0.0942562 5.91826 0 5.68262 0H4.77147C4.56726 0 4.44944 0.180658 4.55155 0.400589L7.26927 6.40942L3.27909 6.865L1.85739 4.25724C1.75527 4.06087 1.58247 3.97447 1.32327 3.97447H0.985517C0.781296 3.97447 0.647766 4.108 0.647766 4.31222V11.6799C0.647766 11.8842 0.781296 12.0098 0.985517 12.0098H1.32327C1.58247 12.0098 1.75527 11.9234 1.85739 11.7349L3.27909 9.12715L7.26927 9.58273L4.55155 15.5915C4.44944 15.8036 4.56726 15.9922 4.77147 15.9922H5.68262C5.91826 15.9922 6.12248 15.89 6.28743 15.7094L11.5658 9.94401C11.825 9.65338 11.99 9.58273 12.4298 9.58273H15.5952C17.0955 9.58273 18.3443 8.90724 18.3523 7.99608Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div>Corporate Cards</div>
                                                    <div className={cn(descriptionVariants({ variant }))}>
                                                        Control spendings.
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="lg:border-l lg:border-l-border-alternate/30 mt-theme-4xl lg:mt-theme-0 lg:pl-theme-4xl lg:ml-theme-4xl lg:w-xs">
                                <div className={cn(tileTitleVariants({ variant }))}>Featured</div>
                                <Link
                                    href="#"
                                    className={cn(tileVariants({ variant }))}
                                    onClick={close}
                                    role="menuitem">
                                    <div className="bg-neutral-900/15 text-text-alternate text-small font-highlight p-theme-xl leading-none rounded-sm absolute top-theme-3xl left-theme-3xl backdrop-blur">
                                        Automation
                                    </div>
                                    <Image
                                        src="/placeholder.jpg"
                                        alt=""
                                        width="800"
                                        height="800"
                                        className="aspect-[16/9] lg:aspect-square object-cover rounded-md mb-theme-xl"
                                    />
                                    <div className="text-large font-highlight mb-theme-xs">
                                        Introducing simple Financing
                                    </div>
                                    <div className={cn(tileDescriptionVariants({ variant }))}>
                                        Managing inances was never so easy.
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
