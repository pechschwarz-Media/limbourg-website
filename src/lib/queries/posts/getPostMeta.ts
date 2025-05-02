import { api } from '@/lib/api';
import { PageMetaProps } from '../pages/getPageMeta';

type PostMetaProps = PageMetaProps;

export async function getPostMeta({ id }: { id: number }) {
    const response = await api<PostMetaProps>(`wp/v2/post/${id}?_fields=yoast_head_json`);
    return response.yoast_head_json;
}
