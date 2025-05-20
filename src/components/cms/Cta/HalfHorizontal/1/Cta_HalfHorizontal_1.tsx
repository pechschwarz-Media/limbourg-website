'use client';

import { IconCheck } from '@/components/icons/IconCheck';
import { ButtonGroup, ButtonGroupProps } from '@/components/static/ButtonGroup/ButtonGroup';
import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { Rating_2 } from '@/components/ui/Rating/2/Rating_2';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfHeadline, AcfMedia, Options, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const boxVariants = cva('rounded-md p-theme-3xl space-y-theme-3xl lg:p-theme-6xl h-full flex flex-col', {
    variants: {
        variant: {
            dark: 'bg-neutral-800',
            light: 'bg-neutral-100',
            darkPrimary: 'bg-brand-primary-800',
            lightPrimary: 'bg-brand-primary-100',
        },
        verticalAlign: {
            top: 'justify-between',
            center: 'justify-center',
            bottom: 'justify-end',
        },
        textAlign: {
            left: '',
            center: 'items-center text-center',
        },
    },
    defaultVariants: {
        variant: 'light',
        verticalAlign: 'top',
        textAlign: 'left',
    },
});

const textVariants = cva('', {
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

type CtaHalfHorizontal1Props = {
    headline: AcfHeadline;
    text: string;
    list: {
        text: string;
    }[];
    buttons: ButtonGroupProps['buttons'];
    media: AcfMedia;
    verticalAlign: 'top' | 'center' | 'bottom';
    textAlign: 'left' | 'center';
    settings: Settings;
    options: Options;
};

export default function Cta_HalfHorizontal_1(content: CtaHalfHorizontal1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Cta_HalfHorizontal_1"
            ref={container}
            settings={content?.settings}>
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-theme-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7">
                        <div
                            className={boxVariants({
                                variant: content?.settings?.variant,
                                verticalAlign: content?.verticalAlign,
                                textAlign: content?.textAlign,
                            })}>
                            <div className="max-w-xl space-y-theme-3xl">
                                <Headline headline={content?.headline} />
                                {content?.text && (
                                    <Wysiwyg
                                        text={content?.text}
                                        className={cn(textVariants({ variant: content?.settings?.variant }))}
                                    />
                                )}
                                {content?.list?.length > 0 && (
                                    <ul
                                        className={cn(
                                            'space-y-theme-md',
                                            textVariants({ variant: content?.settings?.variant }),
                                        )}>
                                        {content?.list?.map((item, index) => {
                                            return (
                                                <li
                                                    className="inline-flex items-center gap-x-theme-md"
                                                    key={index}>
                                                    <span className="flex items-center justify-center size-6 rounded-full bg-brand-secondary-300 border border-brand-secondary-400">
                                                        <IconCheck className="size-4 text-brand-black" />
                                                    </span>
                                                    {item?.text}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                                {content?.buttons?.length > 0 && (
                                    <ButtonGroup
                                        buttons={content?.buttons}
                                        className={cn(content?.textAlign === 'center' && 'justify-center')}
                                    />
                                )}
                            </div>
                            <Rating_2 options={content?.options} />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-5 rounded-md overflow-hidden">
                        <Media
                            media={content?.media}
                            className="block aspect-[16/9] lg:aspect-square size-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
