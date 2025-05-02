import { api } from '@/lib/api';
import { PostPreview } from '@/lib/types';

export async function getPreview({
    id,
    exclude,
    posttype,
    amount,
    category,
}: {
    id?: number | false;
    exclude?: number[];
    posttype: string;
    amount: number;
    category: number[];
}) {
    const response = await api<PostPreview[]>(
        id
            ? `wp/v2/content?id=${id}&posttype=${posttype}&per_page=${amount}&category=${category.join(',')}`
            : `wp/v2/content?posttype=${posttype}&exclude=${
                  exclude ? exclude.join(',') : ''
              }&per_page=${amount}&category=${category.join(',')}`,
        { withHeaders: true },
    );
    return response;
}
