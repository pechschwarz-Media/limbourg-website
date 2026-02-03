'use client';

import { Facebook } from '@/components/icons/Facebook';
import { LinkedIn } from '@/components/icons/LinkedIn';
import { Share } from '@/components/icons/Share';
import { X } from '@/components/icons/X';
import { PostProps } from '@/lib/types';
import React, { useState, useEffect } from 'react';

export default function ShareButtons({ post }: { post?: PostProps | null }) {
    const [canNativeShare, setCanNativeShare] = useState(false);

    const shareData = {
        title: post?.title?.rendered ?? '',
        url: post?.link ?? '',
    };

    useEffect(() => {
        // Prüfe Web Share API erst nach dem Mounting auf dem Client
        const data = {
            title: post?.title?.rendered ?? '',
            url: post?.link ?? '',
        };
        if ('share' in navigator && navigator.canShare?.(data)) {
            setCanNativeShare(true);
        }
    }, [post?.title?.rendered, post?.link]);

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
                    // Rendere den Share-Button nur wenn die Web Share API verfügbar ist
                    if (!canNativeShare) {
                        return null;
                    }
                    return (
                        <button
                            key={i}
                            className={className}
                            onClick={() => {
                                navigator.share(shareData);
                            }}>
                            {item.icon}
                            <span className="sr-only">Den Beitrag teilen</span>
                        </button>
                    );
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
