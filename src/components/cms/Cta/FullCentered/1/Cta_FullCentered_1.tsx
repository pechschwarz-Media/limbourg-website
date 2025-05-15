'use client';

import { Section } from '@/components/static/Section/Section';
import { Rating_1 } from '@/components/ui/Rating/1/Rating_1';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { AcfTextBlock, Settings } from '@/lib/types';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const boxVariants = cva(
    'relative overflow-hidden rounded-md px-theme-3xl py-theme-7xl md:p-theme-7xl space-y-theme-6xl lg:p-theme-9xl',
    {
        variants: {
            variant: {
                dark: 'bg-neutral-800',
                light: 'bg-neutral-100',
                darkPrimary: 'bg-brand-primary-800',
                lightPrimary: 'bg-brand-primary-100',
            },
        },
        defaultVariants: {
            variant: 'light',
        },
    },
);

type CtaHalfHorizontal1Props = {
    textblock: AcfTextBlock;
    settings: Settings;
};

export default function Cta_FullCentered_1(content: CtaHalfHorizontal1Props) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Cta_FullCentered_1"
            ref={container}
            settings={content?.settings}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                    style={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className={boxVariants({
                        variant: content?.settings?.variant,
                    })}>
                    <div className="absolute hidden lg:block left-0 top-0 bottom-0 m-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 261 517"
                            fill="none">
                            <path
                                d="M212.417 -63.4043L209.944 -62.7117L65.5808 171.083L148.3 340.271L151.169 338.984C171.75 310.688 196.784 284.37 215.287 254.688C268.025 169.698 279.602 45.0339 226.468 -42.429C222.114 -49.6516 216.375 -55.9838 212.417 -63.4043ZM-106.982 493.43C-89.1712 461.967 -68.4915 430.702 -60.081 394.885C-48.999 347.988 -60.3778 310.292 -83.4323 269.825L-290.428 -62.217C-364.143 31.8749 -350.39 176.525 -283.7 270.617C-230.467 345.712 -164.766 415.663 -110.544 490.461L-107.081 493.43H-106.982ZM103.18 608.596C159.58 580.398 193.617 513.02 170.563 451.578C168.287 445.444 164.23 440.002 162.35 433.67L46.1873 201.359C6.70776 273.189 -54.8369 361.741 -4.67105 443.96L103.18 608.596ZM-223.342 396.073C-231.654 417.84 -246.298 437.331 -252.73 459.889C-269.352 518.956 -235.909 579.705 -183.566 607.112L-125.979 519.055L-223.342 396.073Z"
                                fill="#DADADD"
                                fillOpacity="0.4"
                            />
                        </svg>
                    </div>
                    <div className="absolute inset-0 lg:inset-auto lg:right-0 lg:top-0 lg:bottom-0 m-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            viewBox="0 0 283 517"
                            fill="none">
                            <path
                                d="M552.417 -63.4043L549.944 -62.7117L405.581 171.083L488.3 340.271L491.169 338.984C511.75 310.688 536.784 284.37 555.287 254.688C608.025 169.698 619.602 45.0339 566.468 -42.429C562.114 -49.6516 556.375 -55.9838 552.417 -63.4043ZM233.018 493.43C250.829 461.967 271.509 430.702 279.919 394.885C291.001 347.988 279.622 310.292 256.568 269.825L49.572 -62.217C-24.1431 31.8749 -10.3895 176.525 56.3003 270.617C109.533 345.712 175.234 415.663 229.456 490.461L232.919 493.43H233.018ZM443.18 608.596C499.58 580.398 533.617 513.02 510.563 451.578C508.287 445.444 504.23 440.002 502.35 433.67L386.187 201.359C346.708 273.189 285.163 361.741 335.329 443.96L443.18 608.596ZM116.658 396.073C108.346 417.84 93.702 437.331 87.2705 459.889C70.6475 518.956 104.091 579.705 156.434 607.112L214.021 519.055L116.658 396.073Z"
                                fill="#DADADD"
                                fillOpacity="0.4"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto text-center space-y-theme-3xl">
                        <Rating_1 />
                        <TextBlock
                            variant={content?.settings?.variant}
                            textblock={content?.textblock}
                            center={true}
                        />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
