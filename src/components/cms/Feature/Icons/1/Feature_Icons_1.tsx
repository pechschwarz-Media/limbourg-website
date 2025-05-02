'use client';

import { Section } from '@/components/static/Section/Section';
import { TextBlock, textVariants } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import parse from 'html-react-parser';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const gridVariants = cva('grid gap-x-theme-3xl', {
    variants: {
        grid: {
            3: 'md:grid-cols-3 gap-y-theme-3xl md:gap-y-theme-6xl',
            4: 'lg:grid-cols-4 gap-y-theme-3xl lg:gap-y-theme-6xl',
        },
    },
    defaultVariants: {
        grid: 3,
    },
});

type FeatureIcons1Props = {
    textblock: AcfTextBlock;
    icons: {
        icon: string;
        title: string;
        description: string;
    }[];
    grid: 3 | 4;
    settings: Settings;
};

export default function Feature_Icons_1(content: FeatureIcons1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Feature_Icons_1"
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
                    {content?.icons?.map((icon, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}>
                                <div className="[&>svg]:h-8 [&>svg]:w-auto [&>svg]:mb-theme-xl">
                                    {parse(icon?.icon)}
                                </div>
                                <div className="text-h6 leading-headline font-headline mb-theme-md">{icon?.title}</div>
                                <div
                                    className={cn(
                                        textVariants({ variant: content?.settings?.variant }),
                                        'leading-body',
                                    )}>
                                    {icon?.description}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
