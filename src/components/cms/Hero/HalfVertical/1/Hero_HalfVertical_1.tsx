'use client';

import { ButtonGroup, ButtonGroupProps } from '@/components/static/ButtonGroup/ButtonGroup';
import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { Rating_1 } from '@/components/ui/Rating/1/Rating_1';
import { Rating_2 } from '@/components/ui/Rating/2/Rating_2';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfHeadline, AcfMedia, Options, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const textVariants = cva('text-large', {
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

type HeroHalfVertical1Props = {
    headline: AcfHeadline;
    text: string;
    buttons: ButtonGroupProps['buttons'];
    media: AcfMedia;
    settings: Settings;
    options: Options;
};

export default function Hero_HalfVertical_1(content: HeroHalfVertical1Props) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start'],
    });

    const margin = useTransform(scrollYProgress, [0, 1], ['0', '-6%']);
    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Hero_HalfVertical_1"
            ref={container}
            settings={content?.settings}>
            <div className="pt-[72px] mb-theme-3xl md:mb-theme-7xl">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center space-y-theme-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                            style={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5 }}>
                            <Rating_2 options={content?.options} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                            style={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-h1 font-headline leading-headline">
                            <Headline headline={content?.headline} />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                            style={{ opacity: 0, y: 100 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="max-w-xl mx-auto">
                            <Wysiwyg
                                text={content?.text}
                                className={cn(textVariants({ variant: content?.settings?.variant }))}
                            />
                        </motion.div>
                        {content?.buttons?.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ delay: 0.3, duration: 0.5 }}>
                                <ButtonGroup
                                    className="justify-center"
                                    buttons={content?.buttons}
                                />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <motion.div
                        className="rounded-2xl overflow-hidden max-md:!ml-0 max-md:!mr-0"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        style={{ marginLeft: margin, marginRight: margin, opacity: 0, y: 100 }}>
                        <Media
                            media={content?.media}
                            className="aspect-[16/9] size-auto object-cover"
                            loading="eager"
                        />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
