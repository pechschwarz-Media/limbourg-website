'use client';

import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { SliderControl } from '@/components/ui/SliderControl/SliderControl';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const bgVariants = cva('', {
    variants: {
        variant: {
            dark: 'bg-brand-secondary',
            light: 'bg-brand-primary-800',
            darkPrimary: 'bg-brand-primary-800',
            lightPrimary: 'bg-neutral-25',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const headlineVariants = cva('', {
    variants: {
        variant: {
            dark: 'text-text-tertiary',
            light: 'text-text-secondary',
            darkPrimary: 'text-text-brand-secondary',
            lightPrimary: 'text-text-brand-primary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const textVariants = cva('', {
    variants: {
        variant: {
            dark: 'text-text-tertiary',
            light: 'text-text-secondary',
            darkPrimary: 'text-text-tertiary',
            lightPrimary: 'text-text-secondary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const outerBulletVariants = cva('relative z-10 cursor-pointer size-7 rounded-full group', {
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

const bulletVariants = cva(
    'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 cursor-pointer size-4 rounded-full group-hover:opacity-100 transition-all',
    {
        variants: {
            variant: {
                dark: 'bg-neutral-200',
                light: 'bg-neutral-500',
                darkPrimary: 'bg-brand-secondary-300',
                lightPrimary: 'bg-brand-primary-500',
            },
            active: {
                true: 'opacity-100',
                false: 'opacity-30',
            },
        },
        defaultVariants: {
            variant: 'light',
            active: false,
        },
    },
);

const innerBulletVariants = cva(
    'absolute size-3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 border-2 rounded-full',
    {
        variants: {
            variant: {
                dark: 'border-neutral-950 bg-neutral-200',
                light: 'border-neutral-25 bg-neutral-500',
                darkPrimary: 'border-brand-primary-950 bg-brand-secondary-300',
                lightPrimary: 'border-brand-primary-25 bg-brand-primary-500',
            },
        },
        defaultVariants: {
            variant: 'light',
        },
    },
);

type Timeline1Props = {
    textblock: AcfTextBlock;
    slider: { year: string; title: string; text: string }[];
    settings: Settings;
};

export default function Timeline_1(content: Timeline1Props) {
    const container = useRef(null);
    const isInView = useInView(container, {
        once: true,
    });

    const [firstSwiper, setFirstSwiper] = useState<any>(null);
    const [secondSwiper, setSecondSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (firstSwiper && firstSwiper.activeIndex !== activeIndex) {
            firstSwiper.slideTo(activeIndex);
        }
        if (secondSwiper && secondSwiper.activeIndex !== activeIndex) {
            secondSwiper.slideTo(activeIndex);
        }
    }, [activeIndex, firstSwiper, secondSwiper]);

    return (
        <Section
            dataComponent="Timeline_1"
            ref={container}
            settings={content?.settings}
            className="overflow-hidden">
            <div className="container space-y-theme-6xl lg:space-y-theme-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-lg">
                    <TextBlock
                        variant={content?.settings?.variant}
                        textblock={content?.textblock}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-theme-6xl !overflow-visible">
                    <Swiper
                        onSwiper={setFirstSwiper}
                        slidesPerView="auto"
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.activeIndex);
                        }}
                        className="!overflow-visible !-mx-theme-4xl !w-auto">
                        {content?.slider?.map((slide, index) => (
                            <SwiperSlide
                                key={index}
                                className={cn(
                                    '!w-[80%] lg:!w-[40%] px-theme-4xl opacity-30',
                                    activeIndex === index && 'opacity-100',
                                    index + 1 === content?.slider?.length && 'mr-[20%] lg:mr-[60%]',
                                )}>
                                <div className={cn(headlineVariants({ variant: content.settings.variant }))}>
                                    <Headline
                                        headline={{ headline: slide.year, tagline: '', tag: 'span', style: 'h0' }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex items-center justify-between w-full relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-neutral-500"></div>
                        {content?.slider?.map((slide, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={cn(outerBulletVariants({ variant: content?.settings?.variant }))}>
                                <div
                                    className={cn(
                                        bulletVariants({
                                            variant: content?.settings?.variant,
                                            active: index === activeIndex,
                                        }),
                                    )}>
                                    <div
                                        className={cn(
                                            innerBulletVariants({ variant: content?.settings?.variant }),
                                        )}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Swiper
                        onSwiper={setSecondSwiper}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.activeIndex);
                        }}
                        slidesPerView="auto"
                        className="!overflow-visible !-mx-theme-4xl !w-auto">
                        {content?.slider?.map((slide, index) => (
                            <SwiperSlide
                                key={index}
                                className={cn(
                                    '!w-[80%] lg:!w-[40%] px-theme-4xl space-y-theme-xl opacity-30',
                                    activeIndex === index && 'opacity-100',
                                    index + 1 === content?.slider?.length && 'mr-[20%] lg:mr-[60%]',
                                )}>
                                <Headline
                                    headline={{
                                        headline: slide?.title,
                                        tagline: '',
                                        tag: 'span',
                                        style: 'h6',
                                    }}
                                />
                                <Wysiwyg
                                    text={slide?.text}
                                    className={cn(textVariants({ variant: content?.settings?.variant }))}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex gap-x-theme-xl">
                        <SliderControl
                            label="Vorheriges Jahr"
                            direction="prev"
                            variant={content?.settings?.variant}
                            disabled={activeIndex === 0}
                            onClick={() => {
                                setActiveIndex((prev) => prev - 1);
                            }}
                        />
                        <SliderControl
                            label="Nächstes Jahr"
                            direction="next"
                            disabled={activeIndex === content?.slider?.length - 1}
                            variant={content?.settings?.variant}
                            onClick={() => {
                                setActiveIndex((prev) => prev + 1);
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
