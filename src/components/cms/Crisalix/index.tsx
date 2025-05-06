'use client';

import { IconClose } from '@/components/icons/IconClose';
import { IconPlay } from '@/components/icons/IconPlay';
import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Media } from '@/components/ui/Media/Media';
import { Rating_2 } from '@/components/ui/Rating/2/Rating_2';
import { AcfFile, AcfHeadline, AcfMedia, Settings } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

type CrisalixContent = {
    settings: Settings;
};

export default function Hero_Fullscreen_1(content: CrisalixContent) {
    return (
        <>
            <Section
                dataComponent="Hero_Fullscreen_1"
                settings={content?.settings}>
                <div className="container">
                    <div className="crisalix_widget_wrap_6ec074e3">
                        <script
                            type="text/javascript"
                            src="https://pro.crisalix.com/reviews_widget.js?token=208177cba0bbb2e6adc0dff6f8bc9812&type=review_grid_carousel&selector=crisalix_widget_wrap_6ec074e3"
                            async></script>
                    </div>
                </div>
            </Section>
        </>
    );
}
