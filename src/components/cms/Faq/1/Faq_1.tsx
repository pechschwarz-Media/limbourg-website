'use client';

import { IconChevronDown } from '@/components/icons/IconChevronDown';
import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const wrapperVariants = cva('divide-y', {
    variants: {
        variant: {
            dark: 'divide-border-tertiary',
            light: 'divide-border-secondary',
            darkPrimary: 'divide-border-tertiary',
            lightPrimary: 'divide-border-secondary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const questionVariants = cva('', {
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

const answerVariants = cva('overflow-hidden', {
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

type Faq1Props = {
    textblock: AcfTextBlock;
    faq: {
        question: string;
        text: string;
    }[];
    settings: Settings;
};

export default function Faq_1(content: Faq1Props) {
    const [faqIndex, setFaqIndex] = useState<null | number>(null);

    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Faq_1"
            ref={container}
            settings={content?.settings}>
            <div className="container">
                <div className="grid lg:grid-cols-12 gap-x-theme-3xl gap-y-theme-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4">
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                        />
                    </motion.div>
                    <div className="lg:col-span-7 lg:col-start-6">
                        <div className={cn(wrapperVariants({ variant: content?.settings?.variant }))}>
                            {content?.faq?.map((item, index) => {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                        style={{ opacity: 0, y: 100 }}
                                        transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                        className={cn(
                                            questionVariants({ variant: content?.settings?.variant }),
                                            index === 0 && 'border-t',
                                            index === content?.faq?.length - 1 && 'border-b',
                                        )}
                                        key={index}>
                                        <button
                                            aria-expanded={faqIndex === index}
                                            onClick={() => {
                                                setFaqIndex(faqIndex === index ? null : index);
                                            }}
                                            aria-controls={`faq-panel-${index}`}
                                            id={`faq-button-${index}`}
                                            className="flex items-center justify-between gap-theme-3xl cursor-pointer w-full text-large text-left font-highlight py-theme-3xl">
                                            <div className="flex-1">{item?.question}</div>
                                            <div
                                                className="shrink"
                                                aria-hidden="true">
                                                <IconChevronDown
                                                    className={cn(
                                                        'size-5 transition-all',
                                                        faqIndex === index && 'rotate-180',
                                                    )}
                                                />
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {faqIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: 'auto' }}
                                                    exit={{ height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    role="region"
                                                    aria-labelledby={`faq-button-${index}`}
                                                    id={`faq-panel-${index}`}
                                                    className={cn(
                                                        answerVariants({ variant: content?.settings?.variant }),
                                                    )}>
                                                    <div className="pb-theme-3xl">
                                                        <Wysiwyg text={item?.text} />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
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
