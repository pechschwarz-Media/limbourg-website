import ComponentRenderer from '@/lib/ComponentRenderer';
import { getPost } from '@/lib/queries/posts/getPost';
import { getPostId } from '@/lib/queries/posts/getPostId';
import { getPostMeta } from '@/lib/queries/posts/getPostMeta';
import { getPostSlugs } from '@/lib/queries/posts/getPostSlugs';
import { notFound } from 'next/navigation';

// export async function generateStaticParams() {
//     const posts = await getPostSlugs();

//     const params = posts.map((post) => {
//         return {
//             slug: post.slug,
//         };
//     });

//     return params;
// }

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
//     const id = await getPostId({ slug: (await params).slug });

//     if (id) {
//         const metadata = await getPostMeta({ id });
//         return {
//             title: metadata?.title,
//             description: metadata?.description || '',
//             robots: {
//                 index: metadata?.robots?.index,
//                 follow: metadata?.robots?.follow,
//             },
//         };
//     }
// }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const id = await getPostId({ slug: (await params).slug });

    if (!id) {
        notFound();
    }

    const post = await getPost({ id });

    return (
        <>
            <ComponentRenderer content={post?.acf?.content} />
        </>
    );
}
