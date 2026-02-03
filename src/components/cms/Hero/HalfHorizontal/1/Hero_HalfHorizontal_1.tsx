'use client';

import { ButtonGroup, ButtonGroupProps } from '@/components/static/ButtonGroup/ButtonGroup';
import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { Rating_2 } from '@/components/ui/Rating/2/Rating_2';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfHeadline, AcfMedia, Options, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

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
    options: Options;
};

export default function Hero_HalfHorizontal_1(content: HeroHalfHorizontal1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Hero_HalfHorizontal_1"
            ref={container}
            settings={content?.settings}>
            <div className="container">
                <div className="grid lg:grid-cols-12 items-center gap-y-theme-3xl md:gap-y-theme-7xl gap-x-theme-3xl">
                    <div className="lg:col-span-6 xl:col-span-6 space-y-theme-3xl">
                        {content?.showrating && (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5 }}>
                                <Rating_2
                                    options={content?.options}
                                    variant="dark"
                                />
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                            style={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-h1 font-headline leading-headline">
                            <Headline
                                headline={content?.headline}
                                className="!hyphens-auto"
                            />
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
                                transition={{ delay: 0.3, duration: 0.5 }}>
                                <ButtonGroup buttons={content?.buttons} />
                            </motion.div>
                        )}
                        {content?.facts && (
                            <div className="flex gap-theme-3xl md:mt-theme-7xl">
                                {content?.facts?.map((fact, index) => {
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
                        )}
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            style={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="overflow-hidden rounded-2xl w-full aspect-[4/5]">
                            <Media
                                media={content?.media}
                                className="object-cover size-full"
                                loading="eager"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
