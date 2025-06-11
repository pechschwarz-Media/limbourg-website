import { api } from '@/lib/api';

type PageProps = {
    title: {
        rendered: string;
    };
    template: string;
    acf: {
        content: any[];
    };
};

export async function getPage({ id }: { id: number }) {
    const response = await api<PageProps>(
        `wp/v2/pages/${id}?_fields=title,template,acf&acf_format=standard&per_page=100`,
    );
    return response;
}
