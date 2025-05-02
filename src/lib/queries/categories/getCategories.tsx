import { api } from '@/lib/api';
import { Category } from '@/lib/types';

export async function getCategories() {
    const response = await api<Category[]>(`wp/v2/categories`);
    return response;
}
