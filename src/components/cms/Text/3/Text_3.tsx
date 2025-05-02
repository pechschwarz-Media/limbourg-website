'use client';

import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfHeadline, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const textGridVariants = cva('grid md:grid-cols-12 gap-theme-3xl', {
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

type Text3Props = {
    headline: AcfHeadline;
    text_left: string;
    text_right: string;
    settings: Settings;
};

export default function Text_3(content: Text3Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Text_3"
            ref={container}
            settings={content?.settings}>
            <div className="container space-y-theme-6xl md:space-y-theme-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    style={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}>
                    <Headline
                        headline={content?.headline}
                        classNameTagline="md:inline-block md:!mb-0 md:mr-theme-4xl"
                        className="md:inline"
                    />
                </motion.div>
                <div className={cn(textGridVariants({ variant: content?.settings?.variant }))}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-5 md:col-start-3 lg:col-span-3 lg:col-start-7">
                        <Wysiwyg text={content?.text_left} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-5 lg:col-span-3">
                        <Wysiwyg text={content?.text_right} />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
