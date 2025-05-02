import { getCategories } from '@/lib/queries/categories/getCategories';
import { getPreview } from '@/lib/queries/preview/getPreview';
import { AcfTextBlock, Settings } from '@/lib/types';
import Blog_Overview_1_Inner from './Blog_Overview_1_Inner';

export type BlogOverview1Props = {
    textblock: AcfTextBlock;
    amount: number;
    posttype: string;
    category: number[] | false;
    featured: number | false;
    showAuthor: true;
    showButton: false;
    textAlign: 'left' | 'center';
    settings: Settings;
};

export default async function Blog_Overview_1(content: BlogOverview1Props) {
    const featured = await getPreview({
        id: content?.featured,
        posttype: content?.posttype,
        amount: 1,
        category: content?.category ? content?.category : [],
    });

    const featuredId = featured?.data?.at(0)?.id;

    const posts = await getPreview({
        exclude: featuredId ? [featuredId] : [],
        posttype: content?.posttype,
        amount: content?.amount,
        category: content?.category ? content?.category : [],
    });

    const categories = await getCategories();

    return (
        <Blog_Overview_1_Inner
            content={content}
            featured={featured.data?.at(0)}
            posts={posts?.data}
            categories={categories}
            posttype={content?.posttype}
            exclude={featuredId ? [featuredId] : []}
            amount={content?.amount}
            category={content?.category ? content?.category : []}
            total={posts?.headers.get('x-wp-totalpages') || '0'}
        />
    );
}
