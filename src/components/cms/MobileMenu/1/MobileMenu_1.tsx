import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate } from 'motion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Submenu_1 from '../../Submenu/1/Submenu_1';
import { NavbarProps } from '@/lib/types';
import { IconChevronDown } from '@/components/icons/IconChevronDown';

type MobileMenu1Props = {
    variant: 'dark' | 'glass' | 'light' | null | undefined;
    visible: boolean;
    close: () => void;
};

export default function MobileMenu_1({
    visible,
    variant = 'glass',
    navbar,
    close,
}: MobileMenu1Props & { navbar: NavbarProps[] }) {
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
                <div className="h-full overflow-auto hide-scrollbar flex flex-col justify-between gap-y-3xl pb-lg">
                    <nav
                        role="navigation"
                        aria-label="Hauptnavigation">
                        <ul className="divide-y divide-border-secondary">
                            {navbar?.map((item, index) => (
                                <li
                                    key={index}
                                    className="children">
                                    {item?.type === 'submenu' ? (
                                        <>
                                            <Link
                                                href="#"
                                                className="text-h6 font-highlight leading-headline py-xl flex items-center justify-between gap-md"
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
                                                        'size-5 transition-all',
                                                        submenuIndex === 0 && 'rotate-180',
                                                    )}
                                                />
                                            </Link>
                                            <Submenu_1
                                                submenu={item?.submenus}
                                                variant={variant}
                                                visible={submenuIndex === index}
                                                close={close}
                                            />
                                        </>
                                    ) : item?.type === 'extern' ? (
                                        <Link
                                            href="#"
                                            className="text-h6 font-highlight leading-headline py-xl flex items-center justify-between gap-md"
                                            target="_blank"
                                            aria-haspopup="false"
                                            role="menuitem"
                                            onClick={() => {
                                                close();
                                            }}>
                                            {item?.label}
                                        </Link>
                                    ) : (
                                        <Link
                                            href="#"
                                            className="text-h6 font-highlight leading-headline py-xl flex items-center justify-between gap-md"
                                            aria-haspopup="false"
                                            target="_self"
                                            role="menuitem"
                                            onClick={() => {
                                                close();
                                            }}>
                                            {item?.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </motion.div>
    );
}
