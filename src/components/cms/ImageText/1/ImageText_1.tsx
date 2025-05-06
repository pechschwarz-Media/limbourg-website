'use client';

import { Section } from '@/components/static/Section/Section';
import { Media } from '@/components/ui/Media/Media';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfMedia, AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const gridVariants = cva('grid lg:grid-cols-12 gap-x-theme-3xl gap-y-theme-6xl', {
    variants: {
        verticalAlign: {
            center: 'items-center',
            bottom: 'items-end',
            top: 'items-start',
        },
    },
    defaultVariants: {
        verticalAlign: 'top',
    },
});

const textWrapperVariants = cva('lg:col-span-4', {
    variants: {
        switchOrder: {
            true: 'lg:order-2',
            false: '',
        },
        imageSize: {
            large: 'lg:col-span-4',
            medium: 'lg:col-span-5',
        },
    },
    compoundVariants: [
        {
            switchOrder: true,
            imageSize: 'large',
            class: 'lg:col-start-9',
        },
        {
            switchOrder: true,
            imageSize: 'medium',
            class: 'lg:col-start-8',
        },
    ],
    defaultVariants: {
        switchOrder: false,
        imageSize: 'large',
    },
});

const imageWrapperVariants = cva('lg:col-span-7', {
    variants: {
        switchOrder: {
            true: 'lg:order-1',
            false: 'lg:col-start-6',
        },
        imageSize: {
            large: 'lg:col-span-7',
            medium: 'lg:col-span-6',
        },
    },
    compoundVariants: [
        {
            switchOrder: false,
            imageSize: 'large',
            class: 'lg:col-start-6',
        },
        {
            switchOrder: false,
            imageSize: 'medium',
            class: 'lg:col-start-7',
        },
    ],
    defaultVariants: {
        switchOrder: false,
        imageSize: 'large',
    },
});

type ImageText1Props = {
    textblock: AcfTextBlock;
    media: AcfMedia;
    verticalAlign: 'top' | 'center' | 'bottom';
    switchOrder: boolean;
    imageSize: 'large' | 'medium';
    settings: Settings;
};

export default function ImageText_1(content: ImageText1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="ImageText_1"
            ref={container}
            settings={content?.settings}>
            <div className="container">
                <div className={cn(gridVariants({ verticalAlign: content?.verticalAlign }))}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                            textWrapperVariants({ switchOrder: content?.switchOrder, imageSize: content?.imageSize }),
                        )}>
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isInView ? 1 : 0 }}
                        style={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={cn(
                            imageWrapperVariants({ switchOrder: content?.switchOrder, imageSize: content?.imageSize }),
                            'overflow-hidden rounded-md',
                        )}>
                        <motion.div
                            initial={{ scale: 1.2 }}
                            animate={{ scale: isInView ? 1 : 1.2 }}
                            style={{ scale: 1.2 }}
                            transition={{ duration: 1 }}>
                            <Media
                                media={content?.media}
                                className="size-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
