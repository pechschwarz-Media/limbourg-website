'use client';

import { Section } from '@/components/static/Section/Section';
import { Button } from '@/components/ui/Button/Button';
import { Headline } from '@/components/ui/Headline/Headline';
import { Loader } from '@/components/ui/Loader/Loader';
import { TextBlock } from '@/components/ui/TextBlock/TextBlock';
import { Category, PostPreview } from '@/lib/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useInView as useIntersectionObserverInView } from 'react-intersection-observer';
import useSWR from 'swr';
import Blog_Card_1 from '../../Card/1/Blog_Card_1';
import Blog_Card_Large_1 from '../../Card/Large/1/Blog_Card_Large_1';
import parse from 'html-react-parser';

const textVariants = cva('max-w-lg', {
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

export default function Blog_Overview_1_Inner({
    content,
    categories,
    posts,
    posttype,
    amount,
    category,
    total,
}: {
    content: any;
    categories: Category[];
    posts: PostPreview[];
    posttype: string;
    amount: number;
    category: number[];
    total: string;
}) {
    const container = useRef(null);

    const isInView = useInView(container, {
        once: true,
    });

    const [prevCategory, setPrevCategory] = useState<false | number>(false);
    const [currentCategory, setCurrentCategory] = useState<false | number>(false);

    const {
        ref: loader,
        inView,
        entry,
    } = useIntersectionObserverInView({
        threshold: 1,
        rootMargin: '0% 0% 0% 0%',
    });

    const [init, setInit] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState(posts);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(parseInt(total));

    const { data, isLoading } = useSWR<{ posts: PostPreview[]; headers: Headers }>(
        init
            ? `wp/v2/content?posttype=${posttype}&per_page=${amount}&category=${
                  currentCategory ? currentCategory : category ? category.join(',') : ''
              }&page=${page}`
            : null,
        async (url: string) => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`);
            const posts = await response.json();
            const headers = response.headers;

            return { posts, headers };
        },
    );

    useEffect(() => {
        if (data) {
            const totalPages = data.headers.get('x-wp-totalpages');

            if (totalPages) {
                setTotalPages(parseInt(totalPages));
            }

            const categoryChanged = prevCategory !== currentCategory;

            if (categoryChanged) {
                setFetchedPosts(data.posts);
            } else {
                setFetchedPosts((prev) => [...prev, ...data.posts]);
            }

            setPrevCategory(currentCategory);
        }
    }, [data, currentCategory]);

    function loadMore() {
        setInit(true);
        setPage((value) => value + 1);
    }

    return (
        <Section
            dataComponent="Blog_Overview_1_Inner"
            ref={container}
            settings={content?.settings}>
            <div className="container space-y-theme-6xl">
                <div className="space-y-theme-6xl">
                    {(content?.textblock?.headline?.headline || content?.textblock?.text) && (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                            style={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5 }}
                            className={cn(textVariants({ textAlign: content?.textAlign }))}>
                            <TextBlock
                                variant={content?.settings?.variant}
                                textblock={content?.textblock}
                            />
                        </motion.div>
                    )}
                </div>
                <div className="space-y-theme-6xl">
                    <div className="space-y-theme-3xl">
                        {category?.length === 0 && (
                            <motion.nav
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                                style={{ opacity: 0, y: 100 }}
                                transition={{ duration: 0.5, delay: 0.3 }}>
                                <ul className="flex flex-row overflow-auto items-center gap-theme-xl">
                                    <li>
                                        <button
                                            className={cn(
                                                'cursor-pointer text-nowrap py-theme-sm px-theme-lg rounded-md  text-secondary text-small text-primary hover:text-text-primary transition-all duration-400',
                                                currentCategory === false && 'text-text-primary border border-primary',
                                            )}
                                            onClick={() => {
                                                setInit(true);
                                                setPage(1);
                                                setCurrentCategory(false);
                                            }}>
                                            Alle Beiträge
                                        </button>
                                    </li>
                                    {categories?.map((category, index) => {
                                        return (
                                            <li key={index}>
                                                <button
                                                    className={cn(
                                                        'cursor-pointer text-nowrap py-theme-sm px-theme-lg rounded-md text-secondary text-small text-text-secondary hover:text-text-primary transition-all duration-400',
                                                        currentCategory === category?.id &&
                                                            'text-text-primary border border-primary',
                                                    )}
                                                    onClick={() => {
                                                        setInit(true);
                                                        setPage(1);
                                                        setCurrentCategory(category?.id);
                                                    }}>
                                                    {parse(category?.name)}
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.nav>
                        )}
                    </div>
                    <motion.nav
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
                        style={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        <div className="grid md:grid-cols-3 items-start gap-theme-3xl gap-y-theme-7xl">
                            {fetchedPosts.length > 0 ? (
                                fetchedPosts?.map((post, index) => {
                                    return (
                                        <Blog_Card_1
                                            key={index}
                                            variant={content?.settings?.variant}
                                            post={post}
                                            showAuthor={content?.showAuthor}
                                            showButton={content?.showButton}
                                        />
                                    );
                                })
                            ) : (
                                <p>Keine Beiträge zu diesem Thema gefunden</p>
                            )}
                        </div>
                        {page < totalPages && (
                            <div
                                className="flex justify-center"
                                ref={loader}>
                                {!isLoading && (
                                    <Button
                                        as="button"
                                        variant="secondary"
                                        onClick={() => {
                                            loadMore();
                                        }}>
                                        Mehr laden
                                    </Button>
                                )}
                                {isLoading && <Loader text="Weitere Posts werden geladen..." />}
                            </div>
                        )}
                    </motion.nav>
                </div>
            </div>
        </Section>
    );
}
