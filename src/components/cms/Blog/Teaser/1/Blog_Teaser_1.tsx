import { getPreview } from '@/lib/queries/preview/getPreview';
import { AcfTextBlock, Settings } from '@/lib/types';
import Blog_Teaser_1_Inner from './Blog_Teaser_1_Inner';

export type BlogTeaser1Props = {
    textblock: AcfTextBlock;
    amount: number;
    allposts: boolean;
    posttype: string;
    category: number[] | false;
    showAuthor: boolean;
    showButton: boolean;
    textAlign: 'left' | 'center';
    settings: Settings;
};

export default async function Blog_Teaser_1(content: BlogTeaser1Props) {
    const posts = await getPreview({
        posttype: content?.posttype,
        amount: content?.amount,
        category: content?.category ? content?.category : [],
    });

    return (
        <Blog_Teaser_1_Inner
            content={content}
            posts={posts?.data}
        />
    );
}
