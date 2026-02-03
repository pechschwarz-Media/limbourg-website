'use client';

import { IconArrowDown } from '@/components/icons/IconArrowDown';
import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { AcfHeadline, AcfMedia, Settings } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const overlayVariants = cva('absolute top-0 left-0 size-full', {
    variants: {
        variant: {
            dark: 'bg-neutral-950',
            light: 'bg-neutral-25',
            darkPrimary: 'bg-brand-primary-950',
            lightPrimary: 'bg-brand-primary-25',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

type HeroFullscreen4Props = {
    media: AcfMedia;
    headline: AcfHeadline;
    subline?: string;
    opacity: number;
    settings: Settings;
};

export default function Hero_Fullscreen_4(content: HeroFullscreen4Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Hero_Fullscreen_4"
            ref={container}
            className="w-full h-screen relative -mt-[72px]"
            settings={{ ...content?.settings, padding: { top: content?.settings?.padding?.top, bottom: 'off' } }}>
            <div className="absolute size-full top-0 left-0 ">
                <div
                    className={overlayVariants({ variant: content?.settings?.variant })}
                    style={{ opacity: `${content?.opacity}%` }}></div>
                <Media
                    media={content?.media}
                    className="size-full object-cover"
                    loading="eager"
                />
            </div>
            <div className="h-full relative pt-[72px]">
                <div className="h-full container">
                    <div className="h-full flex items-end">
                        <div className="w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5 }}
                                className="pb-theme-4xl lg:pb-theme-6xl text-center">
                                <Headline headline={content?.headline} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="sm:border-t border-border-tertiary flex items-center justify-between pb-theme-2xl sm:py-theme-5xl">
                                <div className="text-center sm:text-left flex-1">
                                    <button
                                        className="cursor-pointer"
                                        aria-label="Nach unten scrollen">
                                        <IconArrowDown />
                                    </button>
                                </div>
                                {content?.subline && (
                                    <div className="hidden sm:block flex-5 md:flex-3 text-right lg:text-center">
                                        <div className="text-h6">{content?.subline}</div>
                                    </div>
                                )}
                                <div className="hidden lg:block flex-1 text-right">
                                    <button className="uppercase tracking-r-sm text-right font-highlight cursor-pointer">
                                        Scroll To Explore
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
