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
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@relume_io/relume-ui';

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

type Faq3Props = {
    textblock: AcfTextBlock;
    faq: {
        category: string;
        questiones: { question: string; textleft_text: string; textright_text: string }[];
    }[];
    text: string;
    settings: Settings;
};

export default function Faq_3(content: Faq3Props) {
    const [openQuestions, setOpenQuestions] = useState<Record<string, number | null>>({});
    const toggleQuestion = (category: string, featureIndex: number) => {
        setOpenQuestions((prev) => ({
            ...prev,
            [category]: prev[category] === featureIndex ? null : featureIndex,
        }));
    };

    return (
        <Section
            dataComponent="Faq_3"
            settings={content?.settings}>
            <div className="container">
                <TextBlock
                    textblock={content?.textblock}
                    variant="light"
                />
                <Tabs
                    defaultValue={content.faq[0].category}
                    className="mt-20">
                    <TabsList className="mb-12 gap-6 overflow-x-auto whitespace-nowrap md:mb-16">
                        {content?.faq?.map((tab, index) => (
                            <TabsTrigger
                                key={index}
                                value={tab.category}
                                className="cursor-pointer font-base w-full md:w-auto justify-center items-center gap-x-theme-lg disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 bg-transparent text-text-primary border-0 border-black h-10 md:h-12 rounded-none px-theme-2xl rounded-md md:rounded-xl transition-all flex lg:inline-flex aria-selected:border">
                                {tab.category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {content?.faq?.map((tab, tabIndex) => (
                        <TabsContent
                            key={tabIndex}
                            value={tab.category}
                            className="data-[state=active]:animate-tabs divide-y divide-brand-gray">
                            {tab.questiones.map((feature, featureIndex) => {
                                const isOpen = openQuestions[tab.category] === featureIndex;

                                return (
                                    <div key={featureIndex}>
                                        <button
                                            aria-expanded={isOpen}
                                            onClick={() => toggleQuestion(tab.category, featureIndex)}
                                            aria-controls={`faq-panel-${tabIndex}-${featureIndex}`}
                                            id={`faq-button-${tabIndex}-${featureIndex}`}
                                            className="flex items-center justify-between gap-theme-3xl cursor-pointer w-full text-large text-left font-highlight py-theme-3xl">
                                            <div className="flex-1">{feature.question}</div>
                                            <div
                                                className="shrink"
                                                aria-hidden="true">
                                                <IconChevronDown
                                                    className={cn('size-5 transition-all', isOpen && 'rotate-180')}
                                                />
                                            </div>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    animate={{ height: 'auto' }}
                                                    exit={{ height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    role="region"
                                                    aria-labelledby={`faq-button-${tabIndex}-${featureIndex}`}
                                                    id={`faq-panel-${tabIndex}-${featureIndex}`}
                                                    className={cn(
                                                        answerVariants({ variant: content?.settings?.variant }),
                                                    )}>
                                                    <div className="pb-theme-3xl grid grid-cols-1 lg:grid-cols-2 gap-10">
                                                        <Wysiwyg text={feature.textleft_text} />
                                                        <Wysiwyg text={feature.textright_text} />
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </TabsContent>
                    ))}
                </Tabs>
                <Wysiwyg
                    text={content?.text}
                    className="text-regular lg:max-w-3xl mt-5 lg:mt-20"
                />
            </div>
        </Section>
    );
}
