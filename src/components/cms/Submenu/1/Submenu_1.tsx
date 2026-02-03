'use client';

import { AcfLink, AcfMedia, SubmenuProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { useRef, useState } from 'react';
import { IconChevronDown } from '@/components/icons/IconChevronDown';
import { Media } from '@/components/ui/Media/Media';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';

const submenuVariants = cva(
    'container lg:text-inherit overflow-hidden lg:absolute pb-theme-4xl lg:left-1/2 top:top-full lg:-translate-x-1/2 lg:rounded-xl lg:p-theme-4xl lg:mt-theme-xl  z-40',
    {
        variants: {
            variant: {
                glass: 'lg:backdrop-blur lg:bg-neutral-900/15',
                light: 'lg:bg-white',
                dark: 'lg:bg-brand-primary-950',
            },
        },
        defaultVariants: {
            variant: 'glass',
        },
    },
);

const titleVariants = cva('text-text-secondary font-medium mb-theme-xl', {
    variants: {
        variant: {
            glass: 'lg:text-text-tertiary',
            light: 'lg:text-brand-primary',
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
    preview?: boolean;
    navbox?: {
        media: AcfMedia;
        title: string;
        link: AcfLink;
    };
    close: () => void;
};

export default function Submenu_1({
    visible,
    preview,
    variant,
    submenu,
    navbox,
    close,
}: Submenu1Props & { submenu: SubmenuProps[] }) {
    const [faqIndex, setFaqIndex] = useState<null | number>(null);
    const isMobile = useMediaQuery({
        query: '(max-width: 64rem)',
    });
    return (
        <AnimatePresence>
            {visible && !isMobile && (
                <>
                    <motion.div
                        initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 50 }}
                        animate={isMobile ? { height: 'auto', opacity: 1 } : { opacity: 1, y: 0 }}
                        exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 50 }}
                        aria-hidden="false"
                        className={cn(submenuVariants({ variant }), !preview && 'lg:top-full')}>
                        <div className="lg:flex justify-between">
                            <div className="w-full flex flex-col md:flex-row lg:flex-col justify-between gap-x-xl gap-y-4xl">
                                <nav
                                    role="navigation"
                                    aria-label="Unternavigation"
                                    className="grid grid-cols-4 gap-4xl">
                                    {submenu?.map((item, index) => (
                                        <div key={index}>
                                            <Link
                                                href={item?.label?.url}
                                                target={item?.label?.target}
                                                className={cn(
                                                    'mb-2 lg:mb-4 lg:pl-3 block underline-hover',
                                                    titleVariants({ variant }),
                                                )}>
                                                {item?.label?.title}
                                            </Link>
                                            <ul
                                                className={cn(
                                                    '',
                                                    submenu?.length > 1 ? 'flex flex-col gap-4' : 'flex flex-col gap-2',
                                                )}>
                                                {item?.thirdmenu?.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="hover:pl-4 transition-all pl-3">
                                                        <Link
                                                            href={item?.link.url}
                                                            target={item?.link.target}
                                                            className="text-regular text-brand-black"
                                                            role="menuitem"
                                                            onClick={close}>
                                                            {item?.link?.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </nav>
                                {navbox?.media && (
                                    <Link
                                        href={navbox?.link?.url ?? ''}
                                        className="relative rounded-md overflow-hidden self-start group mt-6">
                                        <Media
                                            media={navbox?.media}
                                            loading="eager"
                                            className="max-w-[340px] group-hover:scale-105 transition-all"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-30"></div>
                                        <div className="absolute bottom-0 px-4 py-6">
                                            <div className="text-regular text-white mb-1">{navbox?.title}</div>
                                            <h5 className="text-h5 text-white">{navbox?.link?.title}</h5>
                                        </div>
                                        <div className="absolute bottom-0 right-0 px-4 py-6">
                                            <IconChevronLeft className="text-white rotate-180 size-6" />
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
            {visible && isMobile && (
                <>
                    <motion.div>
                        <div className="lg:flex justify-between">
                            <div className="w-full flex flex-col md:flex-row lg:flex-col justify-between gap-x-xl gap-y-4xl">
                                <nav
                                    role="navigation"
                                    aria-label="Unternavigation"
                                    className="pl-4 flex flex-col justify-between lg:flex-row gap-4xl">
                                    {submenu?.map((item, index) => {
                                        return (
                                            <motion.div
                                                className="border-border-tertiary"
                                                key={index}>
                                                <button
                                                    aria-expanded={faqIndex === index}
                                                    onClick={() => {
                                                        setFaqIndex(faqIndex === index ? null : index);
                                                    }}
                                                    aria-controls={`faq-panel-${index}`}
                                                    id={`faq-button-${index}`}
                                                    className="flex items-center justify-between gap-theme-3xl cursor-pointer w-full text-large text-left font-highlight py-theme-xl">
                                                    <div className="flex-1">{item?.label?.title}</div>
                                                    <div
                                                        className="shrink"
                                                        aria-hidden="true">
                                                        <IconChevronDown
                                                            className={cn(
                                                                'size-5 transition-all',
                                                                faqIndex === index && 'rotate-180',
                                                            )}
                                                        />
                                                    </div>
                                                </button>
                                                <AnimatePresence>
                                                    {faqIndex === index && (
                                                        <motion.div
                                                            role="region"
                                                            aria-labelledby={`faq-button-${index}`}
                                                            id={`faq-panel-${index}`}
                                                            className="overflow-hidden text-text-secondary pb-4">
                                                            <ul
                                                                className={cn(
                                                                    '',
                                                                    submenu?.length > 1
                                                                        ? 'flex flex-col gap-4'
                                                                        : 'flex flex-col gap-2',
                                                                )}>
                                                                {item?.thirdmenu?.map((item, index) => (
                                                                    <li
                                                                        key={index}
                                                                        className="hover:bg-brand-vw-light px-3 rounded-2xl">
                                                                        <Link
                                                                            href={item?.link.url}
                                                                            target={item?.link.target}
                                                                            className="text-regular text-brand-black"
                                                                            role="menuitem"
                                                                            onClick={close}>
                                                                            {item?.link?.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
