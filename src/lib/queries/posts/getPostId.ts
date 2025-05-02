import { api } from '@/lib/api';

export async function getPostId({ slug }: { slug: string }) {
    const response = await api<{ ID: number }>(`wp/v2/post?slug=${slug}&_fields=ID`);
    return response.ID;
}
