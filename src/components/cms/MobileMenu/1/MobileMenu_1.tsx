import { IconChevronDown } from '@/components/icons/IconChevronDown';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Submenu_1 from '../../Submenu/1/Submenu_1';

type MobileMenu1Props = {
    variant: 'glass' | 'dark' | 'light' | null;
    close: () => void;
    visible: boolean;
};

export default function MobileMenu_1({ visible, close, variant = 'glass' }: MobileMenu1Props) {
    const [submenuIndex, setSubmenuIndex] = useState<number | null>(null);

    const [menu, animate] = useAnimate();

    useEffect(() => {
        if (visible) {
            animate([
                [menu.current, { y: ['-100%', '0%'] }, { ease: [0.645, 0.045, 0.355, 1] }],
                [
                    '.children',
                    { y: [40, 0], opacity: [0, 1] },
                    { ease: [0.645, 0.045, 0.355, 1], delay: stagger(0.1), at: '-0.15' },
                ],
            ]);
        } else {
            setSubmenuIndex(null);
            animate([
                ['.children', { y: [0, -40], opacity: [1, 0] }, { ease: [0.645, 0.045, 0.355, 1] }],
                [menu.current, { y: '-100%' }, { ease: [0.645, 0.045, 0.355, 1], delay: stagger(0.1), at: '-0.15' }],
            ]);
        }
    }, [visible]);

    return (
        <motion.div
            className="w-full h-screen bg-brand-white fixed top-0 left-0 pt-[72px] z-30 max-h-screen menu"
            style={{ y: '-100%' }}
            ref={menu}>
            <div className="container h-full">
                <div className="h-full overflow-auto hide-scrollbar flex flex-col justify-between gap-y-theme-3xl pb-theme-lg">
                    <nav
                        role="navigation"
                        aria-label="Hauptnavigation">
                        <ul className="divide-y divide-border-secondary">
                            <li className="children">
                                <Link
                                    href="#"
                                    className="text-h6 font-highlight leading-headline py-theme-xl flex items-center justify-between gap-theme-md"
                                    aria-haspopup="true"
                                    aria-expanded={submenuIndex === 0 ? 'true' : 'false'}
                                    role="menuitem"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSubmenuIndex(submenuIndex === 0 ? null : 0);
                                    }}>
                                    Products
                                    <IconChevronDown
                                        className={cn('size-5 transition-all', submenuIndex === 0 && 'rotate-180')}
                                    />
                                </Link>
                                <Submenu_1
                                    variant={variant}
                                    close={close}
                                    visible={submenuIndex === 0}
                                />
                            </li>
                            <li className="children">
                                <Link
                                    href="#"
                                    className="text-h6 font-highlight leading-headline py-theme-xl flex items-center justify-between gap-theme-md"
                                    aria-haspopup="true"
                                    aria-expanded={submenuIndex === 1 ? 'true' : 'false'}
                                    role="menuitem"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSubmenuIndex(submenuIndex === 1 ? null : 1);
                                    }}>
                                    Solutions
                                    <IconChevronDown
                                        className={cn('size-5 transition-all', submenuIndex === 1 && 'rotate-180')}
                                    />
                                </Link>
                                <Submenu_1
                                    variant={variant}
                                    close={close}
                                    visible={submenuIndex === 1}
                                />
                            </li>
                            <li className="children">
                                <Link
                                    href="#"
                                    className="text-h6 font-highlight leading-headline py-theme-xl flex items-center justify-between gap-theme-md"
                                    aria-haspopup="false"
                                    role="menuitem"
                                    onClick={() => {
                                        close();
                                    }}>
                                    Customers
                                </Link>
                            </li>
                            <li className="children">
                                <Link
                                    href="#"
                                    className="text-h6 font-highlight leading-headline py-theme-xl flex items-center justify-between gap-theme-md"
                                    aria-haspopup="true"
                                    aria-expanded={submenuIndex === 3 ? 'true' : 'false'}
                                    role="menuitem"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSubmenuIndex(submenuIndex === 3 ? null : 3);
                                    }}>
                                    Ressources
                                    <IconChevronDown
                                        className={cn('size-5 transition-all', submenuIndex === 3 && 'rotate-180')}
                                    />
                                </Link>
                                <Submenu_1
                                    variant={variant}
                                    close={close}
                                    visible={submenuIndex === 3}
                                />
                            </li>
                            <li className="children">
                                <Link
                                    href="#"
                                    className="text-h6 font-highlight leading-headline py-theme-xl flex items-center justify-between gap-theme-md"
                                    aria-haspopup="true"
                                    aria-expanded={submenuIndex === 4 ? 'true' : 'false'}
                                    role="menuitem"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSubmenuIndex(submenuIndex === 4 ? null : 4);
                                    }}>
                                    Pricing
                                    <IconChevronDown
                                        className={cn('size-5 transition-all', submenuIndex === 4 && 'rotate-180')}
                                    />
                                </Link>
                                <Submenu_1
                                    variant={variant}
                                    close={close}
                                    visible={submenuIndex === 4}
                                />
                            </li>
                        </ul>
                    </nav>
                    <div className="flex flex-col gap-theme-lg children">
                        <Button
                            as="link"
                            variant="light"
                            onClick={() => {
                                close();
                            }}
                            link={{ url: '#', title: 'Sign in', target: '_self' }}>
                            Sing in
                        </Button>
                        <Button
                            as="link"
                            variant="primary"
                            onClick={() => {
                                close();
                            }}
                            link={{ url: '#', title: 'Sign in', target: '_self' }}>
                            See a Demo
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
