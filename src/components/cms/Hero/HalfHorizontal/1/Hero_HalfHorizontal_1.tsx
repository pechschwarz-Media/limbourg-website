'use client';

import { ButtonGroup, ButtonGroupProps } from '@/components/static/ButtonGroup/ButtonGroup';
import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { Rating_1 } from '@/components/ui/Rating/1/Rating_1';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfHeadline, AcfMedia, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
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

const statsTextVariants = cva('text-regular leading-body', {
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

type HeroHalfHorizontal1Props = {
    headline: AcfHeadline;
    text: string;
    buttons: ButtonGroupProps['buttons'];
    facts: {
        value: string;
        description: string;
    }[];
    media: AcfMedia;
    showrating: boolean;
    switchOrder: boolean;
    settings: Settings;
};

export default function Hero_HalfHorizontal_1(content: HeroHalfHorizontal1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Hero_HalfVertical_1"
            ref={container}
            settings={content?.settings}>
            <div className="pt-[72px]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-5 lg:gap-20 items-center gap-y-theme-3xl md:gap-y-theme-7xl gap-x-theme-3xl order-1">
                        <div className={cn('', content.switchOrder === true ? 'order-1' : 'order-2')}>
                            {content?.showrating && (
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                    style={{ opacity: 0, y: 100 }}
                                    transition={{ duration: 0.5 }}>
                                    <Rating_1 />
                                </motion.div>
                            )}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-h1 font-headline leading-headline mb-4">
                                <Headline headline={content?.headline} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ delay: 0.2, duration: 0.5 }}>
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
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="mt-9">
                                    <ButtonGroup buttons={content?.buttons} />
                                </motion.div>
                            )}
                            <div className="flex gap-theme-3xl md:mt-theme-7xl">
                                {content?.facts?.length > 0 &&
                                    content?.facts?.map((fact, index) => {
                                        return (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 100 }}
                                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                                style={{ opacity: 0, y: 100 }}
                                                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                                                className="flex-1">
                                                <div className="text-h4 leading-headline font-headline mb-theme-md">
                                                    {fact?.value}
                                                </div>
                                                <div
                                                    className={cn(
                                                        statsTextVariants({ variant: content?.settings?.variant }),
                                                    )}>
                                                    {fact?.description}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                            </div>
                        </div>
                        <div className={cn('', content.switchOrder === true ? 'order-2' : 'order-1 lg:col-start-1')}>
                            <div className="overflow-hidden rounded-2xl">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isInView ? 1 : 0 }}
                                    style={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="rounded-2xl overflow-hidden max-md:!ml-0 max-md:!mr-0 origin-top">
                                    <motion.div
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: isInView ? 1 : 1.2 }}
                                        style={{ scale: 1.2 }}
                                        transition={{ duration: 1 }}>
                                        <Media
                                            media={content?.media}
                                            className="aspect-[3/4] object-cover"
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
