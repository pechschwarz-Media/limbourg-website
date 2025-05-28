'use client';

import { Section } from '@/components/static/Section/Section';
import { Button } from '@/components/ui/Button/Button';
import { Media } from '@/components/ui/Media/Media';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfButton, AcfFile, AcfMedia, AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { AnimatePresence, motion, useInView, useMotionValueEvent, useScroll } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Element, Link } from 'react-scroll';

const navVariants = cva('inline-block rounded-xs p-theme-xs', {
    variants: {
        variant: {
            dark: 'bg-neutral-800',
            light: 'bg-neutral-100',
            darkPrimary: 'bg-brand-primary-800',
            lightPrimary: 'bg-brand-primary-100',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

type Text = {
    title: string;
    icon: AcfFile;
    textblock: AcfTextBlock;
    media: AcfMedia;
};

type ImageText1Props = {
    button: AcfButton;
    texts: Text[];
    settings: Settings;
};

export default function ImageText_2(content: ImageText1Props) {
    const container = useRef(null);
    const wrapper = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    const { scrollYProgress } = useScroll({
        target: wrapper,
        offset: ['start center', 'end center'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (val) => {
        setNavVisible(val === 1 || val === 0 ? false : true);
    });

    const [navVisible, setNavVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Section
            dataComponent="ImageText_2"
            ref={container}
            settings={content?.settings}>
            <div
                className="space-y-theme-6xl lg:space-y-theme-7xl"
                ref={wrapper}>
                {content?.texts?.map((text, index) => {
                    return (
                        <Element
                            name={`section-${index}`}
                            key={index}>
                            <InView
                                as="div"
                                threshold={0.6}
                                rootMargin="15% 0%"
                                onChange={(inView) => {
                                    if (inView) {
                                        setCurrentIndex(index);
                                    }
                                }}>
                                <div className="container">
                                    <div className="grid lg:grid-cols-12 gap-theme-6xl lg:gap-theme-3xl items-center">
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 'some' }}
                                            transition={{ duration: 0.5 }}
                                            style={{ opacity: 0, y: 100 }}
                                            className="lg:col-span-5">
                                            <TextBlock
                                                variant={content?.settings?.variant}
                                                textblock={text?.textblock}
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            style={{ opacity: 0 }}
                                            viewport={{ once: true, amount: 'some' }}
                                            transition={{ duration: 0.5 }}
                                            className="lg:col-span-6 lg:col-start-7 overflow-hidden">
                                            <motion.div
                                                initial={{ scale: 1.2 }}
                                                whileInView={{ scale: 1 }}
                                                style={{ scale: 0 }}
                                                viewport={{ once: true, amount: 'some' }}
                                                transition={{ duration: 0.5 }}>
                                                <Media
                                                    media={text?.media}
                                                    className="block rounded-2xl"
                                                />
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </InView>
                        </Element>
                    );
                })}
            </div>
            <AnimatePresence>
                {navVisible && (
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        exit={{ y: 100 }}
                        className="hidden lg:block fixed bottom-10 w-full z-50">
                        <div className="container">
                            <div className="flex items-center justify-between">
                                <nav className={cn(navVariants({ variant: content?.settings?.variant }))}>
                                    <ul className="flex">
                                        {content?.texts?.map((text, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        to={`section-${index}`}
                                                        smooth={true}
                                                        duration={500}
                                                        offset={-200}
                                                        className={cn(
                                                            'h-theme-5xl flex items-center gap-x-theme-md cursor-pointer px-theme-xl rounded-xs opacity-30 hover:opacity-100 transition-all',
                                                            currentIndex === index &&
                                                                'opacity-100 bg-brand-secondary-300 text-neutral-950',
                                                        )}>
                                                        {text?.title}
                                                        {text?.icon && (
                                                            <Image
                                                                src={text?.icon?.url}
                                                                alt={text?.icon?.alt}
                                                                width={text?.icon?.width}
                                                                height={text?.icon?.height}
                                                                className="h-5 w-auto"
                                                            />
                                                        )}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </nav>
                                <Button
                                    as="link"
                                    variant={content?.button?.variant}
                                    link={content?.button?.link}>
                                    {content?.button?.link?.title}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}
