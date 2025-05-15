import { api } from '@/lib/api';
import { ImageType, PostImageType } from '@/lib/types';

export type TeamProps = {
    acf: {
        portrait: ImageType;
        jobtitle: string;
    };
    title: {
        rendered: string;
    };
};

export default async function getAuthor(authorIds: string | undefined) {
    if (authorIds) {
        const response = await api<TeamProps[]>(`wp/v2/team?include=${authorIds}&acf_format=standard&_embed`);
        return response;
    } else {
        return null;
    }
}
