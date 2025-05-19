import { AcfFile } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type MediaProps = {
    media: {
        media: AcfFile | false;
        media_mobile: AcfFile | false;
    };
    className?: string;
};

export function Media(content: MediaProps) {
    return (
        <>
            {content?.media?.media && content?.media?.media?.type === 'image' && (
                <Image
                    src={content?.media?.media?.url}
                    alt={content?.media?.media?.alt}
                    width={content?.media?.media?.width}
                    height={content?.media?.media?.height}
                    className={cn(content?.className, content?.media?.media_mobile && 'hidden sm:block')}
                    quality={100}
                />
            )}
            {content?.media?.media && content?.media?.media?.type === 'video' && (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={true}
                    className={cn(content?.className, content?.media?.media_mobile && 'hidden sm:block')}>
                    <source src={content?.media?.media?.url} />
                </video>
            )}
            {content?.media?.media_mobile && content?.media?.media_mobile?.type === 'image' && (
                <Image
                    src={content?.media?.media_mobile?.url}
                    alt={content?.media?.media_mobile?.alt}
                    width={content?.media?.media_mobile?.width}
                    height={content?.media?.media_mobile?.height}
                    className={cn(content?.className, 'sm:hidden')}
                />
            )}
            {content?.media?.media_mobile && content?.media?.media_mobile?.type === 'video' && (
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={true}
                    className={cn(content?.className, 'sm:hidden')}>
                    <source src={content?.media?.media_mobile?.url} />
                </video>
            )}
        </>
    );
}
