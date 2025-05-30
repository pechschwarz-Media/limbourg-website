'use client';

import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfFile, AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

type TextFeatures2Props = {
    textblock: AcfTextBlock;
    settings: Settings;
    bullets: {
        icon: AcfFile | false;
        text: string;
    }[];
};

const containerVariants = cva(' pb-theme-4xl', {
    variants: {
        variant: {
            dark: 'border-border-tertiary',
            light: 'border-border-secondary',
            darkPrimary: 'border-border-tertiary',
            lightPrimary: 'border-border-secondary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const bulletTextVariants = cva('text-small leading-body', {
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

export default function Text_Feature_2(content: TextFeatures2Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });
    return (
        <Section
            dataComponent="Text_Features_2"
            settings={content?.settings}
            ref={container}>
            <div className="container pt-theme-9xl lg:pt-theme-10xl">
                <div className="lg:max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className={cn(containerVariants({ variant: content?.settings?.variant }))}>
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                        />
                    </motion.div>
                </div>

                {content?.bullets && (
                    <ul className="flex flex-col md:flex-row flex-wrap gap-theme-3xl lg:gap-theme-4xl pt-theme-4xl">
                        {content?.bullets?.map((bullet, index) => {
                            return (
                                <motion.li
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                    style={{ opacity: 0, y: 100 }}
                                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                    key={index}
                                    className={cn('flex items-center space-x-theme-lg')}>
                                    {bullet?.icon && bullet?.icon?.url && (
                                        <Image
                                            src={bullet?.icon?.url}
                                            height={32}
                                            width={32}
                                            alt={bullet?.icon?.alt}
                                        />
                                    )}
                                    <div className={cn(bulletTextVariants({ variant: content?.settings?.variant }))}>
                                        {bullet?.text}
                                    </div>
                                </motion.li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </Section>
    );
}
