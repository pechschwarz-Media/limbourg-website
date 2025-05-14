import { api } from '@/lib/api';
import { FlexibleContent, PostImageType } from '@/lib/types';

type PostProps = {
    title: {
        rendered: string;
    };
    link: string;
    excerpt: { rendered: string };
    acf: {
        category: number;
        content: FlexibleContent;
    };
    date: string;
    _embedded: {
        'wp:featuredmedia': PostImageType[];
        'wp:term': [[{ name: string }]];
    };
};

export async function getPost({ id }: { id: number }) {
    const response = await api<PostProps>(
        `wp/v2/posts/${id}?_embed&_fields=title,_embedded,excerpt,acf,date&acf_format=standard`,
    );
    return response;
}
