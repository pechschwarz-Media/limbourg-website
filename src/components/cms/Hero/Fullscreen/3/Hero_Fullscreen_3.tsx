'use client';

import { Section } from '@/components/static/Section/Section';
import { Button } from '@/components/ui/Button/Button';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { AcfButton, AcfHeadline, AcfMedia, Settings } from '@/lib/types';
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

type HeroFullscreen3Props = {
    media: AcfMedia;
    headline: AcfHeadline;
    button: AcfButton;
    opacity: number;
    settings: Settings;
};

export default function Hero_Fullscreen_2(content: HeroFullscreen3Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Hero_Fullscreen_3"
            ref={container}
            className="w-full h-screen relative"
            settings={content?.settings}>
            <div className="absolute size-full top-0 left-0">
                <div
                    className={overlayVariants({ variant: content?.settings?.variant })}
                    style={{ opacity: `${content?.opacity}%` }}></div>
                <Media
                    media={content?.media}
                    className="size-full object-cover"
                />
            </div>
            <div className="h-full relative pt-[72px]">
                <div className="h-full container">
                    <div className="h-full flex flex-col justify-end">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-theme-6xl">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5 }}
                                className="flex-1">
                                <Headline headline={content?.headline} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="shrink">
                                <Button
                                    as="link"
                                    variant={content?.button?.variant}
                                    link={{
                                        url: content?.button?.link?.url,
                                        target: content?.button?.link?.target,
                                        title: content?.button?.link?.title,
                                    }}>
                                    {content?.button?.link?.title}
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
