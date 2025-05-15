import { Facebook } from '@/components/icons/Facebook';
import { LinkedIn } from '@/components/icons/LinkedIn';
import { Share } from '@/components/icons/Share';
import { X } from '@/components/icons/X';
import { PostProps } from '@/lib/types';
import React from 'react';

export default function ShareButtons({ post }: { post?: PostProps | null }) {
    const shareData = {
        title: post?.title?.rendered ?? '',
        url: post?.link ?? '',
    };
    const icons = [
        {
            name: '',
            icon: <Share />,
            url: '',
            isShare: true,
        },
        {
            name: 'LinkedIn',
            icon: <LinkedIn />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${post?.link}`,
            isShare: false,
        },
        {
            name: 'X (Twitter)',
            icon: <X />,
            url: `https://twitter.com/intent/tweet?url=${post?.link}`,
            isShare: false,
        },
        {
            name: 'Facebook',
            icon: <Facebook />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${post?.link}`,
            isShare: false,
        },
    ];

    const className =
        'flex size-8 items-center justify-center rounded-full bg-grey-light-200 p-1 text-foreground hover:text-primary';

    return (
        <div className="flex gap-2">
            {icons.map((item, i) => {
                if (item.isShare) {
                    if (
                        typeof window !== 'undefined' &&
                        'share' in window.navigator &&
                        window.navigator.canShare(shareData)
                    ) {
                        return (
                            <button
                                key={i}
                                className={className}
                                onClick={() => {
                                    window.navigator.share(shareData);
                                }}>
                                {item.icon}
                                <span className="sr-only">Den Beitrag teilen</span>
                            </button>
                        );
                    } else {
                        return null;
                    }
                }
                return (
                    <a
                        href={item.url}
                        className="bg-neutral-100 rounded-md size-8 p-1 flex items-center justify-center"
                        key={i}
                        target="_blank"
                        rel="noopener noreferrer">
                        {item.icon}
                        <span className="sr-only">Den Beitrag über {item.name} teilen!</span>
                    </a>
                );
            })}
        </div>
    );
}
