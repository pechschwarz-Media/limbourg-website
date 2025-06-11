import { api } from '@/lib/api';
import { FlexibleContent, PostImageType, PostProps } from '@/lib/types';

export async function getPost({ id }: { id: number }) {
    const response = await api<PostProps>(
        `wp/v2/posts/${id}?_embed&_fields=title,link,_embedded,excerpt,acf,date&acf_format=standard&per_page=100`,
    );
    return response;
}
