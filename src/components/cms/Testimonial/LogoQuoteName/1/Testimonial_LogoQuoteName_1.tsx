'use client';

import { Section } from '@/components/static/Section/Section';
import { SliderControl } from '@/components/ui/SliderControl/SliderControl';
import { SliderPagination } from '@/components/ui/SliderPagination/SliderPagination';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfFile, AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

const testimonialVariants = cva(
    '!w-[90%] lg:!w-full rounded-xl p-theme-3xl mx-theme-lg min-h-[480px] !flex items-center !transition-all',
    {
        variants: {
            variant: {
                light: 'bg-neutral-100',
                dark: 'bg-neutral-800',
                lightPrimary: 'bg-brand-primary-100',
                darkPrimary: 'bg-brand-primary-800',
            },
            active: {
                true: '',
                false: '',
            },
        },
        compoundVariants: [
            {
                variant: 'light',
                active: true,
                className: 'bg-neutral-900 text-text-alternate',
            },
            {
                variant: 'dark',
                active: true,
                className: 'bg-neutral-50 text-text-primary',
            },
            {
                variant: 'lightPrimary',
                active: true,
                className: 'bg-brand-primary-900 text-text-alternate',
            },
            {
                variant: 'darkPrimary',
                active: true,
                className: 'bg-brand-primary-50 text-text-primary',
            },
        ],
        defaultVariants: {
            variant: 'light',
            active: false,
        },
    },
);

const nameVariants = cva('transition-all', {
    variants: {
        variant: {
            light: 'text-text-secondary',
            dark: 'text-text-tertiary',
            lightPrimary: 'text-text-secondary',
            darkPrimary: 'text-text-tertiary',
        },
        active: {
            true: '',
            false: '',
        },
    },
    compoundVariants: [
        {
            variant: 'light',
            active: true,
            className: '!text-text-tertiary',
        },
        {
            variant: 'dark',
            active: true,
            className: '!text-text-secondary',
        },
        {
            variant: 'lightPrimary',
            active: true,
            className: '!text-text-tertiary',
        },
        {
            variant: 'darkPrimary',
            active: true,
            className: '!text-text-secondary',
        },
    ],
    defaultVariants: {
        variant: 'light',
        active: false,
    },
});

const containerVariants = cva('inline-flex p-theme-xl rounded-full gap-x-theme-md', {
    variants: {
        variant: {
            light: 'bg-neutral-100',
            dark: 'bg-neutral-800',
            lightPrimary: 'bg-neutral-100',
            darkPrimary: 'bg-neutral-800',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const paginationVariants = cva('size-2 rounded-full block transition-all cursor-pointer relative overflow-hidden', {
    variants: {
        variant: {
            light: 'bg-neutral-300',
            dark: 'bg-neutral-600',
            lightPrimary: 'bg-neutral-300',
            darkPrimary: 'bg-neutral-600',
        },
        active: {
            true: '',
            false: '',
        },
    },
    compoundVariants: [
        {
            variant: 'light',
            active: true,
            className: 'w-10',
        },
        {
            variant: 'dark',
            active: true,
            className: 'w-10',
        },
        {
            variant: 'lightPrimary',
            active: true,
            className: 'w-10',
        },
        {
            variant: 'darkPrimary',
            active: true,
            className: 'w-10',
        },
    ],
    defaultVariants: {
        variant: 'light',
        active: false,
    },
});

const fillBarVariants = cva('h-full absolute left-0 top-0', {
    variants: {
        variant: {
            light: 'bg-neutral-950',
            dark: 'bg-neutral-25',
            lightPrimary: 'bg-neutral-950',
            darkPrimary: 'bg-neutral-25',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

type TestimonialLogoQuoteName1Props = {
    textblock: AcfTextBlock;
    testimonials: {
        testimonial: string;
        author: string;
        media: AcfFile;
    }[];
    loop: boolean;
    autoplay: boolean;
    duration: number;
    settings: Settings;
};

export default function Testimonial_LogoQuoteName_1(content: TestimonialLogoQuoteName1Props) {
    const slider = useRef<SwiperRef>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Testimonial_LogoQuoteName_1"
            ref={container}
            settings={content?.settings}>
            <div className="space-y-theme-6xl lg:space-y-theme-7xl overflow-hidden">
                {(content?.textblock?.headline || content?.textblock?.text) && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}>
                        <div className="container">
                            <div className="text-center max-w-4xl mx-auto">
                                <TextBlock
                                    variant={content?.settings?.variant}
                                    textblock={content?.textblock}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    style={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl mx-auto relative">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={
                            content?.autoplay
                                ? {
                                      delay: content?.duration,
                                      disableOnInteraction: false,
                                  }
                                : false
                        }
                        speed={600}
                        loop={content?.loop}
                        centeredSlides={true}
                        slidesPerView="auto"
                        className="!overflow-visible"
                        ref={slider}
                        onSlideChange={(swiper) => {
                            setActiveIndex(swiper.realIndex);
                        }}>
                        {content?.testimonials.map((item, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                    className={cn(
                                        testimonialVariants({
                                            variant: content?.settings?.variant,
                                            active: activeIndex === index,
                                        }),
                                    )}>
                                    <div className="max-w-xl mx-auto text-center space-y-theme-3xl">
                                        {item.media?.url && (
                                            <Image
                                                src={item.media.url}
                                                alt={item.media.alt}
                                                width={item.media.width}
                                                height={item.media.height}
                                                className="h-10 w-auto mx-auto"
                                            />
                                        )}
                                        <div className="text-large font-highlight">
                                            <Wysiwyg text={item?.testimonial} />
                                        </div>
                                        <div
                                            className={cn(
                                                nameVariants({
                                                    variant: content?.settings?.variant,
                                                    active: activeIndex === index,
                                                }),
                                            )}>
                                            {item.author}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <SliderControl
                        className="hidden md:flex absolute left-0 lg:left-auto lg:right-full ml-theme-lg lg:ml-0 lg:mr-theme-2xl xl:mr-theme-5xl top-1/2 -translate-y-1/2"
                        variant={content?.settings?.variant}
                        direction="prev"
                        label="Vorheriges Testimonial"
                        onClick={() => {
                            if (slider?.current?.swiper) {
                                slider?.current?.swiper?.slidePrev();
                            }
                        }}
                    />
                    <SliderControl
                        className="hidden md:flex absolute right-0 lg:right-auto lg:left-full mr-theme-lg lg:mr-0 lg:ml-theme-2xl xl:ml-theme-5xl top-1/2 -translate-y-1/2"
                        variant={content?.settings?.variant}
                        direction="next"
                        label="Nächstes Testimonial"
                        onClick={() => {
                            if (slider?.current?.swiper) {
                                slider?.current?.swiper?.slideNext();
                            }
                        }}
                    />
                    <div className="flex md:hidden justify-center mt-theme-3xl">
                        <SliderPagination
                            variant={content?.settings?.variant}
                            amount={content?.testimonials?.length}
                            activeIndex={activeIndex}
                            autoplay={content?.autoplay}
                            duration={content?.duration}
                            label="Zeige Testimonial"
                            onButtonClick={(index: number) => {
                                if (slider?.current?.swiper) {
                                    slider?.current?.swiper.slideToLoop(index);
                                }
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
