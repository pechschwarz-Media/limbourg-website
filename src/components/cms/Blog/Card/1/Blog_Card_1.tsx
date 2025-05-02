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

const cardVariants = cva('group block rounded-xl p-theme-xl', {
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

export type BlogCard1Props = {
    post: PostPreview;
    variant: VariantProps<typeof cardVariants>['variant'];
    showAuthor: boolean;
    showButton: boolean;
};

export default function Blog_Card_1({ post, variant, showAuthor, showButton }: BlogCard1Props) {
    return (
        <Link
            href={post?.permalink || '#'}
            className={cn(cardVariants({ variant }))}>
            {post?.thumbnail && (
                <div className="rounded-md mb-theme-3xl overflow-hidden">
                    <Image
                        src={post?.thumbnail}
                        alt={post?.title}
                        width="1920"
                        height="1080"
                        className="group-hover:scale-105 transition-all duration-400"
                    />
                </div>
            )}
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
            <div className="space-y-theme-md">
                <Headline
                    headline={{
                        tag: 'h6',
                        style: 'h6',
                        tagline: '',
                        headline: post?.title,
                    }}
                />
                <Wysiwyg
                    text={`<p>${post?.excerpt}</p>`}
                    className={cn(textVariants({ variant }))}
                />
            </div>
            {showButton && (
                <div className="mt-theme-4xl">
                    <Button
                        as="button"
                        variant="primary">
                        Mehr erfahren
                    </Button>
                </div>
            )}
            {showAuthor && (
                <Author
                    author={{
                        image: post?.author?.profileimage,
                        name: post?.author?.name,
                        date: post?.date,
                    }}
                    className="mt-theme-4xl"
                    variant={variant}
                />
            )}
        </Link>
    );
}
