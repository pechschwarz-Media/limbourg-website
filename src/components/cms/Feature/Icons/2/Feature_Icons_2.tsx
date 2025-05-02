'use client';

import { IconCheck } from '@/components/icons/IconCheck';
import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const gridVariants = cva('grid gap-x-theme-3xl', {
    variants: {
        grid: {
            3: 'lg:grid-cols-3 gap-y-theme-3xl lg:gap-y-theme-6xl',
            4: 'lg:grid-cols-4 gap-y-theme-3xl lg:gap-y-theme-6xl',
        },
    },
    defaultVariants: {
        grid: 3,
    },
});

const containerVariants = cva('p-theme-3xl rounded-xl', {
    variants: {
        variant: {
            light: 'bg-neutral-100',
            lightPrimary: 'bg-brand-primary-100',
            dark: 'bg-neutral-800',
            darkPrimary: 'bg-brand-primary-800',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const listVariants = cva('flex gap-x-theme-md leading-body', {
    variants: {
        variant: {
            light: 'text-text-secondary',
            lightPrimary: '',
            dark: 'text-text-tertiary',
            darkPrimary: 'text-text-tertiary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const checkMarkVariants = cva('size-4 relative top-[2px]', {
    variants: {
        variant: {
            light: 'text-neutral-600',
            lightPrimary: 'text-brand-secondary-500',
            dark: 'text-neutral-100',
            darkPrimary: 'text-brand-secondary-300',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

type FeatureIcons2Props = {
    textblock: AcfTextBlock;
    tiles: {
        title: string;
        list: { text: string }[];
    }[];
    grid: 3 | 4;
    settings: Settings;
};

export default function Feature_Icons_2(content: FeatureIcons2Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Feature_Icons_2"
            settings={content?.settings}
            ref={container}>
            <div className="container space-y-theme-6xl lg:space-y-theme-7xl">
                {(content?.textblock?.headline?.headline || content?.textblock?.text) && (
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}>
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                        />
                    </motion.div>
                )}
                <div className={cn(gridVariants({ grid: content?.grid }))}>
                    {content?.tiles?.map((tile, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                className={cn(containerVariants({ variant: content?.settings?.variant }))}>
                                <h3 className="text-h6 leading-headline font-headline mb-theme-xl">{tile?.title}</h3>
                                <ul className="flex flex-col gap-y-theme-lg text-small">
                                    {tile?.list?.map((item, key) => {
                                        return (
                                            <li
                                                key={key}
                                                className={cn(listVariants({ variant: content.settings.variant }))}>
                                                <IconCheck
                                                    className={cn(
                                                        checkMarkVariants({ variant: content.settings.variant }),
                                                    )}
                                                />
                                                <div className="flex-1">{item.text}</div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
