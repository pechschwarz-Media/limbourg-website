'use client';

import { Section } from '@/components/static/Section/Section';
import { Button } from '@/components/ui/Button/Button';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfButton, AcfHeadline, AcfMedia, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
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

const gridVariants = cva('h-full flex flex-col', {
    variants: {
        align: {
            top: ' justify-start',
            bottom: 'justify-end',
        },
    },
    defaultVariants: {
        align: 'top',
    },
});

const containerVariants = cva('max-w-5xl space-y-theme-3xl', {
    variants: {
        textAlign: {
            center: ' mx-auto',
            left: '',
        },
    },
    defaultVariants: {
        textAlign: 'center',
    },
});

const headlineVariants = cva('text-text-brand-secondary', {
    variants: {
        textAlign: {
            center: 'text-center',
            left: '',
        },
    },
    defaultVariants: {
        textAlign: 'center',
    },
});

const textGridVariants = cva('flex gap-y-theme-2xl gap-x-theme-6xl', {
    variants: {
        textAlign: {
            center: 'flex-col md:flex-row justify-center items-center max-md:text-center',
            left: 'flex-col',
        },
        variant: {
            light: 'text-text-primary',
            dark: 'text-text-alternate',
            lightPrimary: 'text-text-primary',
            darkPrimary: 'text-text-alternate',
        },
    },
    defaultVariants: {
        textAlign: 'center',
        variant: 'light',
    },
});

type HeroFullscreen2Props = {
    media: AcfMedia;
    headline: AcfHeadline;
    text: string;
    button: AcfButton;
    opacity: number;
    align: VariantProps<typeof gridVariants>['align'];
    textAlign: VariantProps<typeof containerVariants>['textAlign'];
    settings: Settings;
};

export default function Hero_Fullscreen_2(content: HeroFullscreen2Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Hero_Fullscreen_2"
            ref={container}
            className="w-full h-screen relative -mt-[72px]"
            settings={content?.settings}>
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
                    <div className={cn(gridVariants({ align: content.align }))}>
                        <div className={cn(containerVariants({ textAlign: content?.textAlign }))}>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5 }}
                                className={cn(headlineVariants({ textAlign: content?.textAlign }))}>
                                <Headline
                                    headline={content?.headline}
                                    classNameTagline="text-white"
                                />
                            </motion.div>
                            <div
                                className={cn(
                                    textGridVariants({
                                        textAlign: content?.textAlign,
                                        variant: content?.settings?.variant,
                                    }),
                                )}>
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                    style={{ opacity: 0, y: 100 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="flex-1 max-w-lg md:text-large">
                                    <Wysiwyg text={content?.text} />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                    style={{ opacity: 0, y: 100 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="max-md:w-full md:shrink whitespace-nowrap">
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
            </div>
        </Section>
    );
}
