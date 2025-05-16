'use client';

import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

type TextFeatures1Props = {
    textblock: AcfTextBlock;
    settings: Settings;
    features: {
        tagline: string;
        text: string;
    }[];
};

const featureVariants = cva('border-t pt-theme-3xl', {
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

export default function Text_Feature_1(content: TextFeatures1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Text_Features_1"
            ref={container}
            settings={content?.settings}>
            <div className="container space-y-theme-6xl lg:space-y-theme-8xl">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    style={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl">
                    <TextBlock
                        variant={content?.settings?.variant}
                        textblock={content?.textblock}
                    />
                </motion.div>
                {content?.features && (
                    <div className="grid gap-theme-xl lg:gap-theme-3xl lg:auto-cols-fr lg:grid-flow-col">
                        {content?.features?.map((feature, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                    style={{ opacity: 0, y: 100 }}
                                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                    className={cn(featureVariants({ variant: content?.settings?.variant }))}>
                                    <Headline
                                        headline={{
                                            tagline: feature?.tagline,
                                            style: 'h5',
                                            tag: 'h5',
                                            headline: feature?.text,
                                        }}
                                        className="-mt-theme-xs"
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                )}
            </div>
        </Section>
    );
}
