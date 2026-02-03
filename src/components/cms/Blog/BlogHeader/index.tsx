import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { Section } from '@/components/static/Section/Section';
import { Headline } from '@/components/ui/Headline/Headline';
import { Tag } from '@/components/ui/Tag/Tag';
import { PostProps } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import dateFormat from 'dateformat';
import parse from 'html-react-parser';

export type BlogHeaderProps = {
    post: PostProps;
};

export default function BlogHeader({ post }: BlogHeaderProps) {
    const postMedia = post?._embedded['wp:featuredmedia']?.at(0);
    return (
        <Section
            dataComponent="Blog Detail"
            settings={{ padding: { top: 'medium', bottom: 'medium' }, variant: 'light' }}>
            <div className="container pt-20 lg:pt-28">
                <div className="flex flex-col gap-20 mb-20">
                    <div className="lg:max-w-2/3">
                        <Link
                            href="/blog"
                            className="flex items-center mb-12">
                            <IconChevronLeft />
                            Alle Beiträge
                        </Link>
                        <div className="flex gap-4 items-center mb-4">
                            <Tag variant="light">{parse(post?._embedded?.['wp:term']?.[0]?.[0]?.name)}</Tag>
                            {post?.date && (
                                <p className="text-text-secondary">{dateFormat(post?.date, 'dd.mm.yyyy')}</p>
                            )}
                        </div>

                        <Headline headline={{ style: 'h2', tagline: '', headline: post?.title?.rendered, tag: 'h1' }} />
                    </div>

                    <div className="h-[600px] w-full rounded-md overflow-hidden">
                        <Image
                            src={postMedia?.source_url ?? ''}
                            alt={postMedia?.alt_text ?? ''}
                            width={postMedia?.media_details?.width}
                            height={postMedia?.media_details?.height}
                            className="size-full object-cover"
                            quality={100}
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
