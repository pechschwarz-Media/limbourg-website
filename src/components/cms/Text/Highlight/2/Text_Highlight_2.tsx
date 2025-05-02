'use client';

import { Section } from '@/components/static/Section/Section';
import { Tagline } from '@/components/ui/Tagline/Tagline';
import { AcfFile, Settings } from '@/lib/types';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import React, { useRef } from 'react';

type TextHighlight2Props = {
    tagline: string;
    text: {
        text: string;
        image: AcfFile;
    }[];
    settings: Settings;
};

export default function Text_Highlight_1(content: TextHighlight2Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Text_Highlight_2"
            ref={container}
            settings={content?.settings}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    style={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto">
                    <Tagline className="my-theme-3xl lg:my-theme-4xl">{content?.tagline}</Tagline>
                    <h2 className="text-h0 font-headline leading-headline inline-block">
                        {content?.text?.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {item?.text && item?.text}
                                    {item?.image?.url && (
                                        <Image
                                            src={item?.image?.url}
                                            alt={item?.image?.alt}
                                            height={item?.image?.height}
                                            width={item?.image?.width}
                                            className="mx-theme-md lg:mx-theme-3xl align-middle inline rounded-full size-theme-6xl lg:size-theme-8xl"
                                        />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </h2>
                </motion.div>
            </div>
        </Section>
    );
}
