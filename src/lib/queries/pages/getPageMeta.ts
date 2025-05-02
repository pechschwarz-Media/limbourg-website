import { api } from '@/lib/api';

export type PageMetaProps = {
    yoast_head_json: {
        title: string;
        description: string;
        robots: {
            index: string;
            follow: string;
        };
    };
};

export async function getPageMeta({ id }: { id: number }) {
    const response = await api<PageMetaProps>(`wp/v2/pages/${id}?_fields=yoast_head_json`);
    return response.yoast_head_json;
}
