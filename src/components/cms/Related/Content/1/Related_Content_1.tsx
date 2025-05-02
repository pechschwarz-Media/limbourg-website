'use client';

import { IconArrowRight } from '@/components/icons/IconArrowRight';
import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import parse from 'html-react-parser';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';

const gridVariants = cva('grid gap-theme-3xl', {
    variants: {
        grid: {
            3: 'lg:grid-cols-3',
            4: 'lg:grid-cols-4',
        },
    },
    defaultVariants: {
        grid: 3,
    },
});

const linkVariants = cva('rounded-xl', {
    variants: {
        variant: {
            light: 'bg-neutral-100',
            dark: 'bg-neutral-800',
            lightPrimary: 'bg-brand-primary-100',
            darkPrimary: 'bg-brand-primary-800',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const textVariants = cva('text-small leading-body text-text-secondary max-w-2xs', {
    variants: {
        variant: {
            light: 'text-text-secondary',
            dark: 'text-text-tertiary',
            lightPrimary: 'text-text-secondary',
            darkPrimary: 'text-text-tertiary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

type RelatedContent1Props = {
    textblock: AcfTextBlock;
    content: {
        icon: string;
        title: string;
        description: string;
    }[];
    grid: 3 | 4;
    settings: Settings;
};

export default function Related_Content_1(content: RelatedContent1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Related_Content_1"
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
                    {content?.content?.map((box, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}>
                                <Link
                                    href="#"
                                    className={cn(
                                        linkVariants({ variant: content?.settings?.variant }),
                                        'p-theme-xl h-72 flex flex-col justify-between group hover:scale-105 hover:shadow-xl transition-all duration-400',
                                    )}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 text-h6 font-headline leading-headline hyphens-auto">
                                            {box?.title}
                                        </div>
                                        <div className="size-12 flex-[0_0_auto] rounded-md relative overflow-hidden group-hover:bg-brand-secondary-300 group-hover:text-text-primary transition-[translate,background,background-color]">
                                            <div className="absolute size-full flex items-center justify-center group-hover:translate-x-full transition-all">
                                                <div className="[&>svg]:size-6">{parse(box?.icon)}</div>
                                                <div className="absolute top-0 right-full size-full flex items-center justify-center">
                                                    <IconArrowRight />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cn(textVariants({ variant: content?.settings?.variant }))}>
                                        {box?.description}
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
