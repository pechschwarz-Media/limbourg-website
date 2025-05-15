'use client';

import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { AcfHeadline, Settings } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import dateFormat, { masks } from 'dateformat';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { Rating_3 } from '@/components/ui/Rating/3/Rating_3';

type ReviewsProps = {
    headline: AcfHeadline;
    reviews: { date: number; text: string; author: string }[];
    settings: Settings;
};

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

export default function Reviewsgrid(content: ReviewsProps) {
    const container = useRef(null);
    const isInView = useInView(container, {
        once: true,
    });

    const sliptLength = Math.ceil(content?.reviews?.length / 3);
    const firstBracket = content?.reviews.slice(0, sliptLength);
    const secondBracket = content?.reviews.slice(sliptLength, sliptLength * 2);
    const thirdBracket = content?.reviews.slice(sliptLength * 2, sliptLength * 3);

    return (
        <>
            <Section
                dataComponent="Reviewsgrid"
                ref={container}
                settings={content?.settings}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl mx-auto">
                        <Headline
                            headline={content?.headline}
                            className="text-center"
                            classNameTagline="text-center"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.8 }}
                        className="">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5 }}>
                                <div className="flex flex-col gap-6 lg:mt-20">
                                    {firstBracket?.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-neutral-100 p-8 rounded-md">
                                            <div className="mb-4">{dateFormat(item.date, 'mmmm dd,yyyy')}</div>
                                            <Wysiwyg
                                                text={item?.text}
                                                className="font-medium"
                                            />
                                            <div className="flex items-center mt-12 gap-2">
                                                <div className="flex-shrink-0">
                                                    <Rating_3 />
                                                </div>
                                                <p className="">{item.author}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.8 }}>
                                <div className="flex flex-col gap-6">
                                    {secondBracket?.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-neutral-100 p-8 rounded-md">
                                            <div className="mb-4">{dateFormat(item.date, 'mmmm dd,yyyy')}</div>
                                            <Wysiwyg
                                                text={item?.text}
                                                className="font-medium"
                                            />
                                            <div className="flex items-center mt-12 gap-2">
                                                <div className="flex-shrink-0">
                                                    <Rating_3 />
                                                </div>
                                                <p className="">{item.author}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 1 }}>
                                <div className="flex flex-col gap-6 lg:mt-20">
                                    {thirdBracket?.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-neutral-100 p-8 rounded-md">
                                            <div className="mb-4">{dateFormat(item.date, 'mmmm dd,yyyy')}</div>
                                            <Wysiwyg
                                                text={item?.text}
                                                className="font-medium"
                                            />
                                            <div className="flex items-center mt-12 gap-2">
                                                <div className="flex-shrink-0">
                                                    <Rating_3 />
                                                </div>
                                                <p className="">{item.author}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
