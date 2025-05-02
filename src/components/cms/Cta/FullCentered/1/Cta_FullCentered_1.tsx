'use client';

import { Section } from '@/components/static/Section/Section';
import { Rating_1 } from '@/components/ui/Rating/1/Rating_1';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const boxVariants = cva('rounded-md px-theme-3xl py-theme-7xl md:p-theme-7xl space-y-theme-6xl lg:p-theme-9xl', {
    variants: {
        variant: {
            dark: 'bg-neutral-800',
            light: 'bg-neutral-100',
            darkPrimary: 'bg-brand-primary-800',
            lightPrimary: 'bg-brand-primary-100',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

type CtaHalfHorizontal1Props = {
    textblock: AcfTextBlock;
    settings: Settings;
};

export default function Cta_FullCentered_1(content: CtaHalfHorizontal1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Cta_FullCentered_1"
            ref={container}
            settings={content?.settings}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    style={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className={boxVariants({
                        variant: content?.settings?.variant,
                    })}>
                    <div className="max-w-2xl mx-auto text-center space-y-theme-3xl">
                        <Rating_1 variant={content?.settings?.variant} />
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                            center={true}
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
