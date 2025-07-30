import ComponentRenderer from '@/lib/ComponentRenderer';
import getOptions from '@/lib/queries/options/getOptions';
import { getPage } from '@/lib/queries/pages/getPage';
import { getPageId } from '@/lib/queries/pages/getPageId';
import { getPageMeta } from '@/lib/queries/pages/getPageMeta';
import { getPagesUris } from '@/lib/queries/pages/getPagesUris';
import NotFound from '../not-found';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function generateStaticParams() {
    const pages = await getPagesUris();

    const params = pages.map((page) => {
        return {
            uri: page.uri,
        };
    });

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ uri: string[] }> }) {
    const resolvedParams = await params;
    const uriPath = resolvedParams.uri ? `/${resolvedParams.uri.join('/')}/` : '/';

    const id = await getPageId({ uri: uriPath });

    if (id) {
        const metadata = await getPageMeta({ id });

        const isKontakt = uriPath === '/kontakt/' || uriPath === '/kontakt';

        return {
            title: metadata?.title,
            description: metadata?.description || '',
            robots: {
                index: metadata?.robots?.index,
                follow: metadata?.robots?.follow,
            },
            ...(isKontakt && {
                alternates: {
                    canonical: 'https://dr-limbourg.de/kontakt/',
                },
            }),
        };
    }
}

export default async function Page({ params }: { params: Promise<{ uri: string[] }> }) {
    const uri = (await params).uri ? `/${(await params).uri.join('/')}/` : '/';

    const id = await getPageId({ uri });

    if (!id) {
        NotFound();
    }

    const page = await getPage({ id });
    const options = await getOptions();

    switch (page?.template) {
        case 'page-legal.php':
            return <>Hier folgt das Legal-Template!</>;
        default:
            return (
                <>
                    <ComponentRenderer
                        content={page?.acf?.content}
                        options={options}
                    />
                </>
            );
    }
}
