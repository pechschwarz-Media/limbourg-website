'use client';

import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfFile, AcfTextBlock, Settings, Variant } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView, useMotionValueEvent, useScroll } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const cardVariants = cva('border opacity-30 rounded-xl space-y-theme-3xl p-theme-4xl transition-all duration-500', {
    variants: {
        variant: {
            dark: 'border-border-secondary',
            light: 'border-border-tertiary',
            darkPrimary: 'border-border-secondary',
            lightPrimary: 'border-border-tertiary',
        },
        active: {
            true: 'opacity-100',
            false: '',
        },
    },
    compoundVariants: [
        {
            variant: 'light',
            active: true,
            class: 'border-neutral-100 bg-neutral-100',
        },
        {
            variant: 'dark',
            active: true,
            class: 'border-neutral-800 bg-neutral-800',
        },
        {
            variant: 'darkPrimary',
            active: true,
            class: 'border-brand-primary-800 bg-brand-primary-800',
        },
        {
            variant: 'lightPrimary',
            active: true,
            class: 'border-brand-primary-100 bg-brand-primary-100',
        },
    ],
    defaultVariants: {
        variant: 'light',
        active: false,
    },
});

type Card = {
    icon: AcfFile;
    title: string;
    text: string;
};

type FeatureIconsSliderVertical1Props = {
    textblock: AcfTextBlock;
    cards: Card[];
    settings: Settings;
};

export default function Feature_IconsSliderVertical_1(content: FeatureIconsSliderVertical1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Feature_IconsSliderVertical_1"
            ref={container}
            settings={content?.settings}>
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-x-theme-3xl gap-y-theme-6xl">
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                            style={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5 }}
                            className="sticky top-0">
                            <TextBlock
                                variant={content?.settings?.variant}
                                textblock={content?.textblock}
                            />
                        </motion.div>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7">
                        <div className="space-y-theme-4xl">
                            {content?.cards?.map((card, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                        style={{ opacity: 0, y: 100 }}
                                        transition={{ duration: 0.1 * (index + 1) }}>
                                        <IconsSliderVerticalCard
                                            key={index}
                                            card={card}
                                            variant={content?.settings?.variant}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

function IconsSliderVerticalCard({ variant, card }: { variant: Variant; card: Card }) {
    const cardRef = useRef(null);

    const [active, setActive] = useState(false);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start 30vh', 'end -100vh'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (val) => {
        if (val > 0) {
            setActive(true);
        } else {
            setActive(false);
        }
    });

    return (
        <div
            ref={cardRef}
            className={cn(cardVariants({ variant, active }))}>
            <Image
                src={card?.icon?.url}
                alt={card?.icon?.alt}
                width={card?.icon?.width}
                height={card?.icon?.height}
                className="h-10 w-auto"
            />
            <div className="space-y-theme-md max-w-md">
                <Headline
                    headline={{
                        tag: 'h6',
                        style: 'h6',
                        headline: card?.title,
                        tagline: '',
                    }}
                />
                <Wysiwyg text={card?.text} />
            </div>
        </div>
    );
}
