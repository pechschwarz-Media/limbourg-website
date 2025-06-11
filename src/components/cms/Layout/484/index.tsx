'use client';

import React, { useRef } from 'react';
import { Settings } from '@/lib/types';
//@ts-ignore
import { motion, MotionStyle, useScroll, useTransform } from 'framer-motion';
import { Section } from '@/components/static/Section/Section';
import { Tagline } from '@/components/ui/Tagline/Tagline';

type Content = {
    text: string;
    topline: string;
    settings: Settings;
};

export default function Layout_484(content: Content) {
    const headingRef = useRef<HTMLHeadingElement>(null);

    const { scrollYProgress } = useScroll({
        target: headingRef,
        offset: ['start 80%', 'end 40%'],
    });

    const words = content?.text?.split(' ');
    return (
        <Section
            dataComponent="Layout_484"
            settings={content?.settings}>
            <div className="container h-full flex justify-center flex-col">
                <Tagline className="text-center mb-theme-2xl">{content?.topline}</Tagline>
                <h3
                    ref={headingRef}
                    className="text-h2 mx-auto xl:max-w-[75%] font-medium text-center hyphens-auto lg:hyphens-none">
                    {words.map((word, index) => {
                        const start = index * 0.025;
                        const end = start + 0.025;
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                        return (
                            <React.Fragment key={index}>
                                <motion.span
                                    className="inline-block"
                                    style={{ opacity } as MotionStyle}>
                                    {word}
                                </motion.span>
                                {index < words?.length - 1 && ' '}
                            </React.Fragment>
                        );
                    })}
                </h3>
            </div>
        </Section>
    );
}
