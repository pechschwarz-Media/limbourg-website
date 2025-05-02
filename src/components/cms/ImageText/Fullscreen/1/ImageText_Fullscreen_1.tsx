'use client';

import { Section } from '@/components/static/Section/Section';
import { Media } from '@/components/ui/Media/Media';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfMedia, AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const sectionVariants = cva('relative', {
    variants: {
        fullheight: {
            true: 'h-screen',
            false: '',
        },
    },
    defaultVariants: {
        fullheight: true,
    },
});

const overlayVariants = cva('absolute inset-0 z-10', {
    variants: {
        variant: {
            dark: 'bg-neutral-950',
            light: 'bg-neutral-25',
            darkPrimary: 'bg-brand-primary-950',
            lightPrimary: 'bg-brand-primary-25',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const containerVariants = cva('container h-full flex', {
    variants: {
        textAlign: {
            left: '',
            center: 'justify-center text-center',
        },
        align: {
            top: 'items-start',
            center: 'items-center',
            bottom: 'items-end',
        },
    },
    defaultVariants: {
        textAlign: 'left',
        align: 'center',
    },
});

type ImageTextFullscreen1Props = {
    textblock: AcfTextBlock;
    media: AcfMedia;
    opacity: number;
    textAlign: VariantProps<typeof containerVariants>['textAlign'];
    align: VariantProps<typeof containerVariants>['align'];
    fullheight: VariantProps<typeof sectionVariants>['fullheight'];
    settings: Settings;
};

export default function ImageText_Fullscreen_1(content: ImageTextFullscreen1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="ImageText_Fullscreen_1"
            ref={container}
            settings={content?.settings}
            className={cn(sectionVariants({ fullheight: content?.fullheight }))}>
            <div
                className={overlayVariants({ variant: content?.settings?.variant })}
                style={{ opacity: `${content.opacity}%` }}></div>
            <div className="absolute inset-0">
                <Media
                    media={content?.media}
                    className="size-full object-cover"
                />
            </div>
            <div className="relative h-full z-20">
                <div className={cn(containerVariants({ textAlign: content?.textAlign, align: content?.align }))}>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-xl">
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                            center={content?.textAlign === 'center' ? true : false}
                        />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
