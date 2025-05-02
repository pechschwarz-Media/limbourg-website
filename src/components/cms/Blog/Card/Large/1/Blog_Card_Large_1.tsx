import { Author } from '@/components/ui/Author/Author';
import { Button } from '@/components/ui/Button/Button';
import { Headline } from '@/components/ui/Headline/Headline';
import { Tag } from '@/components/ui/Tag/Tag';
import { Wysiwyg } from '@/components/ui/Wysiwyg/Wysiwyg';
import { PostPreview } from '@/lib/types';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

const cardVariants = cva('group flex rounded-xl overflow-hidden', {
    variants: {
        variant: {
            dark: 'bg-neutral-900 text-text-alternate',
            light: 'bg-neutral-100 text-text-primary',
            darkPrimary: 'bg-brand-primary-900 text-text-alternate',
            lightPrimary: 'bg-brand-primary-100 text-text-primary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const textVariants = cva('', {
    variants: {
        variant: {
            dark: 'text-text-tertiary',
            light: 'text-text-secondary',
            darkPrimary: 'text-text-tertiary',
            lightPrimary: 'text-text-secondary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

export type BlogCardLarge1Props = {
    post: PostPreview;
    variant: VariantProps<typeof cardVariants>['variant'];
    showAuthor: boolean;
    showButton: boolean;
};

export default function Blog_Card_Large_1({ post, variant, showAuthor, showButton }: BlogCardLarge1Props) {
    return (
        <Link
            href={post?.permalink || '#'}
            className={cn(cardVariants({ variant }))}>
            {post?.thumbnail && (
                <div className="flex-1 overflow-hidden">
                    <Image
                        src={post?.thumbnail}
                        alt={post?.title}
                        width="1920"
                        height="1080"
                        className="group-hover:scale-105 transition-all duration-400 object-cover size-full"
                    />
                </div>
            )}
            <div className="flex-1 flex flex-col justify-between p-theme-6xl">
                <div className="space-y-theme-3xl">
                    {post?.categories?.length > 0 && (
                        <div className="mb-theme-xl">
                            <div className="flex gap-theme-md">
                                {post?.categories?.map((category, index) => {
                                    return (
                                        <Tag
                                            key={index}
                                            variant={variant}>
                                            {category?.name}
                                        </Tag>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    <Headline
                        headline={{
                            tag: 'h3',
                            style: 'h3',
                            tagline: '',
                            headline: post?.title,
                        }}
                    />
                    <Wysiwyg
                        text={`<p>${post?.excerpt}</p>`}
                        className={cn(textVariants({ variant }))}
                    />
                    {showButton && (
                        <div>
                            <Button
                                as="button"
                                variant="primary">
                                Mehr erfahren
                            </Button>
                        </div>
                    )}
                </div>
                {showAuthor && (
                    <Author
                        author={{
                            image: post?.author?.profileimage,
                            name: post?.author?.name,
                            date: post?.date,
                        }}
                        className="mt-theme-3xl"
                        variant={variant}
                    />
                )}
            </div>
        </Link>
    );
}
