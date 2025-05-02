'use client';

import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, Settings } from '@/lib/types';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Bento_Card_Outside_1, { BentoCardOutsite1Props } from '../../../Card/Outside/1/Bento_Card_Outside_1';

type BentoGridOutside1Props = {
    textblock: AcfTextBlock;
    bentos: BentoCardOutsite1Props[];
    settings: Settings;
};

export default function Bento_Grid_Outside_1(content: BentoGridOutside1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Bento_Grid_Outside_1"
            ref={container}
            settings={content?.settings}>
            <div className="container space-y-theme-7xl">
                {(content?.textblock?.headline?.headline || content?.textblock?.text) && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl">
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                        />
                    </motion.div>
                )}
                <div className="grid grid-cols-6 gap-theme-3xl">
                    {content?.bentos?.map((bento, index) => {
                        return (
                            <Bento_Card_Outside_1
                                key={index}
                                media={bento?.media}
                                textblock={bento?.textblock}
                                button={bento?.button}
                                variant={content?.settings?.variant}
                                textAlign={bento?.textAlign}
                                size={bento?.size}
                            />
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
