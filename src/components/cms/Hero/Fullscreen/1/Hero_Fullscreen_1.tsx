'use client';

import { IconClose } from '@/components/icons/IconClose';
import { IconPlay } from '@/components/icons/IconPlay';
import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { Rating_1 } from '@/components/ui/Rating/1/Rating_1';
import { Rating_2 } from '@/components/ui/Rating/2/Rating_2';
import { AcfFile, AcfHeadline, AcfMedia, Settings } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const overlayVariants = cva('absolute inset-0', {
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

type HeroFullscreen1Props = {
    media: AcfMedia;
    headline: AcfHeadline;
    video_overlay: AcfFile;
    opacity: number;
    settings: Settings;
};

export default function Hero_Fullscreen_1(content: HeroFullscreen1Props) {
    const container = useRef(null);
    const video = useRef<HTMLVideoElement>(null);

    const [openDialog, setOpenDialog] = useState(false);

    const isInView = useInView(container, {
        once: true,
    });

    useEffect(() => {
        if (video.current) {
            openDialog ? video?.current?.play() : video?.current?.pause();
        }
    }, [openDialog]);

    return (
        <>
            <Section
                dataComponent="Hero_Fullscreen_1"
                ref={container}
                className="w-full h-screen relative"
                settings={content?.settings}>
                <div className="absolute size-full top-0 left-0">
                    <div
                        className={overlayVariants({ variant: content?.settings?.variant })}
                        style={{ opacity: `${content.opacity}%` }}></div>
                    <Media
                        media={content?.media}
                        className="size-full object-cover"
                    />
                </div>
                <div className="h-full relative">
                    <div className="h-full container">
                        <div className="h-full flex flex-col gap-y-theme-3xl md:flex-row gap-x-theme-7xl justify-end md:items-end md:justify-between">
                            <div className="max-w-4xl space-y-theme-3xl text-white">
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                    style={{ opacity: 0, y: 100 }}
                                    transition={{ duration: 0.5 }}>
                                    <Rating_1 variant={content?.settings?.variant} />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                    style={{ opacity: 0, y: 100 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}>
                                    <Headline headline={content?.headline} />
                                </motion.div>
                            </div>
                            {content?.video_overlay?.type === 'video' && (
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                        style={{ opacity: 0, y: 100 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}>
                                        <button
                                            className="flex flex-row md:flex-col md:w-3xs lg:w-xs bg-neutral-950/15 rounded-md text-left backdrop-blur p-theme-xl pr-0 md:pr-theme-md md:p-theme-md md:pb-0 cursor-pointer"
                                            aria-label="Video öffnen"
                                            onClick={() => {
                                                setOpenDialog(true);
                                            }}>
                                            <div
                                                className="max-w-48 md:max-w-full"
                                                aria-hidden="true">
                                                <video
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="rounded-md w-full">
                                                    <source src={content?.video_overlay?.url} />
                                                </video>
                                            </div>
                                            <div
                                                className="flex-1 whitespace-nowrap flex items-center md:justify-between gap-x-theme-lg px-theme-4xl md:px-0 py-theme-lg"
                                                aria-hidden="true">
                                                <div className="md:text-small font-highlight text-brand-white">
                                                    Play Reel
                                                </div>
                                                <div className="size-8 md:size-auto flex md:block items-center justify-center rounded-full md:rounded-none bg-brand-secondary-300 md:bg-transparent text-brand-black md:text-brand-secondary-300">
                                                    <IconPlay />
                                                </div>
                                            </div>
                                        </button>
                                    </motion.div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Section>
            {content?.video_overlay?.type === 'video' && (
                <AnimatePresence>
                    {openDialog && (
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed top-0 left-0 size-full bg-brand-black text-brand-white flex items-center justify-center px-theme-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="max-w-5xl p-theme-xl relative rounded-md bg-neutral-25/15">
                                <button
                                    onClick={() => {
                                        setOpenDialog(false);
                                    }}
                                    aria-label="Video schließen"
                                    className="size-10 mb-theme-md cursor-pointer rounded-full bg-neutral-25/15 absolute bottom-full right-0 flex items-center justify-center">
                                    <IconClose aria-hidden="true" />
                                </button>
                                <video
                                    controls
                                    ref={video}
                                    className="rounded-md w-full">
                                    <source src={content?.video_overlay?.url} />
                                </video>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </>
    );
}
