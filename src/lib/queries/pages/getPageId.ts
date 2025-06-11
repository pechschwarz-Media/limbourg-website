import { api } from '@/lib/api';

export async function getPageId({ uri }: { uri: string }) {
    const response = await api<{ ID: number }>(`wp/v2/page?url=${uri}&_fields=ID&per_page=100`);
    return response.ID;
}
