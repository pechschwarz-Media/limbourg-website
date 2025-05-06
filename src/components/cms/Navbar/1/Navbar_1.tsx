'use client';

import { IconChevronDown } from '@/components/icons/IconChevronDown';
import { Logo } from '@/components/static/Logo/Logo';
import { LogoInverted } from '@/components/static/LogoInverted/LogoInverted';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion, useAnimate } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu_1 from '../../MobileMenu/1/MobileMenu_1';
import Submenu_1 from '../../Submenu/1/Submenu_1';

const headerVariants = cva('navbar fixed z-40 top-0 left-0 w-full text-text-alternate h-[72px]', {
    variants: {
        variant: {
            glass: 'bg-neutral-900/15 text-text-alternate',
            light: 'bg-neutral-25 text-text-primary',
            dark: 'bg-brand-primary-950 text-text-alternate',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

const linkVariants = cva('flex items-center gap-theme-md h-10 px-theme-lg rounded-xs transition-all font-highlight', {
    variants: {
        variant: {
            glass: 'hover:bg-neutral-500/30',
            light: 'hover:bg-brand-secondary-300',
            dark: 'hover:bg-brand-secondary-300 hover:text-text-primary',
        },
        active: {
            true: 'bg-neutral-500/30',
            false: '',
        },
    },
    defaultVariants: {
        variant: 'glass',
        active: false,
    },
    compoundVariants: [
        {
            variant: 'glass',
            active: true,
            class: 'bg-neutral-500/30',
        },
        {
            variant: 'light',
            active: true,
            class: 'bg-brand-secondary-300',
        },
        {
            variant: 'dark',
            active: true,
            class: 'bg-brand-secondary-300 text-text-primary',
        },
    ],
});

const burgerVariants = cva('flex-[0_0_auto] size-10 md:size-12 rounded-md border relative cursor-pointer', {
    variants: {
        variant: {
            glass: 'backdrop-blur bg-neutral-900/15 border-border-tertiary/15',
            light: 'bg-neutral-25 border-border-secondary',
            dark: 'bg-brand-primary-900 border-brand-primary-800',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

const burgerLineVariants = cva('bg-base-black h-full w-full block absolute left-0', {
    variants: {
        variant: {
            glass: 'bg-base-white',
            light: 'bg-base-black',
            dark: 'bg-base-white',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

type Navbar1Props = VariantProps<typeof headerVariants>;

export default function Navbar_1({ variant = 'light' }: Navbar1Props) {
    const [submenuIndex, setSubmenuIndex] = useState<number | null>(null);
    const [openMenu, setOpenMenu] = useState(false);

    const [menuButton, animate] = useAnimate();

    useEffect(() => {
        if (openMenu) {
            animate([
                ['.top-line', { top: 0 }],
                ['.bottom-line', { bottom: 0 }, { at: '<' }],
                ['.middle-line', { opacity: 0 }],
                ['.top-line', { rotate: '45deg' }],
                ['.bottom-line', { rotate: '-45deg' }, { at: '<' }],
            ]);
        } else {
            animate([
                ['.bottom-line', { rotate: '0deg' }],
                ['.top-line', { rotate: '0deg' }, { at: '<' }],
                ['.middle-line', { opacity: 1 }],
                ['.bottom-line', { bottom: '-8px' }],
                ['.top-line', { top: '-8px' }, { at: '<' }],
            ]);
        }
    }, [openMenu]);

    useEffect(() => {
        function closeFilter(event: MouseEvent) {
            if (
                submenuIndex !== null &&
                !event.composedPath().some((el) => (el as HTMLElement).classList?.contains('navbar'))
            ) {
                setSubmenuIndex(null);
            }
        }

        document.addEventListener('click', closeFilter);

        return () => {
            document.removeEventListener('click', closeFilter);
        };
    }, [submenuIndex]);

    return (
        <>
            <header className={cn(headerVariants({ variant }))}>
                {variant === 'glass' && <div className="absolute -z-10 inset-0 backdrop-blur"></div>}
                <div className="container h-full">
                    <div className="h-full flex gap-x-theme-xl items-center justify-between">
                        <Link href="/">
                            {variant === 'light' ? (
                                <LogoInverted className="h-12 w-auto" />
                            ) : (
                                <Logo className="h-12 w-auto" />
                            )}
                        </Link>
                        <div className="hidden lg:block">
                            <nav
                                role="navigation"
                                aria-label="Hauptnavigation">
                                <ul className="flex items-center gap-x-theme-md">
                                    <li>
                                        <Link
                                            href="#"
                                            className={cn(linkVariants({ variant, active: submenuIndex === 0 }))}
                                            aria-haspopup="true"
                                            aria-expanded={submenuIndex === 0 ? 'true' : 'false'}
                                            role="menuitem"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSubmenuIndex(submenuIndex === 0 ? null : 0);
                                            }}>
                                            Products
                                            <IconChevronDown
                                                className={cn(
                                                    'size-4 transition-transform',
                                                    submenuIndex === 0 && 'rotate-180',
                                                )}
                                            />
                                        </Link>
                                        <Submenu_1
                                            visible={submenuIndex === 0}
                                            close={() => setSubmenuIndex(null)}
                                            variant={variant}
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className={cn(linkVariants({ variant, active: submenuIndex === 1 }))}
                                            aria-haspopup="true"
                                            aria-expanded={submenuIndex === 1 ? 'true' : 'false'}
                                            role="menuitem"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSubmenuIndex(submenuIndex === 1 ? null : 1);
                                            }}>
                                            Solutions
                                            <IconChevronDown
                                                className={cn(
                                                    'size-4 transition-transform',
                                                    submenuIndex === 1 && 'rotate-180',
                                                )}
                                            />
                                        </Link>
                                        <Submenu_1
                                            visible={submenuIndex === 1}
                                            close={() => setSubmenuIndex(null)}
                                            variant={variant}
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className={cn(linkVariants({ variant, active: submenuIndex === 2 }))}
                                            aria-haspopup="false"
                                            role="menuitem"
                                            onClick={() => {
                                                setSubmenuIndex(null);
                                            }}>
                                            Customers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className={cn(linkVariants({ variant, active: submenuIndex === 3 }))}
                                            aria-haspopup="true"
                                            aria-expanded={submenuIndex === 3 ? 'true' : 'false'}
                                            role="menuitem"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSubmenuIndex(submenuIndex === 3 ? null : 3);
                                            }}>
                                            Ressources
                                            <IconChevronDown
                                                className={cn(
                                                    'size-4 transition-transform',
                                                    submenuIndex === 3 && 'rotate-180',
                                                )}
                                            />
                                        </Link>
                                        <Submenu_1
                                            visible={submenuIndex === 3}
                                            close={() => setSubmenuIndex(null)}
                                            variant={variant}
                                        />
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className={cn(linkVariants({ variant, active: submenuIndex === 4 }))}
                                            aria-haspopup="true"
                                            aria-expanded={submenuIndex === 4 ? 'true' : 'false'}
                                            role="menuitem"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSubmenuIndex(submenuIndex === 4 ? null : 4);
                                            }}>
                                            Pricing
                                            <IconChevronDown
                                                className={cn(
                                                    'size-4 transition-transform',
                                                    submenuIndex === 4 && 'rotate-180',
                                                )}
                                            />
                                        </Link>
                                        <Submenu_1
                                            visible={submenuIndex === 4}
                                            close={() => setSubmenuIndex(null)}
                                            variant={variant}
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex gap-theme-md items-center lg:hidden">
                            <Button
                                as="link"
                                variant={variant}
                                link={{ url: '#', title: 'Sign in', target: '_self' }}>
                                Sing in
                            </Button>
                            <button
                                className={cn(burgerVariants({ variant }))}
                                ref={menuButton}
                                aria-label="Menü öffnen"
                                aria-expanded={openMenu}
                                onClick={() => {
                                    setOpenMenu(!openMenu);
                                }}>
                                <div className="h-[2px] w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className={cn(burgerLineVariants({ variant }), 'top-0 middle-line')}></span>
                                    <span className={cn(burgerLineVariants({ variant }), ' -top-2 top-line')}></span>
                                    <span
                                        className={cn(
                                            burgerLineVariants({ variant }),
                                            ' -bottom-2 bottom-line',
                                        )}></span>
                                </div>
                            </button>
                        </div>
                        <div className="hidden lg:flex items-center gap-theme-lg">
                            <Button
                                as="link"
                                variant={variant}
                                onClick={() => {
                                    setSubmenuIndex(null);
                                }}
                                link={{ url: '#', title: 'Sign in', target: '_self' }}>
                                Sing in
                            </Button>
                            <Button
                                as="link"
                                variant="primary"
                                onClick={() => {
                                    setSubmenuIndex(null);
                                }}
                                link={{ url: '#', title: 'See a Demo', target: '_self' }}>
                                See a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu_1
                visible={openMenu}
                close={() => setOpenMenu(false)}
                variant={variant}
            />
            {submenuIndex !== null && variant !== 'glass' && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed top-0 left-0 size-full bg-brand-black/50 z-30"></motion.div>
                </AnimatePresence>
            )}
        </>
    );
}
