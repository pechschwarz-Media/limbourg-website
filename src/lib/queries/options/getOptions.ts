import { api } from '@/lib/api';
import { Options } from '@/lib/types';

export default async function getOptions() {
    const response = await api<Options>(`wp/v2/options/`);
    return response;
}
