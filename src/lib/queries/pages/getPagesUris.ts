import { api } from '@/lib/api';

type PageUrisProps = {
    modified: string;
    link: string;
    uri: string[];
};

export async function getPagesUris() {
    const response = await api<PageUrisProps[]>(`wp/v2/pages?_fields=uri,link,modified`);
    return response;
}
