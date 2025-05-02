import { api } from '@/lib/api';

type PostProps = {
    title: {
        rendered: string;
    };
    acf: {
        content: any[];
    };
};

export async function getPost({ id }: { id: number }) {
    const response = await api<PostProps>(`wp/v2/post/${id}?_fields=title,acf&acf_format=standard`);
    return response;
}
