'use client';

import { Section } from '@/components/static/Section/Section';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { PostPreview } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Blog_Card_1 from '../../Card/1/Blog_Card_1';
import { BlogTeaser1Props } from './Blog_Teaser_1';
import { Button } from '@/components/ui/Button/Button';
import { url } from 'inspector';

const textVariants = cva('w-full', {
    variants: {
        textAlign: {
            center: 'mx-auto text-center',
            left: '',
        },
    },
    defaultVariants: {
        textAlign: 'center',
    },
});

export default function Blog_Teaser_1_Inner({ content, posts }: { content: BlogTeaser1Props; posts: PostPreview[] }) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    return (
        <Section
            dataComponent="Blog_Teaser_1"
            ref={container}
            settings={content?.settings}>
            <div className="container space-y-theme-6xl lg:space-y-theme-7xl">
                {(content?.textblock?.headline?.headline || content?.textblock?.text) && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className={cn(textVariants({ textAlign: content?.textAlign }))}>
                        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between items-start lg:items-center">
                            <TextBlock
                                variant={content?.settings?.variant}
                                textblock={content?.textblock}
                            />
                            {content?.allposts && (
                                <Button
                                    as="link"
                                    variant="light"
                                    link={{ url: '/blog', title: '', target: '_self' }}>
                                    Alle Beiträge
                                </Button>
                            )}
                        </div>
                    </motion.div>
                )}
                <div className="grid md:grid-cols-3 gap-theme-3xl">
                    {posts?.map((post, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}>
                                <Blog_Card_1
                                    variant={content?.settings?.variant}
                                    post={post}
                                    showAuthor={content?.showAuthor}
                                    showButton={content?.showButton}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
