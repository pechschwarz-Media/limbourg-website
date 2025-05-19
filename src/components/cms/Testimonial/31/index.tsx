'use client';

import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, ImageType, Settings } from '@/lib/types';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Dot from '@/components/icons/dot';
import { IconArrowRight } from '@/components/icons/IconArrowRight';
import { IconArrowLeft } from '@/components/icons/IconArrowLeft';

type TestimonialLogoQuoteName1Props = {
    textblock: AcfTextBlock;
    testimonials: {
        media: ImageType;
        title: string;
    }[];
    settings: Settings;
};

export default function Testimonial_31(content: TestimonialLogoQuoteName1Props) {
    const swiperRef = useRef<SwiperRef>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const container = useRef(null);

    return (
        <Section
            dataComponent="Testimonial_31"
            ref={container}
            settings={content?.settings}
            className="overflow-hidden">
            <div className="container">
                {(content?.textblock?.headline || content?.textblock?.text) && (
                    <TextBlock
                        variant={content?.settings?.variant}
                        textblock={content?.textblock}
                    />
                )}

                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView="auto"
                    ref={swiperRef}
                    onSlideChange={(swiper) => {
                        setCurrentIndex(swiper.activeIndex);
                    }}
                    className="!overflow-visible mt-9 lg:mt-14">
                    {content?.testimonials?.map((testimonial, index) => (
                        <SwiperSlide
                            key={index}
                            className="!w-3/4 lg:!w-1/3 mr-6 lg:mr-12">
                            <div className="">
                                <div className="w-full mb-4xl">
                                    <Image
                                        src={testimonial?.media?.url}
                                        alt={testimonial?.media?.alt}
                                        width={testimonial?.media?.width}
                                        height={testimonial?.media?.height}
                                        quality={100}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <h6 className="text-h6 font-headline mt-6 lg:text-center hyphens-auto lg:hyphens-none">
                                    {testimonial?.title}
                                </h6>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex items-center justify-between mt-4 lg:mt-8">
                    <div className="flex gap-2 lg:gap-4">
                        <button
                            onClick={() => {
                                if (swiperRef?.current) {
                                    swiperRef?.current?.swiper?.slidePrev();
                                }
                            }}
                            className={cn(
                                'rounded-full bg-neutral-300 p-1 lg:p-3',
                                currentIndex === 0 && 'opacity-50',
                            )}>
                            <IconArrowLeft className="text-white" />
                        </button>
                        <button
                            onClick={() => {
                                if (swiperRef?.current) {
                                    swiperRef?.current?.swiper?.slideNext();
                                }
                            }}
                            className={cn(
                                'rounded-full bg-neutral-300 p-1 lg:p-3',
                                currentIndex === content?.testimonials?.length - 1 && 'opacity-50',
                            )}>
                            <IconArrowRight className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
