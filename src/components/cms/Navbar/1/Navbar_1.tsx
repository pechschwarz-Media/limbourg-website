'use client';

import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion, useAnimate } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileMenu_1 from '../../MobileMenu/1/MobileMenu_1';
import Submenu_1 from '../../Submenu/1/Submenu_1';
import { AcfLink, AcfMedia, NavbarProps, Options } from '@/lib/types';
import Image from 'next/image';
import { IconChevronDown } from '@/components/icons/IconChevronDown';
import Calender from '@/components/icons/Calender';

const headerVariants = cva('fixed z-40 top-0 left-0 w-full text-black h-[72px]', {
    variants: {
        variant: {
            glass: 'bg-neutral-900/15 text-black',
            light: 'bg-background-primary text-black',
            dark: 'bg-brand-primary-950 text-black',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

const linkVariants = cva(
    'flex items-center gap-md h-10 p-theme-md rounded-xs transition-all text-regular font-medium',
    {
        variants: {
            variant: {
                glass: 'hover:bg-neutral-500/30',
                light: '',
                dark: 'hover:bg-neutral-300 hover:text-text-primary',
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
                class: '',
            },
            {
                variant: 'dark',
                active: true,
                class: 'bg-neutral-300 text-text-primary',
            },
        ],
    },
);

const burgerVariants = cva('flex-[0_0_auto] size-10 md:size-12 rounded-md border relative cursor-pointer', {
    variants: {
        variant: {
            glass: 'backdrop-blur bg-neutral-900/15 border-border-tertiary/15',
            light: 'bg-white border-border-secondary',
            dark: 'bg-brand-primary-900 border-brand-primary-800',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

const burgerLineVariants = cva('bg-black h-full w-full block absolute left-0', {
    variants: {
        variant: {
            glass: 'bg-white',
            light: 'bg-black',
            dark: 'bg-white',
        },
    },
    defaultVariants: {
        variant: 'glass',
    },
});

type Navbar1Props = {
    variant: VariantProps<typeof headerVariants>['variant'];
    navbar: NavbarProps[];
    options: Options;
    navbutton: AcfLink | undefined;
    navbox: {
        media: AcfMedia;
        title: string;
        link: AcfLink;
    };
};

export default function Navbar_1({ variant, navbar, navbutton, options, navbox }: Navbar1Props) {
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
                {variant === 'light' && <div className="absolute -z-10 inset-0 backdrop-blur"></div>}
                <div className="container h-full">
                    <div className="h-full flex gap-x-2 lg:gap-x-xl items-center justify-between">
                        <Link href="/">
                            {variant === 'dark' && (
                                <Image
                                    src={options?.logos?.logolight?.url}
                                    alt="Logo von Gessner & Jacobi"
                                    width={options?.logos?.logolight?.width}
                                    height={options?.logos?.logolight?.height}
                                    quality={100}
                                    className="h-6xl w-auto"
                                />
                            )}
                            {variant === 'light' && (
                                <Image
                                    src={options?.logos.logodark?.url}
                                    alt="Logo von Gessner & Jacobi"
                                    width={options?.logos.logodark?.width}
                                    height={options?.logos.logodark?.height}
                                    quality={100}
                                    className="h-6xl w-auto"
                                />
                            )}
                        </Link>
                        <div className="hidden lg:block">
                            <nav
                                role="navigation"
                                aria-label="Hauptnavigation">
                                <ul className="flex items-center gap-x-theme-md">
                                    {navbar?.map((item, index) => (
                                        <li key={index}>
                                            {item?.type === 'submenu' ? (
                                                <>
                                                    <Link
                                                        href="#"
                                                        className={cn(
                                                            linkVariants({
                                                                variant,
                                                                active: submenuIndex === index,
                                                            }),
                                                        )}
                                                        aria-haspopup="true"
                                                        aria-expanded={submenuIndex === 0 ? 'true' : 'false'}
                                                        role="menuitem"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSubmenuIndex(submenuIndex === index ? null : index);
                                                        }}>
                                                        {item?.label}
                                                        <IconChevronDown
                                                            className={cn(
                                                                'size-[20px] transition-transform',
                                                                submenuIndex === index && 'rotate-180',
                                                            )}
                                                        />
                                                    </Link>
                                                    <Submenu_1
                                                        visible={submenuIndex === index}
                                                        variant={variant}
                                                        submenu={item?.submenus}
                                                        navbox={navbox}
                                                        close={() => setSubmenuIndex(null)}
                                                    />
                                                </>
                                            ) : (
                                                <Link
                                                    href={item?.link.url}
                                                    className={cn(
                                                        linkVariants({
                                                            variant,
                                                            active: submenuIndex === 0,
                                                        }),
                                                    )}
                                                    target={item?.link?.target}
                                                    aria-haspopup="false"
                                                    role="menuitem">
                                                    {item?.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="flex gap-theme-md items-center lg:hidden">
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
                        <div className="hidden lg:flex items-center gap-lg">
                            <Button
                                as="link"
                                variant="primary"
                                link={navbutton}>
                                <Calender className="group size-3xl text-inherit" />
                                {navbutton?.title}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu_1
                navbar={navbar}
                navbutton={navbutton}
                visible={openMenu}
                variant="light"
                close={() => setOpenMenu(false)}
            />
            {submenuIndex !== null && variant !== 'dark' && (
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
