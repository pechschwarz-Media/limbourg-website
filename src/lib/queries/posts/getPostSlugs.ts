import { api } from '@/lib/api';

type PostSlugsProps = {
    modified: string;
    slug: string;
};

export async function getPostSlugs() {
    const response = await api<PostSlugsProps[]>(`wp/v2/posts?_fields=slug,modified`);
    return response;
}
