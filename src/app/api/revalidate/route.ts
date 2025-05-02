import { revalidatePath } from 'next/cache';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const token = searchParams.get('token');
        const url = searchParams.get('url');

        if (token !== 'pechschwarz' || !url) {
            return new Response('Token oder String fehlerhaft!', { status: 401 });
        }

        revalidatePath(url || '/');

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ success: false });
    }
}
