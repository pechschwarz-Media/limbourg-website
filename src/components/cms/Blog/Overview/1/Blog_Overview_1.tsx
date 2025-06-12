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
    const posts = await getPreview({
        posttype: content?.posttype,
        amount: content?.amount,
        category: content?.category ? content?.category : [],
    });

    const categories = await getCategories();

    return (
        <Blog_Overview_1_Inner
            content={content}
            posts={posts?.data}
            categories={categories}
            posttype={content?.posttype}
            amount={content?.amount}
            category={content?.category ? content?.category : []}
            total={posts?.headers.get('x-wp-totalpages') || '0'}
        />
    );
}
