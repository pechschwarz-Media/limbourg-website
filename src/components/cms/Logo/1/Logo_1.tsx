'use client';
import 'swiper/css';

import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { AcfFile, AcfHeadline, Settings } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const gradientOverlayVariants = cva('pointer-events-none absolute inset-y-0 z-10', {
    variants: {
        variant: {
            light: 'from-white via-white/80 to-white/0',
            dark: 'from-neutral-950 via-neutral-950/80 to-neutral-950/0',
            lightPrimary: 'from-brand-primary-25 via-brand-primary-25/80 to-brand-primary-25/0',
            darkPrimary: 'from-brand-primary-950 via-brand-primary-950/80 to-brand-primary-950/0',
        },
        direction: {
            left: 'left-0 w-[20%] bg-gradient-to-r',
            right: 'right-0 w-[20%] bg-gradient-to-l',
        },
    },
    defaultVariants: {
        variant: 'light',
        direction: 'left',
    },
});

type Logo1Props = {
    headline: AcfHeadline;
    logos: {
        logo: AcfFile;
    }[];
    settings: Settings;
};

export default function Logo1(content: Logo1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Logo_1"
            ref={container}
            settings={content?.settings}>
            <div className="space-y-theme-3xl lg:space-y-theme-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    style={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative">
                    <div
                        className={gradientOverlayVariants({ variant: content?.settings.variant, direction: 'left' })}
                    />
                    <div
                        className={gradientOverlayVariants({ variant: content?.settings.variant, direction: 'right' })}
                    />
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        slidesPerView="auto"
                        allowTouchMove={false}
                        speed={3000}
                        className="free-slider"
                        loop={true}>
                        {content?.logos?.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className="!w-28 md:!w-32 lg:!w-48 mx-theme-4xl lg:mx-theme-6xl">
                                <Image
                                    src={item.logo.url}
                                    alt={item.logo.alt}
                                    width={item.logo.width}
                                    height={item.logo.height}
                                    className="w-auto max-h-16"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </Section>
    );
}
