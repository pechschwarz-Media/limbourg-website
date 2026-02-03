'use client';

import { AcfFile } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

type MediaProps = {
    media: {
        media: AcfFile | false;
        media_mobile: AcfFile | false;
    };
    className?: string;
    controls?: false | boolean;
    loading?: 'lazy' | 'eager' | undefined;
};

export function Media(content: MediaProps) {
    const [mounted, setMounted] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 63.9375rem)' }); // < 1024px (lg breakpoint)

    useEffect(() => {
        setMounted(true);
    }, []);

    const hasMobileMedia = !!content?.media?.media_mobile;
    const showDesktop = !mounted || !hasMobileMedia || !isMobile;
    const showMobile = mounted && hasMobileMedia && isMobile;

    return (
        <>
            {/* Desktop Media */}
            {showDesktop && content?.media?.media && content?.media?.media?.type === 'image' && (
                <Image
                    src={content?.media?.media?.url}
                    alt={content?.media?.media?.alt}
                    width={content?.media?.media?.width}
                    height={content?.media?.media?.height}
                    className={cn(content?.className, !mounted && hasMobileMedia && 'hidden lg:block')}
                    quality={100}
                    loading={content?.loading || 'lazy'}
                />
            )}
            {showDesktop && content?.media?.media && content?.media?.media?.type === 'video' && (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={content?.controls === false ? false : true}
                    className={cn(content?.className, !mounted && hasMobileMedia && 'hidden lg:block')}>
                    <source src={content?.media?.media?.url} />
                </video>
            )}

            {/* Mobile Media - nur geladen wenn wirklich auf Mobile */}
            {showMobile && content?.media?.media_mobile && content.media.media_mobile.type === 'image' && (
                <Image
                    src={content.media.media_mobile.url}
                    alt={content.media.media_mobile.alt}
                    width={content.media.media_mobile.width}
                    height={content.media.media_mobile.height}
                    className={content?.className}
                />
            )}
            {showMobile && content?.media?.media_mobile && content.media.media_mobile.type === 'video' && (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={content?.controls === false ? false : true}
                    className={content?.className}>
                    <source src={content.media.media_mobile.url} />
                </video>
            )}
        </>
    );
}
