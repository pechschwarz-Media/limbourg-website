'use client';

import { Section } from '@/components/static/Section/Section';
import { Media } from '@/components/ui/Media/Media';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfMedia, AcfTextBlock, Settings, Variant } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { MotionValue, motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const boxVariants = cva('sticky top-14 md:top-20 origin-center rounded-2xl overflow-hidden', {
    variants: {
        variant: {
            dark: 'bg-neutral-900 text-text-alternate',
            light: 'bg-neutral-100 text-text-primary',
            darkPrimary: 'bg-brand-primary-900 text-text-alternate',
            lightPrimary: 'bg-brand-primary-100 text-text-primary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const textVariants = cva('p-theme-3xl order-3', {
    variants: {
        switch: {
            true: 'md:order-4',
            false: 'md:order-1',
        },
    },
    defaultVariants: {
        switch: false,
    },
});

type Text = {
    textblock: AcfTextBlock;
    media: AcfMedia;
};

type ImageText1Props = {
    textblock: AcfTextBlock;
    texts: Text[];
    offset: boolean;
    settings: Settings;
};

export default function ImageText_3(content: ImageText1Props) {
    const container = useRef(null);
    const wrapper = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    const { scrollYProgress } = useScroll({
        target: wrapper,
        offset: ['start start', 'end start'],
    });

    return (
        <Section
            dataComponent="ImageText_3"
            ref={container}
            settings={content?.settings}>
            <div className="container space-y-theme-6xl lg:space-y-theme-8xl">
                {(content?.textblock?.headline?.headline || content?.textblock?.text) && (
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}>
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                            center={true}
                        />
                    </motion.div>
                )}

                <div
                    className="space-y-theme-3xl lg:space-y-theme-7xl"
                    ref={wrapper}>
                    {content?.texts?.map((text, index) => {
                        return (
                            <TextImageBlock
                                key={index}
                                index={index}
                                total={content?.texts?.length}
                                text={text}
                                variant={content?.settings?.variant}
                                offset={content?.offset}
                                progress={scrollYProgress}
                                isInView={isInView}
                            />
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}

function TextImageBlock({
    index,
    total,
    progress,
    text,
    variant,
    offset,
    isInView,
}: {
    index: number;
    total: number;
    progress: MotionValue;
    text: Text;
    variant: Variant;
    offset: boolean;
    isInView: boolean;
}) {
    const component = useRef(null);

    const start = index + 1 === total ? 1 : index / total;
    const end = index + 1 === total ? 2 : (1 / total) * (index + 1);

    const size = useTransform(progress, [start, end], [1, 0.7]);

    return (
        <motion.div
            className={cn(boxVariants({ variant }))}
            style={{ scale: size }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            ref={component}>
            <div className="grid md:grid-cols-2 gap-x-theme-3xl items-center">
                <div className={cn(textVariants({ switch: offset && index % 2 !== 0 }))}>
                    <div className="md:max-w-md mx-auto">
                        <TextBlock
                            variant={variant}
                            textblock={text?.textblock}
                        />
                    </div>
                </div>
                <div className="p-theme-lg h-full order-2">
                    <Media
                        media={text?.media}
                        className="rounded-2xl h-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
}
